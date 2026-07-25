namespace AppRestaurantAPI.Models
{
    /// <summary>
    /// Configuración general del restaurante. Fila única (Id = 1).
    /// Hoy solo guarda los umbrales de tiempo para las alertas de pedidos
    /// demorados en Cocina (web) y Cantador (app), antes hardcodeados.
    /// </summary>
    public class RestaurantSettings
    {
        public int Id { get; set; }

        // Minutos desde que se creó el pedido para pasar a "advertencia" (naranja)
        public int WarningMinutes { get; set; } = 8;

        // Minutos desde que se creó el pedido para pasar a "urgente" (rojo)
        public int DangerMinutes { get; set; } = 15;

        // ✅ NUEVO: credenciales del dashboard web (dueño del restaurante).
        //    Antes estaban hardcodeadas en el frontend (admin/comoencasa).
        //    Texto plano, igual convención que Waiter.Password en este proyecto.
        public string AdminUsername { get; set; } = "admin";
        public string AdminPassword { get; set; } = "comoencasa";
    }
}
