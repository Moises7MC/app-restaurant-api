using System.Text.Json.Serialization;

public class Order
{
    public int Id { get; set; }
    public int TableNumber { get; set; }
    public string MealType { get; set; }
    public List<OrderItem>? Items { get; set; }
    [JsonIgnore]
    public List<OrderHistory>? History { get; set; }
    public decimal Total { get; set; }
    public string Status { get; set; } = "Pendiente";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public char Comanda { get; set; } = 'A';
    public string? WaiterName { get; set; }
    public int CustomerCount { get; set; } = 1;
    // ✅ NUEVO: ej: "2x Tamal, 1x Sopa, 1x Sin entrada"
    public string? Entradas { get; set; }
    public bool IsParaLlevar { get; set; } = false;
}