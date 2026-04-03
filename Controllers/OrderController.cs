using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

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

        // GET: api/order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .ToListAsync();
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

        // POST: api/order
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Cargar los items con sus productos
            var orderWithItems = await _context.Orders
                .Include(o => o.Items)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == order.Id);

            // Enviar al hub con toda la información
            await _hubContext.Clients.Group("Cocina").SendAsync("NuevoPedido", orderWithItems);

            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, orderWithItems);
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