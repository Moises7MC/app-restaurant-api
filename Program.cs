using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql; 

var builder = WebApplication.CreateBuilder(args);

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

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

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.SetIsOriginAllowed(_ => true)
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseDefaultFiles();
app.UseStaticFiles();

// ✅ Fallback para Angular Router (soluciona el F5/recarga)
app.Use(async (context, next) =>
{
    await next();
    if (context.Response.StatusCode == 404
        && !context.Request.Path.StartsWithSegments("/api")
        && !context.Request.Path.StartsWithSegments("/hubs")
        && !context.Request.Path.StartsWithSegments("/swagger"))
    {
        context.Response.StatusCode = 200;
        await context.Response.SendFileAsync(
            Path.Combine(app.Environment.ContentRootPath, "wwwroot", "index.html")
        );
    }
});

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
        if (!db.Products.Any())
        {
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

app.Urls.Add("http://0.0.0.0:5245");
app.Run();