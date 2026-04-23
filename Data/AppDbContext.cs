using AppRestaurantAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AppRestaurantAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<OrderHistory> OrderHistories { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Waiter> Waiters { get; set; }
        // ✅ NUEVO
        public DbSet<DailyEntrada> DailyEntradas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Order>()
                .HasMany(o => o.Items)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Order>()
                .HasMany(o => o.History)
                .WithOne(oh => oh.Order)
                .HasForeignKey(oh => oh.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OrderItem>()
                .HasOne(oi => oi.Product)
                .WithMany()
                .HasForeignKey(oi => oi.ProductId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OrderHistory>()
                .HasOne(oh => oh.Order)
                .WithMany(o => o.History)
                .HasForeignKey(oh => oh.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

            // ✅ índice por fecha para consultas rápidas
            modelBuilder.Entity<DailyEntrada>()
                .HasIndex(e => e.Date);
        }
    }
}