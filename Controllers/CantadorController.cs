using AppRestaurantAPI.Data;
using AppRestaurantAPI.DTOs;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CantadorController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hubContext;

        public CantadorController(AppDbContext context, IHubContext<OrderHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET: api/cantador/aggregated
        // Vista "POR CANTIDADES" — suma todos los platos pendientes de hoy
        // agrupados por producto, sin distinguir mesa.
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("aggregated")]
        public async Task<ActionResult<CantadorAggregatedViewDto>> GetAggregatedView()
        {
            try
            {
                var today = DateTime.UtcNow.Date;

                // Órdenes activas (las que el cantador debe trackear)
                var activeOrders = await _context.Orders
                    .Where(o => o.CreatedAt.Date == today &&
                                (o.Status == "Pendiente" || o.Status == "Enviado a cocina"))
                    .Include(o => o.Items!)
                        .ThenInclude(oi => oi.Product)
                    .OrderBy(o => o.CreatedAt)  // FIFO: la mesa que pidió primero está primero
                    .ToListAsync();

                // ─── SEGUNDOS (OrderItems con Quantity > ServedQuantity) ───
                var segundos = activeOrders
                    .SelectMany(o => (o.Items ?? new List<OrderItem>())
                        .Where(i => i.Quantity > i.ServedQuantity)
                        .Select(i => new
                        {
                            ProductId = i.ProductId,
                            ProductName = i.Product?.Name ?? $"Producto #{i.ProductId}",
                            PendingQty = i.Quantity - i.ServedQuantity,
                            TableNumber = o.TableNumber,
                            IsParaLlevar = o.IsParaLlevar
                        }))
                    .GroupBy(x => new { x.ProductId, x.ProductName })
                    .Select(g => new AggregatedDishDto
                    {
                        ProductId = g.Key.ProductId,
                        ProductName = g.Key.ProductName,
                        PendingQuantity = g.Sum(x => x.PendingQty),
                        PendingTables = g
                            .GroupBy(x => new { x.TableNumber, x.IsParaLlevar })
                            .Select(tg =>
                            {
                                var label = tg.Key.IsParaLlevar
                                    ? (tg.Key.TableNumber == 0 ? "VD" : $"M{tg.Key.TableNumber:D2}🛍")
                                    : $"M{tg.Key.TableNumber:D2}";
                                var qty = tg.Sum(x => x.PendingQty);
                                return qty > 1 ? $"{label}×{qty}" : label;
                            })
                            .ToList()
                    })
                    .OrderByDescending(d => d.PendingQuantity)
                    .ToList();

                // ─── ENTRADAS (cortesías del campo Order.Entradas) ───
                // Order.Entradas es un string. Asumimos formato "humita,humita,ensalada rusa" o similar.
                // Hacemos parse robusto.
                var entradas = activeOrders
                    .Where(o => !string.IsNullOrWhiteSpace(o.Entradas))
                    .SelectMany(o => ParseEntradas(o.Entradas!)
                        .Select(name => new
                        {
                            Name = name,
                            TableNumber = o.TableNumber,
                            IsParaLlevar = o.IsParaLlevar
                        }))
                    .GroupBy(x => x.Name.ToLower().Trim())
                    .Select(g => new AggregatedEntradaDto
                    {
                        Name = g.First().Name,
                        PendingQuantity = g.Count(),
                        PendingTables = g
                            .GroupBy(x => new { x.TableNumber, x.IsParaLlevar })
                            .Select(tg =>
                            {
                                var label = tg.Key.IsParaLlevar
                                    ? (tg.Key.TableNumber == 0 ? "VD" : $"M{tg.Key.TableNumber:D2}🛍")
                                    : $"M{tg.Key.TableNumber:D2}";
                                return tg.Count() > 1 ? $"{label}×{tg.Count()}" : label;
                            })
                            .ToList()
                    })
                    .OrderByDescending(e => e.PendingQuantity)
                    .ToList();

                return Ok(new CantadorAggregatedViewDto
                {
                    Entradas = entradas,
                    Segundos = segundos
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error en GetAggregatedView: {ex.Message}");
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // Helper: parsea el string Entradas. Soporta "humita,ensalada rusa" o "humita;ensalada rusa"
        // o también JSON tipo ["humita","ensalada rusa"]. Si llega "humita x2" reconoce el "x2".
        // Helper: parsea el string Entradas. Soporta múltiples formatos:
        //   - "humita,ensalada rusa"          → 1 humita + 1 ensalada rusa
        //   - "1x humita,2x ensalada rusa"    → 1 humita + 2 ensaladas rusas (formato del frontend actual)
        //   - "humita x2"                     → 2 humitas (compatibilidad)
        //   - ["humita","ensalada rusa"]      → JSON
        //   - "humita;ensalada rusa"          → con punto y coma
        private static List<string> ParseEntradas(string entradasRaw)
        {
            var result = new List<string>();
            var trimmed = entradasRaw.Trim();
            if (string.IsNullOrEmpty(trimmed)) return result;

            List<string> rawItems;

            // Intento JSON primero
            if (trimmed.StartsWith("["))
            {
                try
                {
                    rawItems = Newtonsoft.Json.JsonConvert.DeserializeObject<List<string>>(trimmed)
                               ?? new List<string>();
                }
                catch
                {
                    rawItems = trimmed.Split(new[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                }
            }
            else
            {
                rawItems = trimmed.Split(new[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            }

            foreach (var raw in rawItems)
            {
                var item = raw.Trim();
                if (string.IsNullOrEmpty(item)) continue;

                int multiplier = 1;

                // ✅ Formato "2x ensalada rusa" o "2 x ensalada rusa" (multiplicador AL INICIO)
                var prefixMatch = System.Text.RegularExpressions.Regex.Match(item, @"^\s*(\d+)\s*x\s+(.+)$",
                    System.Text.RegularExpressions.RegexOptions.IgnoreCase);

                if (prefixMatch.Success)
                {
                    multiplier = int.Parse(prefixMatch.Groups[1].Value);
                    item = prefixMatch.Groups[2].Value.Trim();
                }
                else
                {
                    // ✅ Formato "ensalada rusa x2" (multiplicador AL FINAL) — compatibilidad
                    var suffixMatch = System.Text.RegularExpressions.Regex.Match(item, @"\s*x\s*(\d+)\s*$",
                        System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                    if (suffixMatch.Success)
                    {
                        multiplier = int.Parse(suffixMatch.Groups[1].Value);
                        item = item.Substring(0, suffixMatch.Index).Trim();
                    }
                }

                if (string.IsNullOrEmpty(item)) continue;

                for (int i = 0; i < multiplier; i++)
                    result.Add(item);
            }

            return result;
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET: api/cantador/orders
        // Devuelve las órdenes del día activas, para el tab "POR MESA".
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("orders")]
        public async Task<ActionResult<IEnumerable<Order>>> GetActiveOrders()
        {
            var today = DateTime.UtcNow.Date;
            var orders = await _context.Orders
                .Where(o => o.CreatedAt.Date == today &&
                            (o.Status == "Pendiente" || o.Status == "Enviado a cocina"))
                .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
                .OrderBy(o => o.CreatedAt)
                .ToListAsync();
            return Ok(orders);
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET: api/cantador/history
        // Historial del día — órdenes ya servidas/cobradas/canceladas.
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("history")]
        public async Task<ActionResult<IEnumerable<Order>>> GetTodayHistory()
        {
            var today = DateTime.UtcNow.Date;
            var orders = await _context.Orders
                .Where(o => o.CreatedAt.Date == today &&
                            (o.Status == "Listo" || o.Status == "Cobrado" || o.Status == "Cancelado"))
                .Include(o => o.Items!)
                    .ThenInclude(oi => oi.Product)
                .OrderByDescending(o => o.UpdatedAt)
                .ToListAsync();
            return Ok(orders);
        }

        // ═══════════════════════════════════════════════════════════════════
        // POST: api/cantador/serve-item
        // Descuenta 1 unidad del producto indicado. FIFO: descuenta de la
        // primera orden activa que tenga ese producto pendiente.
        // Si la orden queda totalmente servida → pasa a "Listo".
        // ═══════════════════════════════════════════════════════════════════
        [HttpPost("serve-item")]
        public async Task<ActionResult<ServeItemResponse>> ServeItem([FromBody] ServeItemRequest request)
        {
            try
            {
                var today = DateTime.UtcNow.Date;

                // Buscar la primera orden activa con ese producto pendiente (FIFO)
                var candidateOrders = await _context.Orders
                    .Where(o => o.CreatedAt.Date == today &&
                                (o.Status == "Pendiente" || o.Status == "Enviado a cocina"))
                    .Include(o => o.Items!)
                        .ThenInclude(oi => oi.Product)
                    .OrderBy(o => o.CreatedAt)
                    .ToListAsync();

                Order? targetOrder = null;
                OrderItem? targetItem = null;

                foreach (var order in candidateOrders)
                {
                    var item = order.Items?.FirstOrDefault(i =>
                        i.ProductId == request.ProductId && i.Quantity > i.ServedQuantity);
                    if (item != null)
                    {
                        targetOrder = order;
                        targetItem = item;
                        break;
                    }
                }

                if (targetOrder == null || targetItem == null)
                    return NotFound("No hay platos pendientes de ese producto");

                // Descontar 1
                targetItem.ServedQuantity += 1;
                targetOrder.UpdatedAt = DateTime.UtcNow;
                _context.Update(targetItem);

                // ✅ Después
                bool allSegundosServed = (targetOrder.Items ?? new List<OrderItem>())
                    .All(i => i.ServedQuantity >= i.Quantity);

                bool allEntradasServed = AreEntradasCompleted(targetOrder);

                bool allServed = allSegundosServed && allEntradasServed;

                if (allServed)
                {
                    targetOrder.Status = "Listo";
                }

                _context.Update(targetOrder);
                await _context.SaveChangesAsync();

                // Recargar con todo
                var orderWithItems = await _context.Orders
                    .Include(o => o.Items!)
                        .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == targetOrder.Id);

                // Notificar a todos los grupos
                await _hubContext.Clients.Group("Cantadores")
                    .SendAsync("ItemServed", new
                    {
                        orderId = targetOrder.Id,
                        orderItemId = targetItem.Id,
                        productId = targetItem.ProductId,
                        tableNumber = targetOrder.TableNumber,
                        remainingQuantity = targetItem.Quantity - targetItem.ServedQuantity,
                        orderCompleted = allServed
                    });

                await _hubContext.Clients.Group("Cocina")
                    .SendAsync("ActualizacionPedido", orderWithItems);

                if (allServed)
                {
                    // La mesa ya tiene su pedido listo — avisamos al mozo
                    await _hubContext.Clients.Group("Mozos")
                        .SendAsync("MesaCambio", new
                        {
                            tableNumber = targetOrder.TableNumber,
                            isOccupied = false
                        });
                    await _hubContext.Clients.Group($"Mesa_{targetOrder.TableNumber}")
                        .SendAsync("PedidoListo", orderWithItems);
                }

                return Ok(new ServeItemResponse
                {
                    OrderId = targetOrder.Id,
                    OrderItemId = targetItem.Id,
                    RemainingQuantity = targetItem.Quantity - targetItem.ServedQuantity,
                    OrderCompleted = allServed,
                    TableNumber = targetOrder.TableNumber
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error en ServeItem: {ex.Message}");
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // ═══════════════════════════════════════════════════════════════════
        // POST: api/cantador/serve-item-by-id
        // Variante: descuenta 1 de un OrderItem específico (cuando el cantador
        // está en el tab "POR MESA" y toca el [-] de un plato concreto).
        // ═══════════════════════════════════════════════════════════════════
        [HttpPost("serve-item-by-id/{orderItemId}")]
        public async Task<ActionResult<ServeItemResponse>> ServeItemById(int orderItemId)
        {
            try
            {
                var item = await _context.OrderItems
                    .Include(i => i.Order)
                    .Include(i => i.Product)
                    .FirstOrDefaultAsync(i => i.Id == orderItemId);

                if (item == null)
                    return NotFound("Item no encontrado");

                if (item.ServedQuantity >= item.Quantity)
                    return BadRequest("Este item ya está completamente servido");

                if (item.Order == null)
                    return BadRequest("El item no tiene orden asociada");

                if (item.Order.Status != "Pendiente" && item.Order.Status != "Enviado a cocina")
                    return BadRequest($"La orden ya está en estado '{item.Order.Status}'");

                item.ServedQuantity += 1;
                item.Order.UpdatedAt = DateTime.UtcNow;
                _context.Update(item);

                // Recargar todos los items de la orden para verificar si está completa
                var allItems = await _context.OrderItems
                    .Where(i => i.OrderId == item.OrderId)
                    .ToListAsync();

                // ✅ Después — también revisa entradas
                bool allSegundosServed = allItems.All(i =>
                    i.Id == item.Id
                        ? (item.ServedQuantity >= item.Quantity)
                        : (i.ServedQuantity >= i.Quantity));

                bool allEntradasServed = AreEntradasCompleted(item.Order);

                bool allServed = allSegundosServed && allEntradasServed;

                if (allServed)
                    item.Order.Status = "Listo";

                _context.Update(item.Order);
                await _context.SaveChangesAsync();

                var orderWithItems = await _context.Orders
                    .Include(o => o.Items!)
                        .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == item.OrderId);

                await _hubContext.Clients.Group("Cantadores")
                    .SendAsync("ItemServed", new
                    {
                        orderId = item.OrderId,
                        orderItemId = item.Id,
                        productId = item.ProductId,
                        tableNumber = item.Order.TableNumber,
                        remainingQuantity = item.Quantity - item.ServedQuantity,
                        orderCompleted = allServed
                    });

                await _hubContext.Clients.Group("Cocina")
                    .SendAsync("ActualizacionPedido", orderWithItems);

                if (allServed)
                {
                    await _hubContext.Clients.Group("Mozos")
                        .SendAsync("MesaCambio", new
                        {
                            tableNumber = item.Order.TableNumber,
                            isOccupied = false
                        });
                    await _hubContext.Clients.Group($"Mesa_{item.Order.TableNumber}")
                        .SendAsync("PedidoListo", orderWithItems);
                }

                return Ok(new ServeItemResponse
                {
                    OrderId = item.OrderId,
                    OrderItemId = item.Id,
                    RemainingQuantity = item.Quantity - item.ServedQuantity,
                    OrderCompleted = allServed,
                    TableNumber = item.Order.TableNumber
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error en ServeItemById: {ex.Message}");
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // ═══════════════════════════════════════════════════════════════════
        // POST: api/cantador/{orderId}/cantado
        // Marca que el cantador ya cantó esta orden al chef.
        // ═══════════════════════════════════════════════════════════════════
        [HttpPost("{orderId}/cantado")]
        public async Task<IActionResult> MarkAsSung(int orderId)
        {
            try
            {
                var order = await _context.Orders.FindAsync(orderId);
                if (order == null) return NotFound("Orden no encontrada");

                order.WasSung = true;
                order.UpdatedAt = DateTime.UtcNow;
                _context.Update(order);
                await _context.SaveChangesAsync();

                await _hubContext.Clients.Group("Cantadores")
                    .SendAsync("OrderSung", new { orderId = order.Id });

                return Ok(new { orderId = order.Id, wasSung = true });
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        // ═══════════════════════════════════════════════════════════════════
        // POST: api/cantador/{orderId}/servir-entrada
        // Marca o desmarca una entrada como servida.
        // Body: { "entradaName": "ensalada rusa", "servida": true }
        // ═══════════════════════════════════════════════════════════════════
        [HttpPost("{orderId}/servir-entrada")]
        public async Task<IActionResult> ServirEntrada(int orderId, [FromBody] ServirEntradaRequest request)
        {
            try
            {
                var order = await _context.Orders
                    .Include(o => o.Items!)
                        .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == orderId);

                if (order == null) return NotFound("Orden no encontrada");

                // Parsear las entradas servidas actuales
                var servidasActuales = new List<string>();
                if (!string.IsNullOrWhiteSpace(order.EntradasServidas))
                {
                    try
                    {
                        servidasActuales = Newtonsoft.Json.JsonConvert
                            .DeserializeObject<List<string>>(order.EntradasServidas)
                            ?? new List<string>();
                    }
                    catch { }
                }

                var entradaNorm = request.EntradaName.ToLower().Trim();

                if (request.Servida)
                {
                    // ✅ Contar cuántas hay en total vs cuántas ya están servidas
                    var totalDeEstaEntrada = ParseEntradas(order.Entradas ?? "")
                        .Count(e => e.ToLower().Trim() == entradaNorm);

                    var yaServidasDeEsta = servidasActuales
                        .Count(e => e.ToLower().Trim() == entradaNorm);

                    // Solo agregar UNA si aún hay pendientes
                    if (yaServidasDeEsta < totalDeEstaEntrada)
                        servidasActuales.Add(request.EntradaName.Trim());
                }
                else
                {
                    // ✅ Quitar solo UNA ocurrencia (no todas)
                    var idx = servidasActuales.FindIndex(e => e.ToLower().Trim() == entradaNorm);
                    if (idx >= 0) servidasActuales.RemoveAt(idx);
                }

                order.EntradasServidas = Newtonsoft.Json.JsonConvert.SerializeObject(servidasActuales);
                order.UpdatedAt = DateTime.UtcNow;
                _context.Update(order);
                await _context.SaveChangesAsync();

                // Recargar con items para el evento SignalR
                var orderWithItems = await _context.Orders
                    .Include(o => o.Items!)
                        .ThenInclude(oi => oi.Product)
                    .FirstOrDefaultAsync(o => o.Id == orderId);

                // ✅ Verificar si la orden quedó completamente servida
                var allItems = await _context.OrderItems
                    .Where(i => i.OrderId == order.Id)
                    .ToListAsync();

                bool allSegundosServed = allItems.All(i => i.ServedQuantity >= i.Quantity);
                bool allEntradasServed = AreEntradasCompleted(order);
                bool allServed = allSegundosServed && allEntradasServed;

                Console.WriteLine($"🔍 ServirEntrada - orderId:{order.Id} - allSegundosServed:{allSegundosServed} - allEntradasServed:{allEntradasServed} - allServed:{allServed} - status:{order.Status}");

                if (allServed && order.Status != "Listo")
                {
                    order.Status = "Listo";
                    order.UpdatedAt = DateTime.UtcNow;
                    _context.Update(order);
                    await _context.SaveChangesAsync();

                    await _hubContext.Clients.Group("Mozos")
                        .SendAsync("MesaCambio", new
                        {
                            tableNumber = order.TableNumber,
                            isOccupied = false
                        });
                    await _hubContext.Clients.Group($"Mesa_{order.TableNumber}")
                        .SendAsync("PedidoListo", orderWithItems);
                }

                // Notificar a la web del admin en tiempo real
                await _hubContext.Clients.Group("Cocina")
                    .SendAsync("EntradaServida", new
                    {
                        orderId = order.Id,
                        tableNumber = order.TableNumber,
                        entradaName = request.EntradaName,
                        servida = request.Servida,
                        entradasServidas = servidasActuales,
                        orderCompleted = allServed
                    });

                // Notificar a cantadores para que refresquen
                await _hubContext.Clients.Group("Cantadores")
                    .SendAsync("ItemServed", new
                    {
                        orderId = order.Id,
                        tableNumber = order.TableNumber,
                        orderCompleted = allServed
                    });

                return Ok(new
                {
                    orderId = order.Id,
                    entradasServidas = servidasActuales,
                    orderCompleted = allServed
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error en ServirEntrada: {ex.Message}");
                return BadRequest($"Error: {ex.Message}");
            }
        }

        private static bool AreEntradasCompleted(Order order)
        {
            // Si no tiene entradas, no hay nada que verificar
            if (string.IsNullOrWhiteSpace(order.Entradas)) return true;

            var totalEntradas = ParseEntradas(order.Entradas);
            if (totalEntradas.Count == 0) return true;

            // Parsear las entradas ya servidas
            var servidasActuales = new List<string>();
            if (!string.IsNullOrWhiteSpace(order.EntradasServidas))
            {
                try
                {
                    servidasActuales = Newtonsoft.Json.JsonConvert
                        .DeserializeObject<List<string>>(order.EntradasServidas)
                        ?? new List<string>();
                }
                catch (Exception ex)
                {
                }
                catch { }
            }

            // Verificar que cada entrada tenga su correspondiente servida
            var servidasCopy = new List<string>(servidasActuales);
            foreach (var entrada in totalEntradas)
            {
                var idx = servidasCopy.FindIndex(e =>
                    e.ToLower().Trim() == entrada.ToLower().Trim());
                if (idx < 0) return false; // Esta entrada aún no fue servida
                servidasCopy.RemoveAt(idx);
            }

            return true;
        }
    }
}