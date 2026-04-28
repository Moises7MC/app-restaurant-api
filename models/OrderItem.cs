using System.Text.Json.Serialization;

namespace AppRestaurantAPI.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }

        // ✅ NUEVO: cuántas unidades de este item ya salieron de cocina (descontadas por el cantador).
        public int ServedQuantity { get; set; } = 0;

        // Total calculado del item (Quantity × UnitPrice)
        public decimal Total => Quantity * UnitPrice;

        [JsonIgnore]
        public Order? Order { get; set; }

        public Product? Product { get; set; }
    }
}