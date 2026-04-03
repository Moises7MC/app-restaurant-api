namespace AppRestaurantAPI.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public Order? Order { get; set; }  // ← AGREGA ?
        public int ProductId { get; set; }
        public Product? Product { get; set; }  // ← AGREGA ?
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Total => Quantity * UnitPrice;
    }
}