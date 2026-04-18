namespace AppRestaurantAPI.Models
{
    public class Table
    {
        public int Id { get; set; }
        public int TableNumber { get; set; }
        public int Capacity { get; set; }
        public int Floor { get; set; } = 1;
        public string Status { get; set; } = "Libre";
        public DateTime? OccupiedAt { get; set; }
    }
}