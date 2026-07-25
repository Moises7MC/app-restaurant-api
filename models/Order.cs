using System.Text.Json.Serialization;

namespace AppRestaurantAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int TableNumber { get; set; }
        public string MealType { get; set; } = "Almuerzo";
        public string Status { get; set; } = "Pendiente";
        public decimal Total { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public char Comanda { get; set; } = 'A';
        public string? WaiterName { get; set; }
        public int CustomerCount { get; set; } = 1;
        public string? Entradas { get; set; }
        public bool IsParaLlevar { get; set; } = false;

        // ✅ NUEVO: marca si el cantador ya cantó esta orden al chef.
        //    Se usa para mostrar las órdenes nuevas en la sección "cantar al chef" del tab "POR MESA".
        public bool WasSung { get; set; } = false;

        // ✅ NUEVO: pedidos "SEPARADOS" — cada uno es una cuenta independiente de la misma mesa,
        //    identificada con una letra correlativa (A, B, C...) asignada por CreateOrder.
        public bool IsSeparado { get; set; } = false;
        public string? TableSuffix { get; set; }

        // ✅ NUEVO: último mozo que tocó este pedido (items o entradas), para saber
        //    a quién atribuir las entradas nuevas cuando no coincide con WaiterName
        //    (el mozo original que creó el pedido).
        public string? LastEditedByWaiter { get; set; }

        // ✅ NUEVO: borrado lógico — el pedido eliminado desde la web se mantiene
        //    visible (tachado) en Cocina para trazabilidad/anti-fraude, pero deja
        //    de contar como activo en mesas, cantador, caja y reportes.
        public bool IsDeleted { get; set; } = false;
        public DateTime? DeletedAt { get; set; }

        public List<OrderItem>? Items { get; set; }

        [JsonIgnore]
        public List<OrderHistory>? History { get; set; }
        /// Entradas ya servidas por el cantador (JSON: ["ensalada rusa","humita"])
        public string? EntradasServidas { get; set; }
        public string? EntradasAdicionales { get; set; }
    }
}