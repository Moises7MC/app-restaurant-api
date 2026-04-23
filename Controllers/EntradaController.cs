using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EntradaController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hubContext;

        public EntradaController(AppDbContext context, IHubContext<OrderHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        // GET api/entrada/today — entradas activas de hoy
        [HttpGet("today")]
        public async Task<IActionResult> GetToday()
        {
            var today = DateTime.UtcNow.Date;
            var entradas = await _context.DailyEntradas
                .Where(e => e.Date == today && e.IsActive)
                .OrderBy(e => e.CreatedAt)
                .ToListAsync();
            return Ok(entradas);
        }

        // GET api/entrada — todas las entradas (para el admin)
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var today = DateTime.UtcNow.Date;
            var entradas = await _context.DailyEntradas
                .Where(e => e.Date == today)
                .OrderBy(e => e.CreatedAt)
                .ToListAsync();
            return Ok(entradas);
        }

        // POST api/entrada — crear entrada del día
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateEntradaRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                return BadRequest("El nombre es requerido");

            var entrada = new DailyEntrada
            {
                Name = request.Name.Trim(),
                Date = DateTime.UtcNow.Date,
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _context.DailyEntradas.Add(entrada);
            await _context.SaveChangesAsync();

            // Notificar a mozos que el menú de entradas cambió
            await _hubContext.Clients.Group("Mozos")
                .SendAsync("EntradasActualizadas", new { action = "added", entrada });

            return Ok(entrada);
        }

        // DELETE api/entrada/{id} — desactivar entrada
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entrada = await _context.DailyEntradas.FindAsync(id);
            if (entrada == null)
                return NotFound();

            entrada.IsActive = false;
            _context.Update(entrada);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.Group("Mozos")
                .SendAsync("EntradasActualizadas", new { action = "removed", id });

            return Ok();
        }

        // PUT api/entrada/{id} — editar nombre
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] CreateEntradaRequest request)
        {
            var entrada = await _context.DailyEntradas.FindAsync(id);
            if (entrada == null)
                return NotFound();

            entrada.Name = request.Name.Trim();
            _context.Update(entrada);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.Group("Mozos")
                .SendAsync("EntradasActualizadas", new { action = "updated", entrada });

            return Ok(entrada);
        }
    }

    public class CreateEntradaRequest
    {
        public string Name { get; set; } = string.Empty;
    }
}