namespace AppRestaurantAPI.Models
{
    public class Table
    {
        public int Id { get; set; }
        public int TableNumber { get; set; }
        public int Capacity { get; set; }
        public string Status { get; set; } = "Libre"; // Libre, Ocupada
        public DateTime? OccupiedAt { get; set; }
    }
}