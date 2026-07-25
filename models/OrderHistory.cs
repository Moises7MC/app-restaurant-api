using AppRestaurantAPI.Models;
using System.Text.Json.Serialization;

public class OrderHistory
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    [JsonIgnore]
    public Order? Order { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string Action { get; set; }
    public string ItemsAdded { get; set; }
    // ✅ NUEVO: a qué ronda normal pertenece esta modificación/cancelación
    public int? RoundNumber { get; set; }
    // ✅ NUEVO: qué mozo envió esta tanda de platos (puede ser distinto al que creó el pedido)
    public string? WaiterName { get; set; }
}