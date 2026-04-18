using Microsoft.AspNetCore.SignalR;

namespace AppRestaurantAPI.Hubs
{
    public class OrderHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            Console.WriteLine($"Cliente conectado: {Context.ConnectionId}");
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            Console.WriteLine($"Cliente desconectado: {Context.ConnectionId}");
            await base.OnDisconnectedAsync(exception);
        }

        // Chef se une al grupo de cocina
        public async Task JoinKitchenGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Cocina");
            Console.WriteLine($"Chef conectado al grupo Cocina: {Context.ConnectionId}");
        }

        // Mozo se une al grupo de mozos (para recibir actualizaciones de mesas)
        public async Task JoinWaitersGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Mozos");
            Console.WriteLine($"Mozo conectado al grupo Mozos: {Context.ConnectionId}");
        }

        // Mozo se une al grupo de su mesa específica
        public async Task JoinTableGroup(int tableNumber)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
            Console.WriteLine($"Mozo en mesa {tableNumber}: {Context.ConnectionId}");
        }

        // Mozo abandona el grupo de una mesa
        public async Task LeaveTableGroup(int tableNumber)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
        }

        // Enviar nuevo pedido a la cocina
        public async Task SendNewOrder(object order)
        {
            await Clients.Group("Cocina").SendAsync("NuevoPedido", order);
        }

        // Chef marca pedido como listo → notificar a mozos
        public async Task OrderReady(int orderId)
        {
            await Clients.All.SendAsync("PedidoListo", orderId);
            Console.WriteLine($"Pedido {orderId} marcado como listo");
        }

        // Actualizar estado del pedido
        public async Task UpdateOrderStatus(int orderId, string status)
        {
            await Clients.All.SendAsync("ActualizacionPedido", new { orderId, status });
        }

        // Notificar a todos los mozos que una mesa cambió de estado
        // Se llama desde el OrderController cuando se crea/actualiza una orden
        public async Task NotifyTableStatusChanged(int tableNumber, bool isOccupied)
        {
            await Clients.Group("Mozos").SendAsync("MesaCambio", new
            {
                tableNumber,
                isOccupied
            });
            Console.WriteLine($"Mesa {tableNumber} ahora está {(isOccupied ? "ocupada" : "libre")}");
        }
    }
}