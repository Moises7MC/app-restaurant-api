using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppRestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddFloorToTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Floor",
                table: "Tables",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Floor",
                table: "Tables");
        }
    }
}
