using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppRestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddComandaToOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<char>(
                name: "Comanda",
                table: "Orders",
                type: "character(1)",
                nullable: false,
                defaultValue: 'A');
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comanda",
                table: "Orders");
        }
    }
}
