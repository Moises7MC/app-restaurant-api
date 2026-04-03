namespace AppRestaurantAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int TableNumber { get; set; }
        public string MealType { get; set; }
        public List<OrderItem>? Items { get; set; } = new();  // ← AGREGA ?
        public decimal Total { get; set; }
        public string Status { get; set; } = "Pendiente";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
    }
}