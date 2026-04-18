using System.Text.Json.Serialization;

public class Order
{
    public int Id { get; set; }
    public int TableNumber { get; set; }
    public string MealType { get; set; }

    public List<OrderItem>? Items { get; set; }  // ← SIN [JsonIgnore]

    [JsonIgnore]  // ← Solo History ignorado
    public List<OrderHistory>? History { get; set; }

    public decimal Total { get; set; }
    public string Status { get; set; } = "Pendiente";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public char Comanda { get; set; } = 'A';
    public string? WaiterName { get; set; }
}