using Microsoft.AspNetCore.SignalR;

namespace AppRestaurantAPI.Hubs
{
    public class OrderHub : Hub
    {
        // ═══════════════════════════════════════════════════════════
        // Grupos existentes:
        //   - "Cocina"     → web del chef
        //   - "Mozos"      → app de los mozos (todos)
        //   - "Mesa_X"     → mozo específico viendo una mesa
        //   - "Cantadores" → app del cantador (tablet)
        // ═══════════════════════════════════════════════════════════

        // ───── Grupo Cocina ─────
        public async Task JoinCocinaGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Cocina");
        }

        // ✅ Alias en inglés para la web Angular
        public async Task JoinKitchenGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Cocina");
        }

        // ───── Grupo Mozos ─────
        public async Task JoinMozosGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Mozos");
        }

        // ✅ Alias en inglés para la app Flutter
        public async Task JoinWaitersGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Mozos");
        }

        // ───── Grupo de Mesa específica ─────
        public async Task JoinMesaGroup(int tableNumber)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
        }

        public async Task LeaveMesaGroup(int tableNumber)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, $"Mesa_{tableNumber}");
        }

        // ───── Grupo Cantadores ─────
        public async Task JoinCantadorGroup()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Cantadores");
        }

        // ───── Desconexión ─────
        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            await base.OnDisconnectedAsync(exception);
        }
    }
}