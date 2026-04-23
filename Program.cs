using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler =
            System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
        options.JsonSerializerOptions.MaxDepth = 64;
    });

builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll", builder =>
//    {
//        builder.WithOrigins(
//                "http://localhost:4200",
//                "https://chef-dashboard-seven.vercel.app"
//               )
//               .AllowAnyMethod()
//               .AllowAnyHeader()
//               .AllowCredentials();
//    });
//});

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

app.UseCors("AllowAll");
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
        db.Database.Migrate();
        Console.WriteLine("✓ Migraciones aplicadas correctamente");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"✗ Error en migraciones: {ex.Message}");
}

// ✅ SEED DE CATEGORÍAS Y PRODUCTOS
try
{
    using (var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        // Seed de categorías si no existen
        if (!db.Categories.Any())
        {
            db.Categories.AddRange(
                new Category { Name = "Guisos", Description = "Platos a base de guisos y estofados", SortOrder = 1 },
                new Category { Name = "Fritos", Description = "Platos fritos y a la parrilla", SortOrder = 2 },
                new Category { Name = "Mariscos", Description = "Platos de mar", SortOrder = 3 },
                new Category { Name = "Bebidas", Description = "Bebidas frías y calientes", SortOrder = 4 }
            );
            db.SaveChanges();
            Console.WriteLine("✓ Categorías seeded correctamente");
        }

        // Seed de productos si no existen
        if (!db.Products.Any())
        {
            // Obtener IDs de categorías
            var guisos = db.Categories.First(c => c.Name == "Guisos").Id;
            var fritos = db.Categories.First(c => c.Name == "Fritos").Id;
            var mariscos = db.Categories.First(c => c.Name == "Mariscos").Id;

            db.Products.AddRange(
                new Product { Name = "Pollo a la parrilla", Price = 13, CategoryId = fritos, Description = "Sale con papas fritas o papas sanchadas", ImageUrl = "assets/images/pollo_parrilla.jpg" },
                new Product { Name = "Cabrito", Price = 15, CategoryId = guisos, Description = "Con frejol o mentestra", ImageUrl = "assets/images/cabrito.jpg" },
                new Product { Name = "Pescado frito", Price = 10, CategoryId = fritos, Description = "Pescado furel", ImageUrl = "assets/images/pescado frito.jpg" },
                new Product { Name = "Ceviche mixto", Price = 15, CategoryId = mariscos, Description = "Doble o trio marino", ImageUrl = "assets/images/ceviche mixto.jpg" },
                new Product { Name = "Lomo saltado", Price = 13, CategoryId = guisos, Description = "Lomo de res saltado con verduras", ImageUrl = "assets/images/lomo saltado.jpg" }
            );
            db.SaveChanges();
            Console.WriteLine("✓ Productos seeded correctamente");
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine($"✗ Error al seedear datos: {ex.Message}");
}

app.Run();