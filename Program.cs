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
        builder.WithOrigins("http://localhost:4200")
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

// Seed de productos
try
{
    using (var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        db.Database.EnsureCreated();
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
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error al conectar BD: {ex.Message}");
}

app.Run();