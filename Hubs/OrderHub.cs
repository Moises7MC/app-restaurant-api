using Microsoft.AspNetCore.SignalR;

namespace AppRestaurantAPI.Hubs
{
    public class OrderHub : Hub
    {
        // Cuando el mozo se conecta
        public override async Task OnConnectedAsync()
        {
            Console.WriteLine($"Mozo conectado: {Context.ConnectionId}");
            await base.OnConnectedAsync();
        }

        // Cuando el mozo se desconecta
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            Console.WriteLine($"Mozo desconectado: {Context.ConnectionId}");
            await base.OnDisconnectedAsync(exception);
        }

        // El mozo se une al grupo "Cocina"
        public async Task JoinKitchenGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Cocina");
            Console.WriteLine($"Chef conectado al grupo Cocina");
        }

        // El mozo se une al grupo de su mesa
        public async Task JoinTableGroup(int tableNumber)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
            Console.WriteLine($"Mozo en mesa {tableNumber}");
        }

        // Enviar nuevo pedido a la cocina
        public async Task SendNewOrder(object order)
        {
            // Notificar al grupo "Cocina" que hay un nuevo pedido
            await Clients.Group("Cocina").SendAsync("NuevoPedido", order);
            Console.WriteLine($"Nuevo pedido enviado a cocina");
        }

        // Chef marca pedido como listo
        public async Task OrderReady(int orderId)
        {
            // Notificar a todos los mozos
            await Clients.All.SendAsync("PedidoListo", orderId);
            Console.WriteLine($"Pedido {orderId} marcado como listo");
        }

        // Actualizar estado del pedido
        public async Task UpdateOrderStatus(int orderId, string status)
        {
            await Clients.All.SendAsync("ActualizacionPedido", new { orderId, status });
        }
    }
}