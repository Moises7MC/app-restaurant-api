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
    public class TransactionController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hub;

        public TransactionController(AppDbContext context, IHubContext<OrderHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        // GET: api/transaction
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactions()
        {
            return await _context.Transactions
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
        }

        // GET: api/transaction/today
        // Transacciones del día actual (no cerradas)
        [HttpGet("today")]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetToday()
        {
            var todayUtc = DateTime.UtcNow.Date;
            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt.Date == todayUtc && !t.IsClosed)
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
            return Ok(transactions);
        }

        // GET: api/transaction/summary/today
        // Resumen del día actual
        [HttpGet("summary/today")]
        public async Task<ActionResult<object>> GetTodaySummary()
        {
            var todayUtc = DateTime.UtcNow.Date;
            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt.Date == todayUtc && !t.IsClosed)
                .ToListAsync();

            var ingresos = transactions.Where(t => t.Type == "ingreso").Sum(t => t.Amount);
            var gastos = transactions.Where(t => t.Type == "gasto").Sum(t => t.Amount);

            // Desglose por método de pago
            var porMetodo = transactions
                .Where(t => t.Type == "ingreso")
                .GroupBy(t => t.PaymentMethod ?? "Sin especificar")
                .Select(g => new { metodo = g.Key, total = g.Sum(t => t.Amount), count = g.Count() })
                .ToList();

            return Ok(new
            {
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransacciones = transactions.Count,
                porMetodoPago = porMetodo
            });
        }

        // GET: api/transaction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaction>> GetTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null) return NotFound();
            return transaction;
        }

        // POST: api/transaction
        [HttpPost]
        public async Task<ActionResult<Transaction>> CreateTransaction(Transaction transaction)
        {
            transaction.CreatedAt = DateTime.UtcNow;
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            // Notificar a la web en tiempo real
            await _hub.Clients.All.SendAsync("CajaActualizada");

            return CreatedAtAction(nameof(GetTransaction), new { id = transaction.Id }, transaction);
        }

        // POST: api/transaction/cobrar
        // Cobrar una orden completa — registra ingreso y marca la orden como cobrada
        [HttpPost("cobrar")]
        public async Task<ActionResult> CobrarOrden(CobrarRequest request)
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == request.OrderId);

            if (order == null) return NotFound("Orden no encontrada");
            if (order.Status == "Cobrado") return BadRequest("Esta orden ya fue cobrada");

            // Registrar ingreso
            var transaction = new Transaction
            {
                Type = "ingreso",
                Amount = order.Total,
                Description = $"Mesa {order.TableNumber} — {order.MealType}",
                TableNumber = order.TableNumber,
                OrderId = order.Id,
                PaymentMethod = request.PaymentMethod,
                CreatedAt = DateTime.UtcNow
            };

            _context.Transactions.Add(transaction);

            // Marcar orden como cobrada
            // Marcar orden como cobrada
            //order.Status = order.TableNumber == 0 ? "Enviado a cocina" : "Cobrado";
            order.Status = (order.TableNumber == 0 || order.IsParaLlevar) ? "Enviado a cocina" : "Cobrado";
            order.UpdatedAt = DateTime.UtcNow;
            _context.Update(order);

            await _context.SaveChangesAsync();

            // Notificar en tiempo real
            await _hub.Clients.All.SendAsync("CajaActualizada");
            await _hub.Clients.Group("Mozos").SendAsync("MesaCambio", new
            {
                tableNumber = order.TableNumber,
                isOccupied = false
            });

            return Ok(new { message = "Cobro registrado correctamente", transactionId = transaction.Id });
        }

        // POST: api/transaction/gasto
        // Registrar un gasto manual
        [HttpPost("gasto")]
        public async Task<ActionResult> RegistrarGasto(GastoRequest request)
        {
            var transaction = new Transaction
            {
                Type = "gasto",
                Amount = request.Amount,
                Description = request.Description,
                PaymentMethod = null,
                CreatedAt = DateTime.UtcNow
            };

            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("CajaActualizada");

            return Ok(transaction);
        }

        // POST: api/transaction/cierre
        // Cierre de caja del día
        [HttpPost("cierre")]
        public async Task<ActionResult> CierreCaja()
        {
            var todayUtc = DateTime.UtcNow.Date;
            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt.Date == todayUtc && !t.IsClosed)
                .ToListAsync();

            if (!transactions.Any()) return BadRequest("No hay transacciones para cerrar");

            var ingresos = transactions.Where(t => t.Type == "ingreso").Sum(t => t.Amount);
            var gastos = transactions.Where(t => t.Type == "gasto").Sum(t => t.Amount);

            // Marcar todas como cerradas
            foreach (var t in transactions)
                t.IsClosed = true;

            await _context.SaveChangesAsync();
            await _hub.Clients.All.SendAsync("CajaActualizada");

            return Ok(new
            {
                message = "Caja cerrada correctamente",
                fecha = DateTime.UtcNow.ToString("dd/MM/yyyy"),
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransacciones = transactions.Count
            });
        }

        // GET: api/transaction/ordenes-listas
        // Órdenes listas para cobrar
        [HttpGet("ordenes-listas")]
        public async Task<ActionResult<IEnumerable<object>>> GetOrdenesListas()
        {
            var todayUtc = DateTime.UtcNow.Date;
            var ordenes = await _context.Orders
                .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                .Where(o => o.CreatedAt.Date == todayUtc && o.Status == "Listo")
                .OrderBy(o => o.TableNumber)
                .Select(o => new
                {
                    o.Id,
                    o.TableNumber,
                    o.MealType,
                    o.Total,
                    o.Status,
                    o.WaiterName,
                    o.CreatedAt,
                    o.Comanda,
                    Items = o.Items!.Select(i => new
                    {
                        i.Id,
                        i.ProductId,
                        i.Quantity,
                        i.UnitPrice,
                        ProductName = i.Product != null ? i.Product.Name : "Producto"
                    }).ToList()
                })
                .ToListAsync();

            return Ok(ordenes);
        }

        // GET: api/transaction/summary (mantener compatibilidad)
        [HttpGet("summary")]
        public async Task<ActionResult<object>> GetSummary()
        {
            var ingresos = await _context.Transactions
                .Where(t => t.Type == "ingreso")
                .SumAsync(t => t.Amount);
            var gastos = await _context.Transactions
                .Where(t => t.Type == "gasto")
                .SumAsync(t => t.Amount);

            return Ok(new
            {
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransactions = await _context.Transactions.CountAsync()
            });
        }

        // DELETE: api/transaction/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null) return NotFound();
            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    public class CobrarRequest
    {
        public int OrderId { get; set; }
        public string PaymentMethod { get; set; } = "Efectivo";
    }

    public class GastoRequest
    {
        public decimal Amount { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}