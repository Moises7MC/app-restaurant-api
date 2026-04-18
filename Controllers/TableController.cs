using AppRestaurantAPI.Data;
using AppRestaurantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TableController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/table
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Table>>> GetTables()
        {
            return await _context.Tables
                .OrderBy(t => t.Floor)
                .ThenBy(t => t.TableNumber)
                .ToListAsync();
        }

        // GET: api/table/by-floor
        [HttpGet("by-floor")]
        public async Task<ActionResult<IEnumerable<object>>> GetTablesByFloor()
        {
            var tables = await _context.Tables
                .OrderBy(t => t.Floor)
                .ThenBy(t => t.TableNumber)
                .ToListAsync();

            // Mesas ocupadas hoy por órdenes activas
            var todayUtc = DateTime.UtcNow.Date;
            var occupiedNumbers = await _context.Orders
                .Where(o => o.CreatedAt.Date == todayUtc &&
                            (o.Status == "Enviado a cocina" || o.Status == "Pendiente"))
                .Select(o => o.TableNumber)
                .Distinct()
                .ToListAsync();

            var floors = tables
                .GroupBy(t => t.Floor)
                .OrderBy(g => g.Key)
                .Select(g => new
                {
                    floor = g.Key,
                    floorName = $"Piso {g.Key}",
                    tables = g.Select(t => new
                    {
                        t.Id,
                        t.TableNumber,
                        t.Capacity,
                        t.Floor,
                        isOccupied = occupiedNumbers.Contains(t.TableNumber)
                    }).ToList()
                })
                .ToList();

            return Ok(floors);
        }

        // GET: api/table/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Table>> GetTable(int id)
        {
            var table = await _context.Tables.FindAsync(id);
            if (table == null) return NotFound();
            return table;
        }

        // POST: api/table
        [HttpPost]
        public async Task<ActionResult<Table>> CreateTable(Table table)
        {
            _context.Tables.Add(table);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTable), new { id = table.Id }, table);
        }

        // PUT: api/table/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTable(int id, Table table)
        {
            if (id != table.Id) return BadRequest();
            _context.Entry(table).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // PUT: api/table/5/occupy
        [HttpPut("{id}/occupy")]
        public async Task<IActionResult> OccupyTable(int id)
        {
            var table = await _context.Tables.FindAsync(id);
            if (table == null) return NotFound();
            table.Status = "Ocupada";
            table.OccupiedAt = DateTime.UtcNow;
            _context.Entry(table).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // PUT: api/table/5/free
        [HttpPut("{id}/free")]
        public async Task<IActionResult> FreeTable(int id)
        {
            var table = await _context.Tables.FindAsync(id);
            if (table == null) return NotFound();
            table.Status = "Libre";
            table.OccupiedAt = null;
            _context.Entry(table).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/table/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTable(int id)
        {
            var table = await _context.Tables.FindAsync(id);
            if (table == null) return NotFound();
            _context.Tables.Remove(table);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // POST: api/table/seed — ejecutar UNA sola vez
        [HttpPost("seed")]
        public async Task<IActionResult> SeedTables()
        {
            if (await _context.Tables.AnyAsync())
                return BadRequest("Ya existen mesas. Elimínalas primero si quieres recrearlas.");

            var tables = new List<Table>();

            // Piso 1: mesas 1–35
            for (int i = 1; i <= 35; i++)
                tables.Add(new Table { TableNumber = i, Capacity = i % 2 == 0 ? 4 : 2, Floor = 1 });

            // Piso 2: mesas 36–55
            for (int i = 36; i <= 55; i++)
                tables.Add(new Table { TableNumber = i, Capacity = i % 2 == 0 ? 4 : 2, Floor = 2 });

            _context.Tables.AddRange(tables);
            await _context.SaveChangesAsync();

            return Ok(new { message = "55 mesas creadas", piso1 = 35, piso2 = 20 });
        }
    }
}