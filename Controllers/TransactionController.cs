using AppRestaurantAPI.Data;
using AppRestaurantAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/transaction
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactions()
        {
            return await _context.Transactions
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
        }

        // GET: api/transaction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaction>> GetTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null)
                return NotFound();
            return transaction;
        }

        // POST: api/transaction
        [HttpPost]
        public async Task<ActionResult<Transaction>> CreateTransaction(Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTransaction), new { id = transaction.Id }, transaction);
        }

        // GET: api/transaction/summary
        [HttpGet("summary")]
        public async Task<ActionResult<object>> GetSummary()
        {
            var ingresos = await _context.Transactions
                .Where(t => t.Type == "ingreso")
                .SumAsync(t => t.Amount);

            var gastos = await _context.Transactions
                .Where(t => t.Type == "gasto")
                .SumAsync(t => t.Amount);

            var balance = ingresos - gastos;

            return new
            {
                ingresos,
                gastos,
                balance,
                totalTransactions = await _context.Transactions.CountAsync()
            };
        }

        // DELETE: api/transaction/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null)
                return NotFound();

            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}