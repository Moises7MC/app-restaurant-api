using AppRestaurantAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    /// <summary>
    /// Endpoints de reportes para el dueño del restaurante.
    /// Solo cuenta órdenes con status "Cobrado".
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ReportsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReportsController(AppDbContext context)
        {
            _context = context;
        }

        // ═══════════════════════════════════════════════════════════════════
        // Helper: parsear fechas y construir filtro base
        // ═══════════════════════════════════════════════════════════════════
        private (DateTime fromUtc, DateTime toUtc) ParseDateRange(
            string? fromStr, string? toStr)
        {
            // Por defecto: hoy en hora de Lima
            var limaTz = TimeZoneInfo.FindSystemTimeZoneById(
                OperatingSystem.IsWindows() ? "SA Pacific Standard Time" : "America/Lima");
            var nowLima = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, limaTz);

            DateTime fromLima, toLima;

            if (!string.IsNullOrEmpty(fromStr) && DateTime.TryParse(fromStr, out var f))
                fromLima = f.Date;
            else
                fromLima = nowLima.Date;

            if (!string.IsNullOrEmpty(toStr) && DateTime.TryParse(toStr, out var t))
                toLima = t.Date.AddDays(1).AddTicks(-1); // hasta el final del día
            else
                toLima = fromLima.AddDays(1).AddTicks(-1);

            // Convertir a UTC para consultar la BD
            var fromUtc = TimeZoneInfo.ConvertTimeToUtc(fromLima, limaTz);
            var toUtc = TimeZoneInfo.ConvertTimeToUtc(toLima, limaTz);

            return (fromUtc, toUtc);
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET /api/reports/summary?from=2026-04-27&to=2026-04-27
        //   → 4 cards: total platos, ingresos, ticket promedio, plato estrella
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("summary")]
        public async Task<IActionResult> GetSummary(string? from, string? to)
        {
            var (fromUtc, toUtc) = ParseDateRange(from, to);

            var orders = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .Where(o => o.Status == "Cobrado" &&
                            o.CreatedAt >= fromUtc &&
                            o.CreatedAt <= toUtc)
                .ToListAsync();

            var totalOrders = orders.Count;
            var totalIngresos = orders.Sum(o => o.Total);
            var totalPlatos = orders.SelectMany(o => o.Items ?? new List<Models.OrderItem>())
                                    .Sum(i => i.Quantity);
            var promedio = totalOrders > 0 ? totalIngresos / totalOrders : 0;

            // Plato estrella
            var topPlato = orders
                .SelectMany(o => o.Items ?? new List<Models.OrderItem>())
                .GroupBy(i => new { i.ProductId, Name = i.Product != null ? i.Product.Name : "Producto" })
                .Select(g => new { name = g.Key.Name, qty = g.Sum(i => i.Quantity) })
                .OrderByDescending(x => x.qty)
                .FirstOrDefault();

            return Ok(new
            {
                totalOrders,
                totalIngresos,
                totalPlatos,
                ticketPromedio = Math.Round(promedio, 2),
                platoEstrella = topPlato?.name ?? "—",
                platoEstrellaCantidad = topPlato?.qty ?? 0,
                fromDate = fromUtc,
                toDate = toUtc
            });
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET /api/reports/by-category
        //   → ventas agrupadas por categoría
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("by-category")]
        public async Task<IActionResult> GetByCategory(string? from, string? to)
        {
            var (fromUtc, toUtc) = ParseDateRange(from, to);

            var orders = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .ThenInclude(p => p!.Category)
                .Where(o => o.Status == "Cobrado" &&
                            o.CreatedAt >= fromUtc &&
                            o.CreatedAt <= toUtc)
                .ToListAsync();

            var allItems = orders
                .SelectMany(o => o.Items ?? new List<Models.OrderItem>())
                .Where(i => i.Product != null)
                .ToList();

            var totalIngresos = allItems.Sum(i => i.Quantity * i.UnitPrice);

            var grouped = allItems
                .GroupBy(i => new
                {
                    CategoryId = i.Product!.CategoryId,
                    CategoryName = i.Product.Category != null
                        ? i.Product.Category.Name
                        : "Sin categoría"
                })
                .Select(g => new
                {
                    categoryId = g.Key.CategoryId,
                    categoryName = g.Key.CategoryName,
                    quantity = g.Sum(i => i.Quantity),
                    total = g.Sum(i => i.Quantity * i.UnitPrice),
                    percentage = totalIngresos > 0
                        ? Math.Round((double)(g.Sum(i => i.Quantity * i.UnitPrice) / totalIngresos) * 100, 1)
                        : 0
                })
                .OrderByDescending(x => x.total)
                .ToList();

            return Ok(grouped);
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET /api/reports/by-product
        //   → ranking de productos vendidos
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("by-product")]
        public async Task<IActionResult> GetByProduct(string? from, string? to)
        {
            var (fromUtc, toUtc) = ParseDateRange(from, to);

            var orders = await _context.Orders
                .Include(o => o.Items!)
                .ThenInclude(oi => oi.Product)
                .ThenInclude(p => p!.Category)
                .Where(o => o.Status == "Cobrado" &&
                            o.CreatedAt >= fromUtc &&
                            o.CreatedAt <= toUtc)
                .ToListAsync();

            var allItems = orders
                .SelectMany(o => o.Items ?? new List<Models.OrderItem>())
                .Where(i => i.Product != null)
                .ToList();

            var grouped = allItems
                .GroupBy(i => new
                {
                    i.ProductId,
                    ProductName = i.Product!.Name,
                    CategoryName = i.Product.Category != null
                        ? i.Product.Category.Name
                        : "Sin categoría",
                    UnitPrice = i.UnitPrice
                })
                .Select(g => new
                {
                    productId = g.Key.ProductId,
                    productName = g.Key.ProductName,
                    categoryName = g.Key.CategoryName,
                    unitPrice = g.Key.UnitPrice,
                    quantity = g.Sum(i => i.Quantity),
                    total = g.Sum(i => i.Quantity * i.UnitPrice)
                })
                .OrderByDescending(x => x.quantity)
                .ToList();

            return Ok(grouped);
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET /api/reports/by-waiter
        //   → ventas por mozo
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("by-waiter")]
        public async Task<IActionResult> GetByWaiter(string? from, string? to)
        {
            var (fromUtc, toUtc) = ParseDateRange(from, to);

            var orders = await _context.Orders
                .Include(o => o.Items)
                .Where(o => o.Status == "Cobrado" &&
                            o.CreatedAt >= fromUtc &&
                            o.CreatedAt <= toUtc)
                .ToListAsync();

            var grouped = orders
                .GroupBy(o => string.IsNullOrEmpty(o.WaiterName) ? "Sin asignar" : o.WaiterName)
                .Select(g => new
                {
                    waiterName = g.Key,
                    ordersCount = g.Count(),
                    totalPlatos = g.SelectMany(o => o.Items ?? new List<Models.OrderItem>())
                                   .Sum(i => i.Quantity),
                    total = g.Sum(o => o.Total)
                })
                .OrderByDescending(x => x.total)
                .ToList();

            return Ok(grouped);
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET /api/reports/by-hour
        //   → ventas por hora del día
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("by-hour")]
        public async Task<IActionResult> GetByHour(string? from, string? to)
        {
            var (fromUtc, toUtc) = ParseDateRange(from, to);

            var limaTz = TimeZoneInfo.FindSystemTimeZoneById(
                OperatingSystem.IsWindows() ? "SA Pacific Standard Time" : "America/Lima");

            var orders = await _context.Orders
                .Include(o => o.Items)
                .Where(o => o.Status == "Cobrado" &&
                            o.CreatedAt >= fromUtc &&
                            o.CreatedAt <= toUtc)
                .ToListAsync();

            var grouped = orders
                .Select(o => new
                {
                    hour = TimeZoneInfo.ConvertTimeFromUtc(o.CreatedAt, limaTz).Hour,
                    o.Total,
                    platos = (o.Items ?? new List<Models.OrderItem>()).Sum(i => i.Quantity)
                })
                .GroupBy(x => x.hour)
                .Select(g => new
                {
                    hour = g.Key,
                    label = $"{g.Key:00}:00",
                    ordersCount = g.Count(),
                    totalPlatos = g.Sum(x => x.platos),
                    total = g.Sum(x => x.Total)
                })
                .OrderBy(x => x.hour)
                .ToList();

            return Ok(grouped);
        }
    }
}