namespace AppRestaurantAPI.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string Type { get; set; } = "ingreso";
        public decimal Amount { get; set; }
        public string Description { get; set; } = string.Empty;
        public int? TableNumber { get; set; }
        public string? TableSuffix { get; set; }
        public bool IsParaLlevar { get; set; } = false;
        public int? OrderId { get; set; }
        public string? PaymentMethod { get; set; }
        public bool IsClosed { get; set; } = false;

        // 🔥 CAMBIO CLAVE
        public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
    }
}