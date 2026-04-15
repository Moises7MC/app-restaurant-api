using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS - MUY IMPORTANTE
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.WithOrigins(
                "http://localhost:4200",
                "https://chef-dashboard-seven.vercel.app"
               )
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection(); // ← Comentado
app.UseCors("AllowAll");  // ← ANTES de MapControllers
app.UseAuthorization();
app.MapControllers();
app.MapHub<OrderHub>("/hubs/orders");

Console.WriteLine($"🔗 Conexión BD: {builder.Configuration.GetConnectionString("DefaultConnection")}");

// ✅ APLICAR MIGRACIONES
try
{
    using (var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        // Aplica las migraciones
        db.Database.Migrate();
        Console.WriteLine("✓ Migraciones aplicadas correctamente");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"✗ Error en migraciones: {ex.Message}");
}

// ✅ SEED DE PRODUCTOS
try
{
    using (var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (!db.Products.Any())
        {
            db.Products.AddRange(
                new Product { Name = "Pollo a la parrilla", Price = 100, Category = "Almuerzo", Description = "Pollo fresco a la parrilla", ImageUrl = "pollo.jpg" },
                new Product { Name = "Cabrito", Price = 85, Category = "Almuerzo", Description = "Cabrito tierno", ImageUrl = "cabrito.jpg" },
                new Product { Name = "Pescado frito", Price = 120, Category = "Almuerzo", Description = "Pescado fresco frito", ImageUrl = "pescado.jpg" },
                new Product { Name = "Ceviche mixto", Price = 95, Category = "Almuerzo", Description = "Ceviche marino", ImageUrl = "ceviche.jpg" },
                new Product { Name = "Lomo saltado", Price = 150, Category = "Almuerzo", Description = "Lomo de res saltado", ImageUrl = "lomo.jpg" }
            );
            db.SaveChanges();
            Console.WriteLine("✓ Productos seeded correctamente");
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine($"✗ Error al seedear productos: {ex.Message}");
}

app.Run();