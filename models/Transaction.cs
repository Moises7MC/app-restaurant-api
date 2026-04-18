namespace AppRestaurantAPI.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string Type { get; set; } = "ingreso"; // ingreso, gasto
        public decimal Amount { get; set; }
        public string Description { get; set; } = string.Empty;
        public int? TableNumber { get; set; }
        public int? OrderId { get; set; }
        public string? PaymentMethod { get; set; } // Efectivo, Tarjeta, Yape, Plin
        public bool IsClosed { get; set; } = false; // true = caja cerrada ese día
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}