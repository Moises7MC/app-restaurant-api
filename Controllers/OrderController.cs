using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using AppRestaurantAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace AppRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hubContext;

        public OrderController(AppDbContext context, IHubContext<OrderHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        // ════════════════════════════════════
        // RUTAS ESPECÍFICAS (van primero)
        // ════════════════════════════════════

        // GET: api/order/table/2
        [HttpGet("table/{tableNumber}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrdersByTable(int tableNumber)
        {
            return await _context.Orders
                .Where(o => o.TableNumber == tableNumber)
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .ToListAsync();
        }

        // GET: api/order/5/comprobante
        [HttpGet("{id}/comprobante")]
        public IActionResult DescargarComprobante(int id)
        {
            try
            {
                var order = _context.Orders
                    .Include(o => o.Items)
                    .ThenInclude(oi => oi.Product)
                    .FirstOrDefault(o => o.Id == id);

                if (order == null)
                    return NotFound("Orden no encontrada");

                byte[] pdfBytes = ComprobantePdfService.GenerarComprobante(order);
                return File(pdfBytes, "application/pdf",
                    $"Comprobante_{order.Id:D6}_{DateTime.Now:yyyyMMdd_HHmmss}.pdf");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al generar comprobante: {ex.Message}");
            }
        }

        // GET: api/order/5/history
        [HttpGet("{id}/history")]
        public async Task<ActionResult<IEnumerable<OrderHistory>>> GetOrderHistory(int id)
        {
            try
            {
                var history = await _context.OrderHistories
                    .Where(h => h.OrderId == id)
                    .OrderBy(h => h.CreatedAt)
                    .ToListAsync();

                if (history == null || history.Count == 0)
                    return NotFound("No hay histórico para esta orden");

                return Ok(history);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // ════════════════════════════════════
        // RUTAS GENÉRICAS (van después)
        // ════════════════════════════════════

        // POST: api/order
        // POST: api/order
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            try
            {
                var today = DateTime.UtcNow.Date;

                // ✅ SIN includes en esta primera query
                var lastOrderToday = await _context.Orders
                    .Where(o => o.TableNumber == order.TableNumber &&
                                o.CreatedAt.Date == today)
                    .OrderByDescending(o => o.Id)
                    .FirstOrDefaultAsync();

                Order orderToUse;
                bool isNewOrder = false;

                if (lastOrderToday != null &&
                    (lastOrderToday.Status == "Pendiente" || lastOrderToday.Status == "Enviado a cocina"))
                {
                    // Recarga con items
                    lastOrderToday = await _context.Orders
                        .Include(o => o.Items)
                        .FirstOrDefaultAsync(o => o.Id == lastOrderToday.Id);

                    orderToUse = lastOrderToday;
                    orderToUse.Total += order.Total;

                    if (order.Items != null)
                    {
                        foreach (var item in order.Items)
                        {
                            var existingItem = lastOrderToday.Items?.FirstOrDefault(i => i.ProductId == item.ProductId);
                            if (existingItem != null)
                            {
                                existingItem.Quantity += item.Quantity;
                                _context.Update(existingItem);
                            }
                            else
                            {
                                item.OrderId = orderToUse.Id;
                                _context.OrderItems.Add(item);
                            }
                        }
                    }

                    _context.Update(orderToUse);

                    var historyEntry = new OrderHistory
                    {
                        OrderId = orderToUse.Id,
                        Action = "Agregado",
                        ItemsAdded = JsonConvert.SerializeObject(order.Items),
                        CreatedAt = DateTime.UtcNow
                    };
                    _context.OrderHistories.Add(historyEntry);
                }
                else
                {
                    order.Comanda = 'A';
                    isNewOrder = true;

                    if (lastOrderToday != null)
                    {
                        order.Comanda = (char)(lastOrderToday.Comanda + 1);
                    }

                    _context.Orders.Add(order);
                    orderToUse = order;
                }

                await _context.SaveChangesAsync();

                if (isNewOrder)
                {
                    var historyEntry = new OrderHistory
                    {
                        OrderId = orderToUse.Id,
                        Action = "Inicial",
                        ItemsAdded = JsonConvert.SerializeObject(order.Items),
                        CreatedAt = orderToUse.CreatedAt
                    };
                    _context.OrderHistories.Add(historyEntry);
                    await _context.SaveChangesAsync();
                }

                // ✅ Recarga COMPLETA la orden
                var orderWithItems = await _context.Orders
                    .Include(o => o.Items)
                    .ThenInclude(oi => oi.Product)
                    .Include(o => o.History)
                    .FirstOrDefaultAsync(o => o.Id == orderToUse.Id);

                if (orderWithItems == null)
                    return NotFound("Orden no encontrada");

                try
                {
                    byte[] pdfBytes = ComprobantePdfService.GenerarComprobante(orderWithItems);
                    Console.WriteLine($"✓ PDF generado para orden {orderWithItems.Id}");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"✗ Error generando PDF: {ex.Message}");
                }

                await _hubContext.Clients.Group("Cocina").SendAsync("ActualizacionPedido", orderWithItems);

                return CreatedAtAction(nameof(GetOrder), new { id = orderWithItems.Id }, orderWithItems);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error en CreateOrder: {ex.Message}");
                Console.WriteLine($"Stack: {ex.StackTrace}");

                // ← AGREGAR ESTO
                if (ex.InnerException != null)
                {
                    Console.WriteLine($"❌ Inner Exception: {ex.InnerException.Message}");
                    Console.WriteLine($"Stack Inner: {ex.InnerException.StackTrace}");
                }

                return BadRequest($"Error: {ex.Message}");
            }
        }

        // GET: api/order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var query = _context.Orders
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .Include(o => o.History);

            // Imprime el SQL generado
            Console.WriteLine(query.ToQueryString());

            return await query.ToListAsync();
        }

        // GET: api/order/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
                return NotFound();

            return order;
        }

        // POST: api/order/5/item
        [HttpPost("{orderId}/item")]
        public async Task<ActionResult<OrderItem>> AddItemToOrder(int orderId, OrderItem item)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null)
                return NotFound("Order no encontrada");

            item.OrderId = orderId;
            _context.OrderItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { id = orderId }, item);
        }

        // PUT: api/order/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder(int id, Order order)
        {
            if (id != order.Id)
                return BadRequest();

            _context.Entry(order).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/order/5/status
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] string status)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
                return NotFound();

            order.Status = status;
            order.UpdatedAt = DateTime.UtcNow;
            _context.Entry(order).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/order/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
                return NotFound();

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}