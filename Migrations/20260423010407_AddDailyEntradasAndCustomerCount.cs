using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace AppRestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddDailyEntradasAndCustomerCount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CustomerCount",
                table: "Orders",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RoundNumber",
                table: "OrderHistories",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DailyEntradas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyEntradas", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DailyEntradas_Date",
                table: "DailyEntradas",
                column: "Date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DailyEntradas");

            migrationBuilder.DropColumn(
                name: "CustomerCount",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "RoundNumber",
                table: "OrderHistories");
        }
    }
}
