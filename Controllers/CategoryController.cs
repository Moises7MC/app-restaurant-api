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
    public class CategoryController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hub;

        public CategoryController(AppDbContext context, IHubContext<OrderHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        // GET: api/category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetCategories()
        {
            var categories = await _context.Categories
                .OrderBy(c => c.SortOrder)
                .ThenBy(c => c.Name)
                .Select(c => new
                {
                    c.Id,
                    c.Name,
                    c.Description,
                    c.SortOrder,
                    c.CreatedAt,
                    ProductCount = c.Products != null ? c.Products.Count(p => p.IsActive) : 0
                })
                .ToListAsync();

            return Ok(categories);
        }

        // GET: api/category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories
                .Include(c => c.Products)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (category == null) return NotFound();
            return Ok(category);
        }

        // POST: api/category
        [HttpPost]
        public async Task<ActionResult<Category>> CreateCategory(CategoryRequest request)
        {
            var exists = await _context.Categories
                .AnyAsync(c => c.Name.ToLower() == request.Name.ToLower());

            if (exists) return BadRequest("Ya existe una categoría con ese nombre");

            var category = new Category
            {
                Name = request.Name.Trim(),
                Description = request.Description?.Trim() ?? string.Empty,
                SortOrder = request.SortOrder,
                CreatedAt = DateTime.UtcNow
            };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Nueva categoría: {category.Name}"
            });

            return CreatedAtAction(nameof(GetCategory), new { id = category.Id }, category);
        }

        // PUT: api/category/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, CategoryRequest request)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null) return NotFound();

            var exists = await _context.Categories
                .AnyAsync(c => c.Name.ToLower() == request.Name.ToLower() && c.Id != id);
            if (exists) return BadRequest("Ya existe una categoría con ese nombre");

            category.Name = request.Name.Trim();
            category.Description = request.Description?.Trim() ?? string.Empty;
            category.SortOrder = request.SortOrder;

            _context.Update(category);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Categoría actualizada: {category.Name}"
            });

            return NoContent();
        }

        // DELETE: api/category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var category = await _context.Categories
                .Include(c => c.Products)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (category == null) return NotFound();

            if (category.Products != null && category.Products.Any())
                return BadRequest($"No puedes eliminar esta categoría porque tiene {category.Products.Count} plato(s) asociado(s).");

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Categoría eliminada: {category.Name}"
            });

            return NoContent();
        }
    }

    public class CategoryRequest
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int SortOrder { get; set; } = 0;
    }
}