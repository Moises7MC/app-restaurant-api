using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppRestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddDashboardCredentials : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AdminPassword",
                table: "RestaurantSettings",
                type: "text",
                nullable: false,
                defaultValue: "comoencasa");

            migrationBuilder.AddColumn<string>(
                name: "AdminUsername",
                table: "RestaurantSettings",
                type: "text",
                nullable: false,
                defaultValue: "admin");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdminPassword",
                table: "RestaurantSettings");

            migrationBuilder.DropColumn(
                name: "AdminUsername",
                table: "RestaurantSettings");
        }
    }
}
