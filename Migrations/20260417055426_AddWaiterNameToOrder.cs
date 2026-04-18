using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppRestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddWaiterNameToOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WaiterName",
                table: "Orders",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WaiterName",
                table: "Orders");
        }
    }
}
