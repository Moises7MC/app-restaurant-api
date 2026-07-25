namespace AppRestaurantAPI.Models
{
    /// <summary>
    /// Ítem de inventario (insumos/ingredientes) que el dueño lleva manualmente.
    /// No está enlazado a Product/OrderItem — es un control de stock simple,
    /// no descuenta automáticamente al vender un plato.
    /// </summary>
    public class InventoryItem
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        // Ej: "Carnes", "Verduras", "Abarrotes", "Bebidas", "Otros"
        public string Category { get; set; } = "Otros";

        // Ej: "kg", "g", "l", "ml", "unidad", "paquete"
        public string Unit { get; set; } = "unidad";

        public decimal CurrentStock { get; set; } = 0;

        // Umbral para marcar "bajo stock" en la web
        public decimal MinStock { get; set; } = 0;

        // Opcional — para calcular el valor total del inventario
        public decimal? UnitCost { get; set; }

        public string? Notes { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
