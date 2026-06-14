using System.ComponentModel.DataAnnotations;

namespace AppRestaurantAPI.models
{
    public class MenuDelDiaItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Categoria { get; set; } = string.Empty; // Ej: "Entradas", "Platos Fuertes", "Postres", "Bebidas", "Menú Completo"

        [Required]
        public string Nombre { get; set; } = string.Empty;

        public string? Descripcion { get; set; }

        public decimal Precio { get; set; }

        public string? Tag { get; set; } // Ej: "Vegetariano", "Mariscos", "Chef recomienda"

        public bool EsDestacado { get; set; } // Para ponerle el fondo doradito y la estrella

        public int Orden { get; set; } // Para que decidas qué plato sale primero
    }
}
