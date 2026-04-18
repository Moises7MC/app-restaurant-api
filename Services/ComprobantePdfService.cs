using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;
using AppRestaurantAPI.Models;

namespace AppRestaurantAPI.Services
{
    public class ComprobantePdfService
    {
        public static byte[] GenerarComprobante(Order order)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                Document doc = new Document(PageSize.LETTER);
                PdfWriter.GetInstance(doc, ms);
                doc.Open();

                // Convertir a timezone de Perú (UTC-5)
                TimeZoneInfo peruTz = TimeZoneInfo.FindSystemTimeZoneById("SA Pacific Standard Time");
                DateTime fechaLocal = TimeZoneInfo.ConvertTime(order.CreatedAt, peruTz);

                // Título
                Paragraph titulo = new Paragraph("COMPROBANTE DE PAGO",
                    FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 16));
                titulo.Alignment = Element.ALIGN_CENTER;
                doc.Add(titulo);

                doc.Add(new Paragraph(" "));

                // Datos restaurante
                doc.Add(new Paragraph("RESTAURANTE \"COMO EN CASA\"",
                    FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 12)));
                doc.Add(new Paragraph("RUC: 20123456789"));
                doc.Add(new Paragraph("Dirección: Calle Principal 123"));
                doc.Add(new Paragraph("Teléfono: 987654321"));

                doc.Add(new Paragraph(" "));

                // Datos del comprobante
                doc.Add(new Paragraph($"Número: {order.Id:D6} - Comanda {order.Comanda}",
                    FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 11)));
                doc.Add(new Paragraph($"Fecha: {fechaLocal:dd/MM/yyyy}"));
                doc.Add(new Paragraph($"Hora: {fechaLocal:HH:mm:ss}"));
                doc.Add(new Paragraph($"Mesa: {order.TableNumber}"));

                doc.Add(new Paragraph(" "));

                // Tabla de productos
                PdfPTable table = new PdfPTable(4);
                table.WidthPercentage = 100;
                table.SetWidths(new float[] { 40, 15, 20, 25 });

                // Headers
                PdfPCell headerCell;
                foreach (string header in new[] { "Descripción", "Cant", "P.U.", "Total" })
                {
                    headerCell = new PdfPCell(new Phrase(header,
                        FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 10)));
                    headerCell.BackgroundColor = new BaseColor(200, 200, 200);
                    headerCell.HorizontalAlignment = Element.ALIGN_CENTER;
                    table.AddCell(headerCell);
                }

                // Items
                if (order.Items != null)
                {
                    foreach (var item in order.Items)
                    {
                        string productName = item.Product?.Name ?? "Producto";
                        table.AddCell(productName);
                        table.AddCell(item.Quantity.ToString());
                        table.AddCell($"S/. {item.UnitPrice:F2}");
                        table.AddCell($"S/. {item.Total:F2}");
                    }
                }

                doc.Add(table);
                doc.Add(new Paragraph(" "));

                // Total
                Paragraph totalParrafo = new Paragraph($"TOTAL A PAGAR: S/. {order.Total:F2}",
                    FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14));
                totalParrafo.Alignment = Element.ALIGN_CENTER;
                doc.Add(totalParrafo);

                doc.Add(new Paragraph(" "));
                doc.Add(new Paragraph("Forma de pago: Efectivo"));
                doc.Add(new Paragraph(" "));

                // Pie
                Paragraph pie = new Paragraph("¡Gracias por su compra!",
                    FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 10));
                pie.Alignment = Element.ALIGN_CENTER;
                doc.Add(pie);

                doc.Close();
                return ms.ToArray();
            }
        }
    }
}