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

        // Helper: notifica a Cocina y Cantadores en una sola llamada
        private async Task NotifyKitchen(Order? orderWithItems)
        {
            if (orderWithItems == null) return;
            await _hubContext.Clients.Group("Cocina")
                .SendAsync("ActualizacionPedido", orderWithItems);
            await _hubContext.Clients.Group("Cantadores")
                .SendAsync("ActualizacionPedido", orderWithItems);
        }

        // ═══════════════════════════════════════════════════════════════════════════════
        // RUTAS ESPECÍFICAS (van primero)
        // ═══════════════════════════════════════════════════════════════════════════════

        [HttpGet("table/{tableNumber}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrdersByTable(int tableNumber)
        {
            return await _context.Orders
                .Where(o => o.TableNumber == tableNumber)
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .ToListAsync();
        }

        [HttpGet("{id}/comprobante")]
        public IActionResult DescargarComprobante(int id)
        {
            try
            {
                var order = _context.Orders
                    .Include(o => o.Items!)
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

        [HttpGet("{id}/history")]
        public async Task<ActionResult<IEnumerable<object>>> GetOrderHistory(int id)
        {
            try
            {
                var history = await _context.OrderHistories
                    .Where(h => h.OrderId == id)
                    .OrderBy(h => h.CreatedAt)
                    .ToListAsync();

                if (history == null || history.Count == 0)
                    return NotFound("No hay histórico para esta orden");

                var products = await _context.Products.ToListAsync();

                var result = history.Select(h => new
                {
                    h.Id,
                    h.OrderId,
                    h.Action,
                    h.RoundNumber,
                    h.CreatedAt,

                    Items = string.IsNullOrEmpty(h.ItemsAdded)
                    ? new List<OrderHistoryItemResultDto>()
                    : (System.Text.Json.JsonSerializer
                        .Deserialize<List<HistorialItemDto>>(
                            h.ItemsAdded,
                            new System.Text.Json.JsonSerializerOptions
                            {
                                PropertyNameCaseInsensitive = true
                            })
                        ?? new List<HistorialItemDto>())
                        .Select(i => new OrderHistoryItemResultDto
                        {
                            ProductId = i.ProductId,

                            ProductName = products
                                .FirstOrDefault(p => p.Id == i.ProductId)?.Name
                                ?? "Producto",

                            Quantity = i.Quantity,

                            UnitPrice = i.UnitPrice
                        })
                        .ToList()
                });

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // DTO para representar los ítems en la respuesta de histórico (tipo concreto para evitar CS0173)
        public class OrderHistoryItemResultDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }

        // ═══════════════════════════════════════════════════════════════════════════════
        // Modificar cantidad de un item
        // PUT: api/order/{orderId}/item/{itemId}
        // ═══════════════════════════════════════════════════════════════════════════════
        [HttpPut("{orderId}/item/{itemId}")]
        public async Task<IActionResult> UpdateItemQuantity(
        int orderId, int itemId, [FromBody] UpdateItemRequest request)
        {
            try
            {
                var order = await _context.Orders
                    .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == orderId);

                if (order == null)
                    return NotFound("Orden no encontrada");

                if (order.Status == "Listo")
                    return BadRequest("No se puede modificar una orden ya lista");

                var item = order.Items?.FirstOrDefault(i => i.Id == itemId);
                if (item == null)
                    return NotFound("Item no encontrado");

                var oldQuantity = item.Quantity;
                var productName = item.Product?.Name ?? $"Producto #{item.ProductId}";

                // ⚠ Si la nueva cantidad es menor a lo ya servido, ajustar ServedQuantity
                if (request.Quantity < item.ServedQuantity)
                    item.ServedQuantity = request.Quantity;

                // Recalcular total
                var diff = (request.Quantity - oldQuantity) * item.UnitPrice;
                order.Total += diff;
                order.UpdatedAt = DateTime.UtcNow;
                item.Quantity = request.Quantity;
                _context.Update(item);
                _context.Update(order);

                // ✅ Calcular en qué ronda normal estaba este producto
                var allHistory = await _context.OrderHistories
                    .Where(h => h.OrderId == orderId)
                    .OrderBy(h => h.CreatedAt)
                    .ToListAsync();

                int roundNumber = 1;
                int normalRound = 0;
                foreach (var h in allHistory)
                {
                    if (h.Action == "Inicial" || h.Action == "Agregado")
                    {
                        normalRound++;
                        try
                        {
                            var items = JsonConvert.DeserializeObject<List<dynamic>>(h.ItemsAdded);
                            bool found = items?.Any(i => (int)i.productId == item.ProductId) ?? false;
                            if (found) roundNumber = normalRound;
                        }
                        catch { }
                    }
                }

                var historyEntry = new OrderHistory
                {
                    OrderId = orderId,
                    Action = "Modificado",
                    RoundNumber = roundNumber,
                    ItemsAdded = JsonConvert.SerializeObject(new[] { new
            {
                productId   = item.ProductId,
                productName = productName,
                oldQuantity = oldQuantity,
                quantity    = request.Quantity,
                unitPrice   = item.UnitPrice
            }}),
                    CreatedAt = DateTime.UtcNow
                };
                _context.OrderHistories.Add(historyEntry);

                await _context.SaveChangesAsync();

                var orderWithItems = await _context.Orders
                    .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == orderId);

                await NotifyKitchen(orderWithItems);

                return Ok(orderWithItems);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // ═══════════════════════════════════════════════════════════════════════════════
        // Eliminar un item de la orden
        // DELETE: api/order/{orderId}/item/{itemId}
        // ═══════════════════════════════════════════════════════════════════════════════
        [HttpDelete("{orderId}/item/{itemId}")]
        public async Task<IActionResult> RemoveItemFromOrder(int orderId, int itemId)
        {
            try
            {
                var order = await _context.Orders
                    .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == orderId);

                if (order == null)
                    return NotFound("Orden no encontrada");

                if (order.Status == "Listo")
                    return BadRequest("No se puede modificar una orden ya lista");

                var item = order.Items?.FirstOrDefault(i => i.Id == itemId);
                if (item == null)
                    return NotFound("Item no encontrado");

                var productName = item.Product?.Name ?? $"Producto #{item.ProductId}";

                order.Total -= item.Quantity * item.UnitPrice;
                order.UpdatedAt = DateTime.UtcNow;
                _context.Update(order);
                _context.OrderItems.Remove(item);

                // ✅ Calcular en qué ronda normal estaba este producto
                var allHistory = await _context.OrderHistories
                    .Where(h => h.OrderId == orderId)
                    .OrderBy(h => h.CreatedAt)
                    .ToListAsync();

                int roundNumber = 1;
                int normalRound = 0;
                foreach (var h in allHistory)
                {
                    if (h.Action == "Inicial" || h.Action == "Agregado")
                    {
                        normalRound++;
                        try
                        {
                            var items = JsonConvert.DeserializeObject<List<dynamic>>(h.ItemsAdded);
                            bool found = items?.Any(i => (int)i.productId == item.ProductId) ?? false;
                            if (found) roundNumber = normalRound;
                        }
                        catch { }
                    }
                }

                var historyEntry = new OrderHistory
                {
                    OrderId = orderId,
                    Action = "Cancelado",
                    RoundNumber = roundNumber,
                    ItemsAdded = JsonConvert.SerializeObject(new[] { new
            {
                productId   = item.ProductId,
                productName = productName,
                quantity    = item.Quantity,
                unitPrice   = item.UnitPrice
            }}),
                    CreatedAt = DateTime.UtcNow
                };
                _context.OrderHistories.Add(historyEntry);

                await _context.SaveChangesAsync();

                var orderWithItems = await _context.Orders
                    .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == orderId);

                await NotifyKitchen(orderWithItems);

                return Ok(orderWithItems);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // ═══════════════════════════════════════════════════════════════════════════════
        // RUTAS GENÉRICAS
        // ═══════════════════════════════════════════════════════════════════════════════

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            try
            {
                // 1. Obtenemos primero la zona horaria y la hora exacta de Perú (ej. 00:27)
                var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
                var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);

                // 2. Le asignamos ESA hora exacta directamente a la orden
                order.CreatedAt = nowInPeru;
                order.UpdatedAt = nowInPeru;

                Console.WriteLine("===== ORDER RECIBIDA =====");
                Console.WriteLine(JsonConvert.SerializeObject(order, Formatting.Indented));

                // 3. Calculamos los límites del día usando nowInPeru para agrupar las comandas
                var todayInPeru = nowInPeru.Date;
                var startOfDayPeruUtc = TimeZoneInfo.ConvertTimeToUtc(todayInPeru, peruTimeZone);
                var endOfDayPeruUtc = startOfDayPeruUtc.AddDays(1);

                // Buscamos la última orden de la misma mesa...
                var lastOrderToday = order.WaiterName == "Caja" ? null : await _context.Orders
                    .Where(o => o.TableNumber == order.TableNumber &&
                                o.CreatedAt >= startOfDayPeruUtc &&
                                o.CreatedAt < endOfDayPeruUtc &&
                                o.IsParaLlevar == order.IsParaLlevar &&
                                (o.Status == "Pendiente" || o.Status == "Enviado a cocina"))
                    .OrderByDescending(o => o.Id)
                    .FirstOrDefaultAsync();

                // ... EL RESTO DE TU CÓDIGO SE MANTIENE EXACTAMENTE IGUAL ...

                var cashierOrders = await _context.Orders
                    .Where(o => o.WaiterName == "Caja")
                    .ToListAsync();

                Order orderToUse;
                bool isNewOrder = false;

                // Si existe orden previa del mismo tipo, acumular en ella.
                if (lastOrderToday != null)
                {
                    var itemsSnapshot = order.Items?.Select(i => new
                    {
                        productId = i.ProductId,
                        quantity = i.Quantity,
                        unitPrice = i.UnitPrice
                    }).ToList();

                    var itemsAddedJson = JsonConvert.SerializeObject(itemsSnapshot);

                    lastOrderToday = await _context.Orders
                        .Include(o => o.Items)
                        .FirstOrDefaultAsync(o => o.Id == lastOrderToday.Id);

                    orderToUse = lastOrderToday!;
                    orderToUse.Total += order.Total;
                    orderToUse.WasSung = false;
                    orderToUse.UpdatedAt = DateTime.UtcNow;

                    if (order.Items != null)
                    {
                        foreach (var item in order.Items)
                        {
                            var existingItem = lastOrderToday!.Items?
                                .FirstOrDefault(i => i.ProductId == item.ProductId);
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
                        ItemsAdded = itemsAddedJson,
                        CreatedAt = DateTime.UtcNow
                    };
                    _context.OrderHistories.Add(historyEntry);
                }
                else
                {
                    // No hay orden previa → crear orden nueva con comanda correlativa
                    order.Comanda = 'A';
                    isNewOrder = true;

                    var anyLastToday = await _context.Orders
                        .Where(o => o.CreatedAt >= startOfDayPeruUtc && o.CreatedAt < endOfDayPeruUtc)
                        .OrderByDescending(o => o.Id)
                        .FirstOrDefaultAsync();

                    if (anyLastToday != null)
                        order.Comanda = (char)(anyLastToday.Comanda + 1);

                    _context.Orders.Add(order);
                    orderToUse = order;
                }

                await _context.SaveChangesAsync();

                if (isNewOrder)
                {
                    var itemsSnapshot = order.Items?.Select(i => new
                    {
                        productId = i.ProductId,
                        quantity = i.Quantity,
                        unitPrice = i.UnitPrice
                    }).ToList();

                    var historyEntry = new OrderHistory
                    {
                        OrderId = orderToUse.Id,
                        Action = "Inicial",
                        ItemsAdded = JsonConvert.SerializeObject(itemsSnapshot),
                        CreatedAt = orderToUse.CreatedAt
                    };
                    _context.OrderHistories.Add(historyEntry);
                    await _context.SaveChangesAsync();
                }

                var orderWithItems = await _context.Orders
                    .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
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

                await NotifyKitchen(orderWithItems);

                await _hubContext.Clients.Group("Mozos")
                    .SendAsync("MesaCambio", new { tableNumber = orderWithItems.TableNumber, isOccupied = true });

                return CreatedAtAction(nameof(GetOrder), new { id = orderWithItems.Id }, orderWithItems);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error en CreateOrder: {ex.Message}");
                if (ex.InnerException != null)
                    Console.WriteLine($"❌ Inner: {ex.InnerException.Message}");
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var query = _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .Include(o => o.History);
            return await query.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
                return NotFound();

            return order;
        }

        [HttpPost("{orderId}/item")]
        public async Task<ActionResult<OrderItem>> AddItemToOrder(int orderId, OrderItem item)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null)
                return NotFound("Order no encontrada");

            item.OrderId = orderId;
            _context.OrderItems.Add(item);
            await _context.SaveChangesAsync();

            var orderWithItems = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == orderId);

            await NotifyKitchen(orderWithItems);

            return CreatedAtAction(nameof(GetOrder), new { id = orderId }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder(int id, Order order)
        {
            if (id != order.Id)
                return BadRequest();

            _context.Entry(order).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateOrderStatus(int id, [FromBody] string status)
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
                return NotFound();

            if (order.TableNumber == 0 && order.WaiterName == "Caja")
            {
                order.Status = "Cobrado";
            }
            else
            {
                order.Status = status;
            }

            order.UpdatedAt = DateTime.UtcNow;

            // ✅ Si el chef desde la web marca "Listo", también ajustamos los ServedQuantity
            //    para mantener consistencia con el cantador.
            if (status == "Listo" && order.Items != null)
            {
                foreach (var item in order.Items)
                {
                    if (item.ServedQuantity < item.Quantity)
                    {
                        item.ServedQuantity = item.Quantity;
                        _context.Update(item);
                    }
                }
            }

            _context.Entry(order).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            // ✅ FIX: Notificar a Cocina (web del chef) y Cantadores que la orden cambió.
            //    Antes solo notificábamos a Mozos y Cantadores con MesaCambio/OrderStatusChanged,
            //    pero la web del chef NO recibía nada y solo se actualizaba al recargar manualmente.
            //
            //    Recargamos la orden con todos los includes para enviarla completa.
            var orderWithItems = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == id);

            await NotifyKitchen(orderWithItems);

            // Mantener notificaciones específicas a Mozos y Cantadores cuando cambia a Listo/Cancelado
            if (status == "Listo" || status == "Cancelado")
            {
                await _hubContext.Clients.Group("Mozos")
                    .SendAsync("MesaCambio", new { tableNumber = order.TableNumber, isOccupied = false });
                await _hubContext.Clients.Group("Cantadores")
                    .SendAsync("OrderStatusChanged", new { orderId = order.Id, status = status });
            }

            return NoContent();
        }

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

        [HttpPost("{orderId}/items-batch")]
        public async Task<ActionResult> AddItemsBatchToOrder(int orderId, [FromBody] AddItemsBatchRequest request)
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == orderId);

            if (order == null)
                return NotFound("Orden no encontrada");

            // 1. Manejo de los ítems (segundos)
            if (request.Items != null && request.Items.Count > 0)
            {
                var snapshot = request.Items.Select(i => new
                {
                    productId = i.ProductId,
                    quantity = i.Quantity,
                    unitPrice = i.UnitPrice
                }).ToList();

                foreach (var item in request.Items)
                {
                    var existing = order.Items?.FirstOrDefault(i => i.ProductId == item.ProductId);
                    if (existing != null)
                    {
                        existing.Quantity += item.Quantity;
                        _context.Update(existing);
                    }
                    else
                    {
                        item.OrderId = orderId;
                        _context.OrderItems.Add(item);
                    }
                }

                order.Total += request.Items.Sum(i => i.Quantity * i.UnitPrice);

                var historyEntry = new OrderHistory
                {
                    OrderId = orderId,
                    Action = "Agregado",
                    ItemsAdded = JsonConvert.SerializeObject(snapshot),
                    CreatedAt = DateTime.UtcNow
                };
                _context.OrderHistories.Add(historyEntry);
            }

            // 🛑 2. NUEVA LÓGICA: ACTUALIZACIÓN DE ENTRADAS 🛑
            if (!string.IsNullOrEmpty(request.Entradas))
            {
                order.Entradas = request.Entradas;
            }

            // Si se agregan items o se actualizan entradas, hay que volver a cantar
            if ((request.Items != null && request.Items.Count > 0) || !string.IsNullOrEmpty(request.Entradas))
            {
                order.WasSung = false;
                _context.Update(order);
            }

            await _context.SaveChangesAsync();

            var orderWithItems = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.Id == orderId);

            await NotifyKitchen(orderWithItems);

            return Ok(orderWithItems);
        }
    }

    // DTO para recibir la nueva cantidad en UpdateItemQuantity
    public class UpdateItemRequest
    {
        public int Quantity { get; set; }
    }

    // 🛑 NUEVO DTO PARA RECIBIR ITEMS Y ENTRADAS JUNTOS 🛑
    public class AddItemsBatchRequest
    {
        public List<OrderItem> Items { get; set; } = new List<OrderItem>();
        public string? Entradas { get; set; } // Opcional, puede venir nulo
    }
}