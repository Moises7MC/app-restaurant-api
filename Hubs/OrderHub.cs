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

        public async Task JoinKitchenGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Cocina");
        }

        public async Task JoinWaitersGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Mozos");
            Console.WriteLine($"Mozo conectado al grupo Mozos: {Context.ConnectionId}");
        }

        public async Task JoinTableGroup(int tableNumber)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
        }

        public async Task LeaveTableGroup(int tableNumber)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
        }

        public async Task SendNewOrder(object order)
        {
            await Clients.Group("Cocina").SendAsync("NuevoPedido", order);
        }

        public async Task OrderReady(int orderId)
        {
            await Clients.All.SendAsync("PedidoListo", orderId);
        }

        public async Task UpdateOrderStatus(int orderId, string status)
        {
            await Clients.All.SendAsync("ActualizacionPedido", new { orderId, status });
        }

        public async Task NotifyTableStatusChanged(int tableNumber, bool isOccupied)
        {
            await Clients.Group("Mozos").SendAsync("MesaCambio", new { tableNumber, isOccupied });
        }

        // ✅ NUEVO: Notifica a todos los mozos que el menú cambió
        public async Task NotifyMenuUpdated(string reason)
        {
            await Clients.Group("Mozos").SendAsync("MenuActualizado", new { reason });
            Console.WriteLine($"MenuActualizado disparado: {reason}");
        }
    }
}