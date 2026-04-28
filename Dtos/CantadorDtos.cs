namespace AppRestaurantAPI.DTOs
{
    /// <summary>
    /// Plato agregado en la vista "POR CANTIDADES" del cantador.
    /// Suma las unidades pendientes (Quantity - ServedQuantity) de todas las mesas activas.
    /// </summary>
    public class AggregatedDishDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } = "";
        public int PendingQuantity { get; set; }
        // Lista de "M10×2", "M12×3", etc. para mostrar al cantador qué mesas esperan este plato.
        public List<string> PendingTables { get; set; } = new();
    }

    /// <summary>
    /// Entradas (cortesías) agregadas. No son OrderItems sino strings del campo Order.Entradas.
    /// </summary>
    public class AggregatedEntradaDto
    {
        public string Name { get; set; } = "";
        public int PendingQuantity { get; set; }
        public List<string> PendingTables { get; set; } = new();
    }

    /// <summary>
    /// Vista completa "POR CANTIDADES" — entradas + segundos.
    /// </summary>
    public class CantadorAggregatedViewDto
    {
        public List<AggregatedEntradaDto> Entradas { get; set; } = new();
        public List<AggregatedDishDto> Segundos { get; set; } = new();
    }

    /// <summary>
    /// Request para descontar 1 plato del agregado (se sirve a la primera mesa pendiente, FIFO).
    /// </summary>
    public class ServeItemRequest
    {
        public int ProductId { get; set; }
    }

    /// <summary>
    /// Respuesta tras descontar: indica si la orden afectada quedó completamente servida.
    /// </summary>
    public class ServeItemResponse
    {
        public int OrderId { get; set; }
        public int OrderItemId { get; set; }
        public int RemainingQuantity { get; set; }
        public bool OrderCompleted { get; set; }
        public int TableNumber { get; set; }
    }
}
