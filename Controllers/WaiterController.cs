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
    public class WaiterController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hubContext;

        public WaiterController(AppDbContext context, IHubContext<OrderHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        // GET: api/waiter
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WaiterDto>>> GetWaiters()
        {
            var waiters = await _context.Waiters
                .OrderByDescending(w => w.CreatedAt)
                .Select(w => new WaiterDto
                {
                    Id = w.Id,
                    Username = w.Username,
                    FirstName = w.FirstName,
                    LastName = w.LastName,
                    Gender = w.Gender,
                    IsActive = w.IsActive,
                    CreatedAt = w.CreatedAt
                })
                .ToListAsync();

            return Ok(waiters);
        }

        // GET: api/waiter/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WaiterDto>> GetWaiter(int id)
        {
            var w = await _context.Waiters.FindAsync(id);
            if (w == null) return NotFound();

            return Ok(new WaiterDto
            {
                Id = w.Id,
                Username = w.Username,
                FirstName = w.FirstName,
                LastName = w.LastName,
                Gender = w.Gender,
                IsActive = w.IsActive,
                CreatedAt = w.CreatedAt
            });
        }

        // POST: api/waiter
        [HttpPost]
        public async Task<ActionResult<WaiterDto>> CreateWaiter(CreateWaiterRequest request)
        {
            // Verificar que el username no esté en uso
            var exists = await _context.Waiters
                .AnyAsync(w => w.Username == request.Username);

            if (exists)
                return BadRequest("El nombre de usuario ya está en uso");

            var waiter = new Waiter
            {
                Username = request.Username.Trim(),
                Password = request.Password, // texto plano según requerimiento
                FirstName = request.FirstName.Trim(),
                LastName = request.LastName.Trim(),
                Gender = request.Gender,
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _context.Waiters.Add(waiter);
            await _context.SaveChangesAsync();

            // Notificar a todos los mozos conectados que hay un nuevo compañero
            await _hubContext.Clients.Group("Mozos")
                .SendAsync("WaiterActualizado", new { action = "created", waiterId = waiter.Id });

            return CreatedAtAction(nameof(GetWaiter), new { id = waiter.Id }, new WaiterDto
            {
                Id = waiter.Id,
                Username = waiter.Username,
                FirstName = waiter.FirstName,
                LastName = waiter.LastName,
                Gender = waiter.Gender,
                IsActive = waiter.IsActive,
                CreatedAt = waiter.CreatedAt
            });
        }

        // PUT: api/waiter/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWaiter(int id, UpdateWaiterRequest request)
        {
            var waiter = await _context.Waiters.FindAsync(id);
            if (waiter == null) return NotFound();

            // Verificar username único (excluyendo el mismo usuario)
            var exists = await _context.Waiters
                .AnyAsync(w => w.Username == request.Username && w.Id != id);
            if (exists)
                return BadRequest("El nombre de usuario ya está en uso");

            waiter.FirstName = request.FirstName.Trim();
            waiter.LastName = request.LastName.Trim();
            waiter.Username = request.Username.Trim();
            waiter.Gender = request.Gender;
            waiter.IsActive = request.IsActive;

            // Solo actualizar contraseña si se envió una nueva
            if (!string.IsNullOrWhiteSpace(request.Password))
                waiter.Password = request.Password;

            _context.Update(waiter);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.Group("Mozos")
                .SendAsync("WaiterActualizado", new { action = "updated", waiterId = waiter.Id });

            return NoContent();
        }

        // DELETE: api/waiter/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWaiter(int id)
        {
            var waiter = await _context.Waiters.FindAsync(id);
            if (waiter == null) return NotFound();

            _context.Waiters.Remove(waiter);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.Group("Mozos")
                .SendAsync("WaiterActualizado", new { action = "deleted", waiterId = id });

            return NoContent();
        }

        // PUT: api/waiter/5/toggle-active
        [HttpPut("{id}/toggle-active")]
        public async Task<IActionResult> ToggleActive(int id)
        {
            var waiter = await _context.Waiters.FindAsync(id);
            if (waiter == null) return NotFound();

            waiter.IsActive = !waiter.IsActive;
            _context.Update(waiter);
            await _context.SaveChangesAsync();

            return Ok(new { isActive = waiter.IsActive });
        }
    }

    // ════════════════════════════════════
    // AUTH CONTROLLER
    // ════════════════════════════════════
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) ||
                string.IsNullOrWhiteSpace(request.Password))
                return BadRequest("Usuario y contraseña son requeridos");

            var waiter = await _context.Waiters
                .FirstOrDefaultAsync(w =>
                    w.Username == request.Username &&
                    w.Password == request.Password &&
                    w.IsActive);

            if (waiter == null)
                return Unauthorized("Credenciales incorrectas o usuario inactivo");

            return Ok(new WaiterSessionDto
            {
                Id = waiter.Id,
                Username = waiter.Username,
                FirstName = waiter.FirstName,
                LastName = waiter.LastName,
                Gender = waiter.Gender,
                FullName = $"{waiter.FirstName} {waiter.LastName}"
            });
        }
    }

    // ════════════════════════════════════
    // DTOs
    // ════════════════════════════════════
    public class WaiterDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gender { get; set; } = "M";
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class WaiterSessionDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gender { get; set; } = "M";
        public string FullName { get; set; } = string.Empty;
    }

    public class CreateWaiterRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gender { get; set; } = "M";
    }

    public class UpdateWaiterRequest
    {
        public string Username { get; set; } = string.Empty;
        public string? Password { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gender { get; set; } = "M";
        public bool IsActive { get; set; }
    }

    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}