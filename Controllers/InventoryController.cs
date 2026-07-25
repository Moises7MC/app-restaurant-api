using AppRestaurantAPI.Data;
using AppRestaurantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    /// <summary>
    /// Inventario de insumos del restaurante — control manual de stock,
    /// editable por el dueño desde la web (sección "Inventario").
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : ControllerBase
    {
        private readonly AppDbContext _context;

        public InventoryController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/inventory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventoryItem>>> GetItems()
        {
            var items = await _context.InventoryItems
                .OrderBy(i => i.Category)
                .ThenBy(i => i.Name)
                .ToListAsync();

            return Ok(items);
        }

        // GET: api/inventory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InventoryItem>> GetItem(int id)
        {
            var item = await _context.InventoryItems.FindAsync(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        // POST: api/inventory
        [HttpPost]
        public async Task<ActionResult<InventoryItem>> CreateItem(InventoryItemRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                return BadRequest("El nombre es requerido");

            var item = new InventoryItem
            {
                Name = request.Name.Trim(),
                Category = string.IsNullOrWhiteSpace(request.Category) ? "Otros" : request.Category.Trim(),
                Unit = string.IsNullOrWhiteSpace(request.Unit) ? "unidad" : request.Unit.Trim(),
                CurrentStock = request.CurrentStock,
                MinStock = request.MinStock,
                UnitCost = request.UnitCost,
                Notes = request.Notes,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.InventoryItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
        }

        // PUT: api/inventory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, InventoryItemRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                return BadRequest("El nombre es requerido");

            var item = await _context.InventoryItems.FindAsync(id);
            if (item == null) return NotFound();

            item.Name = request.Name.Trim();
            item.Category = string.IsNullOrWhiteSpace(request.Category) ? "Otros" : request.Category.Trim();
            item.Unit = string.IsNullOrWhiteSpace(request.Unit) ? "unidad" : request.Unit.Trim();
            item.CurrentStock = request.CurrentStock;
            item.MinStock = request.MinStock;
            item.UnitCost = request.UnitCost;
            item.Notes = request.Notes;
            item.UpdatedAt = DateTime.UtcNow;

            _context.Update(item);
            await _context.SaveChangesAsync();

            return Ok(item);
        }

        // PUT: api/inventory/5/adjust-stock — para los botones +/- rápidos de la lista
        [HttpPut("{id}/adjust-stock")]
        public async Task<ActionResult<InventoryItem>> AdjustStock(int id, AdjustStockRequest request)
        {
            var item = await _context.InventoryItems.FindAsync(id);
            if (item == null) return NotFound();

            var newStock = item.CurrentStock + request.Delta;
            if (newStock < 0) newStock = 0;

            item.CurrentStock = newStock;
            item.UpdatedAt = DateTime.UtcNow;

            _context.Update(item);
            await _context.SaveChangesAsync();

            return Ok(item);
        }

        // DELETE: api/inventory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.InventoryItems.FindAsync(id);
            if (item == null) return NotFound();

            _context.InventoryItems.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }

    public class InventoryItemRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = "Otros";
        public string Unit { get; set; } = "unidad";
        public decimal CurrentStock { get; set; }
        public decimal MinStock { get; set; }
        public decimal? UnitCost { get; set; }
        public string? Notes { get; set; }
    }

    public class AdjustStockRequest
    {
        public decimal Delta { get; set; }
    }
}
