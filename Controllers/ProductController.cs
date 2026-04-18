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
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hub;

        public ProductController(AppDbContext context, IHubContext<OrderHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        // GET: api/product
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetProducts()
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsActive)
                .OrderBy(p => p.Category!.SortOrder)
                .ThenBy(p => p.Name)
                .Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Description,
                    p.Price,
                    p.ImageUrl,
                    p.IsActive,
                    p.CreatedAt,
                    p.CategoryId,
                    CategoryName = p.Category != null ? p.Category.Name : ""
                })
                .ToListAsync();

            return Ok(products);
        }

        // GET: api/product/by-category
        [HttpGet("by-category")]
        public async Task<ActionResult<IEnumerable<object>>> GetProductsByCategory()
        {
            var categories = await _context.Categories
                .Include(c => c.Products)
                .OrderBy(c => c.SortOrder)
                .ThenBy(c => c.Name)
                .Select(c => new
                {
                    c.Id,
                    c.Name,
                    c.Description,
                    c.SortOrder,
                    Products = c.Products!
                        .Where(p => p.IsActive)
                        .OrderBy(p => p.Name)
                        .Select(p => new
                        {
                            p.Id,
                            p.Name,
                            p.Description,
                            p.Price,
                            p.ImageUrl,
                            p.CategoryId,
                            CategoryName = c.Name
                        })
                        .ToList()
                })
                .Where(c => c.Products.Any())
                .ToListAsync();

            return Ok(categories);
        }

        // GET: api/product/5
        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetProduct(int id)
        {
            var product = await _context.Products
                .Include(p => p.Category)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (product == null) return NotFound();

            return Ok(new
            {
                product.Id,
                product.Name,
                product.Description,
                product.Price,
                product.ImageUrl,
                product.IsActive,
                product.CategoryId,
                CategoryName = product.Category?.Name ?? ""
            });
        }

        // POST: api/product
        [HttpPost]
        public async Task<ActionResult> CreateProduct(ProductRequest request)
        {
            var categoryExists = await _context.Categories.AnyAsync(c => c.Id == request.CategoryId);
            if (!categoryExists) return BadRequest("La categoría seleccionada no existe");

            var product = new Product
            {
                Name = request.Name.Trim(),
                Description = request.Description?.Trim() ?? string.Empty,
                Price = request.Price,
                CategoryId = request.CategoryId,
                ImageUrl = request.ImageUrl?.Trim() ?? string.Empty,
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Nuevo plato: {product.Name}"
            });

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, new
            {
                product.Id,
                product.Name,
                product.Description,
                product.Price,
                product.ImageUrl,
                product.CategoryId
            });
        }

        // PUT: api/product/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, ProductRequest request)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();

            var categoryExists = await _context.Categories.AnyAsync(c => c.Id == request.CategoryId);
            if (!categoryExists) return BadRequest("La categoría seleccionada no existe");

            product.Name = request.Name.Trim();
            product.Description = request.Description?.Trim() ?? string.Empty;
            product.Price = request.Price;
            product.CategoryId = request.CategoryId;
            product.ImageUrl = request.ImageUrl?.Trim() ?? string.Empty;
            product.IsActive = request.IsActive;

            _context.Update(product);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Plato actualizado: {product.Name}"
            });

            return NoContent();
        }

        // DELETE: api/product/5 (soft delete)
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();

            product.IsActive = false;
            _context.Update(product);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Plato desactivado: {product.Name}"
            });

            return NoContent();
        }

        // PUT: api/product/5/toggle-active
        [HttpPut("{id}/toggle-active")]
        public async Task<IActionResult> ToggleActive(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();

            product.IsActive = !product.IsActive;
            _context.Update(product);
            await _context.SaveChangesAsync();

            // ✅ Notificar a mozos
            await _hub.Clients.Group("Mozos").SendAsync("MenuActualizado", new
            {
                reason = $"Plato {(product.IsActive ? "activado" : "desactivado")}: {product.Name}"
            });

            return Ok(new { isActive = product.IsActive });
        }
    }

    public class ProductRequest
    {
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; } = true;
    }
}