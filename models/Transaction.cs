namespace AppRestaurantAPI.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string Type { get; set; } // ingreso, gasto
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public int? TableNumber { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}