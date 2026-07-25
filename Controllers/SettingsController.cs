using AppRestaurantAPI.Data;
using AppRestaurantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    /// <summary>
    /// Configuración general del restaurante (hoy: umbrales de tiempo de
    /// pedidos demorados, editables por el dueño desde Menús → Tiempos).
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class SettingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SettingsController(AppDbContext context)
        {
            _context = context;
        }

        private async Task<RestaurantSettings> GetOrCreateSettings()
        {
            var settings = await _context.RestaurantSettings.FirstOrDefaultAsync();
            if (settings == null)
            {
                settings = new RestaurantSettings();
                _context.RestaurantSettings.Add(settings);
                await _context.SaveChangesAsync();
            }
            return settings;
        }

        // 🛑 IMPORTANTE: nunca devolver el RestaurantSettings completo — tiene
        //    AdminUsername/AdminPassword. Los endpoints públicos usan DTOs.
        private static TimersDto ToTimersDto(RestaurantSettings s) =>
            new TimersDto { WarningMinutes = s.WarningMinutes, DangerMinutes = s.DangerMinutes };

        // GET: api/settings/timers
        [HttpGet("timers")]
        public async Task<ActionResult<TimersDto>> GetTimers()
        {
            return Ok(ToTimersDto(await GetOrCreateSettings()));
        }

        // PUT: api/settings/timers
        [HttpPut("timers")]
        public async Task<ActionResult<TimersDto>> UpdateTimers(UpdateTimersRequest request)
        {
            if (request.WarningMinutes <= 0 || request.DangerMinutes <= 0)
                return BadRequest("Los minutos deben ser mayores a 0");

            if (request.DangerMinutes <= request.WarningMinutes)
                return BadRequest("El tiempo urgente debe ser mayor al tiempo de advertencia");

            var settings = await GetOrCreateSettings();
            settings.WarningMinutes = request.WarningMinutes;
            settings.DangerMinutes = request.DangerMinutes;

            _context.Update(settings);
            await _context.SaveChangesAsync();

            return Ok(ToTimersDto(settings));
        }

        // ═══════════════════════════════════════════════════════════
        // LOGIN / CONTRASEÑA DEL DASHBOARD (dueño del restaurante)
        // ═══════════════════════════════════════════════════════════

        // POST: api/settings/login
        [HttpPost("login")]
        public async Task<IActionResult> Login(DashboardLoginRequest request)
        {
            var settings = await GetOrCreateSettings();

            if (settings.AdminUsername != request.Username || settings.AdminPassword != request.Password)
                return Unauthorized("Usuario o contraseña incorrectos");

            return Ok(new { success = true });
        }

        // PUT: api/settings/password
        [HttpPut("password")]
        public async Task<IActionResult> ChangePassword(ChangePasswordRequest request)
        {
            var settings = await GetOrCreateSettings();

            if (settings.AdminUsername != request.Username || settings.AdminPassword != request.CurrentPassword)
                return BadRequest("Usuario o contraseña actual incorrectos");

            if (string.IsNullOrWhiteSpace(request.NewPassword) || request.NewPassword.Trim().Length < 4)
                return BadRequest("La nueva contraseña debe tener al menos 4 caracteres");

            settings.AdminPassword = request.NewPassword.Trim();
            _context.Update(settings);
            await _context.SaveChangesAsync();

            return Ok(new { success = true });
        }
    }

    public class TimersDto
    {
        public int WarningMinutes { get; set; }
        public int DangerMinutes { get; set; }
    }

    public class UpdateTimersRequest
    {
        public int WarningMinutes { get; set; }
        public int DangerMinutes { get; set; }
    }

    public class DashboardLoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class ChangePasswordRequest
    {
        public string Username { get; set; } = string.Empty;
        public string CurrentPassword { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
    }
}
