using System.Diagnostics;
using System.Text.Json;
using AppRestaurantAPI.Data;
using AppRestaurantAPI.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuDelDiaController : ControllerBase
    {
        private readonly AppDbContext _context;

        // La ruta exacta de tu carpeta local de Netlify
        //private readonly string _rutaNetlify = @"C:\Users\Moise\OneDrive\Documentos\Moche\COMO EN CASA\QR";
        private readonly string _rutaNetlify = @"C:\publish\QR";

        public MenuDelDiaController(AppDbContext context)
        {
            _context = context;
        }

        // ✅ GET: api/MenuDelDia (Sigue disponible por si tu Angular lo necesita para leer)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuDelDiaItem>>> GetMenuPublico()
        {
            var menu = await _context.MenuDelDiaItems
                .OrderBy(m => m.Categoria)
                .ThenBy(m => m.Orden)
                .ToListAsync();

            return Ok(menu);
        }

        // ✅ POST: api/MenuDelDia/bulk
        [HttpPost("bulk")]
        public async Task<IActionResult> UpdateFullMenu([FromBody] List<MenuDelDiaItem> nuevoMenu)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                // 1. Borramos el menú del día anterior
                var menuAnterior = await _context.MenuDelDiaItems.ToListAsync();
                if (menuAnterior.Any())
                {
                    _context.MenuDelDiaItems.RemoveRange(menuAnterior);
                    await _context.SaveChangesAsync();
                }

                // 2. Insertamos el nuevo menú
                if (nuevoMenu != null && nuevoMenu.Any())
                {
                    await _context.MenuDelDiaItems.AddRangeAsync(nuevoMenu);
                    await _context.SaveChangesAsync();
                }

                await transaction.CommitAsync();

                // 3. Crear el archivo menu.json físicamente en tu carpeta de Netlify
                string jsonPath = Path.Combine(_rutaNetlify, "menu.json");

                var jsonOptions = new JsonSerializerOptions
                {
                    WriteIndented = true,
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase // <- Esta es la línea mágica
                };
                string jsonString = JsonSerializer.Serialize(nuevoMenu, jsonOptions);

                await System.IO.File.WriteAllTextAsync(jsonPath, jsonString);

                // 4. Ejecutar el archivo desplegar.bat de forma silenciosa
                string batPath = Path.Combine(_rutaNetlify, "desplegar.bat");
                if (System.IO.File.Exists(batPath))
                {
                    ProcessStartInfo psi = new ProcessStartInfo
                    {
                        FileName = batPath,
                        WorkingDirectory = _rutaNetlify,
                        UseShellExecute = true,
                        CreateNoWindow = true,
                        WindowStyle = ProcessWindowStyle.Hidden // Oculta la consola negra
                    };
                    Process.Start(psi);
                }

                return Ok(new { message = "Menú actualizado y subiendo a Netlify automáticamente." });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return StatusCode(500, $"Error al actualizar el menú: {ex.Message}");
            }
        }
    }
}