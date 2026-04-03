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
            return await _context.Tables.ToListAsync();
        }

        // GET: api/table/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Table>> GetTable(int id)
        {
            var table = await _context.Tables.FindAsync(id);
            if (table == null)
                return NotFound();
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
            if (id != table.Id)
                return BadRequest();

            _context.Entry(table).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // PUT: api/table/5/occupy
        [HttpPut("{id}/occupy")]
        public async Task<IActionResult> OccupyTable(int id)
        {
            var table = await _context.Tables.FindAsync(id);
            if (table == null)
                return NotFound();

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
            if (table == null)
                return NotFound();

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
            if (table == null)
                return NotFound();

            _context.Tables.Remove(table);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}