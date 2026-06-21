using AppRestaurantAPI.Data;
using AppRestaurantAPI.Hubs;
using AppRestaurantAPI.Models;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using OfficeOpenXml; // Añadido: namespace de EPPlus
using OfficeOpenXml.Style; // Opcional: para estilos de celda
using System;
using System.Collections.Generic;
using System.Drawing; // Opcional: para System.Drawing.Color
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace AppRestaurantAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHubContext<OrderHub> _hub;

        public TransactionController(AppDbContext context, IHubContext<OrderHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        // GET: api/transaction
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactions()
        {
            return await _context.Transactions
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
        }

        // GET: api/transaction/today
        [HttpGet("today")]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetToday()
        {
            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);
            var todayInPeru = nowInPeru.Date;

            var startOfDayPeruUtc = TimeZoneInfo.ConvertTimeToUtc(todayInPeru, peruTimeZone);
            var endOfDayPeruUtc = startOfDayPeruUtc.AddDays(1);

            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt >= startOfDayPeruUtc && t.CreatedAt < endOfDayPeruUtc && !t.IsClosed)
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
            return Ok(transactions);
        }

        // GET: api/transaction/summary/today
        [HttpGet("summary/today")]
        public async Task<ActionResult<object>> GetTodaySummary()
        {
            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);
            var todayInPeru = nowInPeru.Date;

            var startOfDayPeruUtc = TimeZoneInfo.ConvertTimeToUtc(todayInPeru, peruTimeZone);
            var endOfDayPeruUtc = startOfDayPeruUtc.AddDays(1);

            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt >= startOfDayPeruUtc && t.CreatedAt < endOfDayPeruUtc && !t.IsClosed)
                .ToListAsync();

            var ingresos = transactions.Where(t => t.Type == "ingreso").Sum(t => t.Amount);
            var gastos = transactions.Where(t => t.Type == "gasto").Sum(t => t.Amount);

            var porMetodo = transactions
                .Where(t => t.Type == "ingreso")
                .GroupBy(t => t.PaymentMethod ?? "Sin especificar")
                .Select(g => new { metodo = g.Key, total = g.Sum(t => t.Amount), count = g.Count() })
                .ToList();

            return Ok(new
            {
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransacciones = transactions.Count,
                porMetodoPago = porMetodo
            });
        }

        // GET: api/transaction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaction>> GetTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null) return NotFound();
            return transaction;
        }

        // POST: api/transaction
        [HttpPost]
        public async Task<ActionResult<Transaction>> CreateTransaction(Transaction transaction)
        {
            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);

            transaction.CreatedAt = nowInPeru;
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("CajaActualizada");

            return CreatedAtAction(nameof(GetTransaction), new { id = transaction.Id }, transaction);
        }

        // DESPUÉS:
        [HttpPost("cobrar")]
        public async Task<ActionResult> CobrarOrden(CobrarRequest request)
        {
            var order = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == request.OrderId);

            if (order == null) return NotFound("Orden no encontrada");
            if (order.Status == "Cobrado") return BadRequest("Esta orden ya fue cobrada");

            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);

            // ✅ NUEVO: Si hay entradas adicionales con precio, usar el total enviado desde caja
            var montoFinal = (request.TotalOverride.HasValue && request.TotalOverride.Value > order.Total)
                ? request.TotalOverride.Value
                : order.Total;

            // ✅ NUEVO: Descripción que menciona entradas adicionales si las hay
            var descripcion = $"Mesa {order.TableNumber} — {order.MealType}";
            if (request.TotalOverride.HasValue && request.TotalOverride.Value > order.Total)
            {
                var adicional = request.TotalOverride.Value - order.Total;
                descripcion += $" (+ S/. {adicional:F2} entradas adicionales)";
            }

            var transaction = new Transaction
            {
                Type = "ingreso",
                Amount = montoFinal,
                Description = descripcion,
                TableNumber = order.TableNumber,
                OrderId = order.Id,
                PaymentMethod = request.PaymentMethod,
                CreatedAt = nowInPeru
            };

            _context.Transactions.Add(transaction);

            order.Status = order.TableNumber == 0 ? "Enviado a cocina" : "Cobrado";
            order.UpdatedAt = nowInPeru;
            _context.Update(order);

            await _context.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("CajaActualizada");
            await _hub.Clients.Group("Mozos").SendAsync("MesaCambio", new
            {
                tableNumber = order.TableNumber,
                isOccupied = false
            });

            return Ok(new { message = "Cobro registrado correctamente", transactionId = transaction.Id });
        }


        // POST: api/transaction/gasto
        [HttpPost("gasto")]
        public async Task<ActionResult> RegistrarGasto(GastoRequest request)
        {
            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);

            var transaction = new Transaction
            {
                Type = "gasto",
                Amount = request.Amount,
                Description = request.Description,
                PaymentMethod = null,
                CreatedAt = nowInPeru
            };

            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("CajaActualizada");

            return Ok(transaction);
        }

        // POST: api/transaction/cierre
        [HttpPost("cierre")]
        public async Task<ActionResult> CierreCaja()
        {
            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);
            var todayInPeru = nowInPeru.Date;

            var startOfDayPeruUtc = TimeZoneInfo.ConvertTimeToUtc(todayInPeru, peruTimeZone);
            var endOfDayPeruUtc = startOfDayPeruUtc.AddDays(1);

            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt >= startOfDayPeruUtc && t.CreatedAt < endOfDayPeruUtc && !t.IsClosed)
                .ToListAsync();

            if (!transactions.Any()) return BadRequest("No hay transacciones para cerrar");

            var ingresos = transactions.Where(t => t.Type == "ingreso").Sum(t => t.Amount);
            var gastos = transactions.Where(t => t.Type == "gasto").Sum(t => t.Amount);

            foreach (var t in transactions)
                t.IsClosed = true;

            await _context.SaveChangesAsync();
            await _hub.Clients.All.SendAsync("CajaActualizada");

            return Ok(new
            {
                message = "Caja cerrada correctamente",
                fecha = nowInPeru.ToString("dd/MM/yyyy"),
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransacciones = transactions.Count
            });
        }

        // GET: api/transaction/ordenes-listas
        [HttpGet("ordenes-listas")]
        public async Task<ActionResult<IEnumerable<object>>> GetOrdenesListas()
        {
            var peruTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Lima");
            var nowInPeru = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, peruTimeZone);
            var todayInPeru = nowInPeru.Date;

            var startOfDayPeruUtc = TimeZoneInfo.ConvertTimeToUtc(todayInPeru, peruTimeZone);
            var endOfDayPeruUtc = startOfDayPeruUtc.AddDays(1);

            var ordenes = await _context.Orders
                .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                .Where(o => o.CreatedAt >= startOfDayPeruUtc && o.CreatedAt < endOfDayPeruUtc && o.Status == "Listo")
                .OrderBy(o => o.TableNumber)
                .Select(o => new
                {
                    o.Id,
                    o.TableNumber,
                    o.MealType,
                    o.Total,
                    o.Status,
                    o.WaiterName,
                    o.CreatedAt,
                    o.Comanda,
                    o.EntradasAdicionales,
                    Items = o.Items!.Select(i => new
                    {
                        i.Id,
                        i.ProductId,
                        i.Quantity,
                        i.UnitPrice,
                        ProductName = i.Product != null ? i.Product.Name : "Producto"
                    }).ToList()
                })
                .ToListAsync();

            return Ok(ordenes);
        }

        // GET: api/transaction/summary
        [HttpGet("summary")]
        public async Task<ActionResult<object>> GetSummary()
        {
            var ingresos = await _context.Transactions
                .Where(t => t.Type == "ingreso")
                .SumAsync(t => t.Amount);
            var gastos = await _context.Transactions
                .Where(t => t.Type == "gasto")
                .SumAsync(t => t.Amount);

            return Ok(new
            {
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransactions = await _context.Transactions.CountAsync()
            });
        }

        // DELETE: api/transaction/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaction(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);
            if (transaction == null) return NotFound();
            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("by-date")]
        public async Task<IActionResult> GetByDate([FromQuery] string date)
        {
            if (!DateTime.TryParse(date, out var parsedDate))
                return BadRequest("Fecha inválida");

            // Fecha en Perú (-05)
            var start = new DateTimeOffset(parsedDate.Date, TimeSpan.FromHours(-5))
                            .ToUniversalTime();
            var end = start.AddDays(1);

            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt >= start && t.CreatedAt < end)
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();

            return Ok(transactions);
        }

        // GET: api/transaction/summary/by-date
        [HttpGet("summary/by-date")]
        public async Task<ActionResult<object>> GetSummaryByDate([FromQuery] string date)
        {
            if (!DateTime.TryParse(date, out var parsedDate))
                return BadRequest("Fecha inválida");

            var start = new DateTimeOffset(parsedDate.Date, TimeSpan.FromHours(-5)).UtcDateTime;
            var end = start.AddDays(1);

            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt >= start && t.CreatedAt < end)
                .ToListAsync();

            var ingresos = transactions.Where(t => t.Type == "ingreso").Sum(t => t.Amount);
            var gastos = transactions.Where(t => t.Type == "gasto").Sum(t => t.Amount);

            var porMetodo = transactions
                .Where(t => t.Type == "ingreso")
                .GroupBy(t => t.PaymentMethod ?? "Sin especificar")
                .Select(g => new { metodo = g.Key, total = g.Sum(t => t.Amount), count = g.Count() })
                .ToList();

            // ✅ NUEVO COMPORTAMIENTO: Si hay transacciones y TODAS están marcadas como IsClosed,
            // significa que este día ya fue cerrado por completo.
            bool isClosed = transactions.Any() && transactions.All(t => t.IsClosed);

            return Ok(new
            {
                ingresos,
                gastos,
                balance = ingresos - gastos,
                totalTransacciones = transactions.Count,
                porMetodoPago = porMetodo,
                isClosed // ✅ Enviamos el estado booleano a Angular
            });
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET: api/transaction/export/excel?date=yyyy-MM-dd
        // Genera y descarga el archivo Excel filtrado por fecha
        // ═══════════════════════════════════════════════════════════════════
        // ═══════════════════════════════════════════════════════════════════
        // GET: api/transaction/export/excel?date=yyyy-MM-dd
        // Genera y descarga el archivo Excel filtrado por fecha
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("export/excel")]
        public async Task<IActionResult> ExportExcel([FromQuery] string date)
        {
            if (!DateTime.TryParse(date, out var parsedDate))
                return BadRequest("Fecha inválida");

            var start = new DateTimeOffset(parsedDate.Date, TimeSpan.FromHours(-5)).UtcDateTime;
            var end = start.AddDays(1);

            var transactions = await _context.Transactions
                .Where(t => t.CreatedAt >= start && t.CreatedAt < end)
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();

            // ✅ CORREGIDO: Nueva sintaxis obligatoria para EPPlus v8+ 
            ExcelPackage.License.SetNonCommercialOrganization("Como en Casa");

            using (var package = new ExcelPackage())
            {
                var worksheet = package.Workbook.Worksheets.Add("Reporte Caja");

                // Encabezados
                worksheet.Cells[1, 1].Value = "ID";
                worksheet.Cells[1, 2].Value = "Hora";
                worksheet.Cells[1, 3].Value = "Tipo";
                worksheet.Cells[1, 4].Value = "Descripción";
                worksheet.Cells[1, 5].Value = "Mesa";
                worksheet.Cells[1, 6].Value = "Método Pago";
                worksheet.Cells[1, 7].Value = "Monto";

                // Estilo para la cabecera
                using (var range = worksheet.Cells[1, 1, 1, 7])
                {
                    range.Style.Font.Bold = true;
                    range.Style.Fill.PatternType = ExcelFillStyle.Solid;
                    range.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(15, 118, 110)); // Color Esmeralda
                    range.Style.Font.Color.SetColor(Color.White);
                }

                // Llenado de datos
                int row = 2;
                foreach (var t in transactions)
                {
                    worksheet.Cells[row, 1].Value = t.Id;
                    worksheet.Cells[row, 2].Value = t.CreatedAt.ToString("hh:mm tt");
                    worksheet.Cells[row, 3].Value = t.Type.ToUpper();
                    worksheet.Cells[row, 4].Value = t.Description;
                    worksheet.Cells[row, 5].Value = t.TableNumber == 0 ? "Para llevar" : $"Mesa {t.TableNumber}";
                    worksheet.Cells[row, 6].Value = t.PaymentMethod ?? "—";

                    var montoCell = worksheet.Cells[row, 7];
                    montoCell.Value = t.Amount;
                    montoCell.Style.Numberformat.Format = "\"S/.\" #,##0.00";

                    row++;
                }

                // ✅ NUEVO: Agregar fila de TOTAL al final de la tabla
                if (row > 2) // Solo si hay datos
                {
                    worksheet.Cells[row, 6].Value = "TOTAL:";
                    worksheet.Cells[row, 6].Style.Font.Bold = true;
                    worksheet.Cells[row, 6].Style.HorizontalAlignment = ExcelHorizontalAlignment.Right; // Alineado a la derecha

                    var totalCell = worksheet.Cells[row, 7];
                    totalCell.Formula = $"SUM(G2:G{row - 1})"; // Suma desde G2 hasta la fila anterior
                    totalCell.Style.Font.Bold = true;
                    totalCell.Style.Numberformat.Format = "\"S/.\" #,##0.00";
                    totalCell.Style.Border.Top.Style = ExcelBorderStyle.Thin; // Línea separadora arriba
                }

                worksheet.Cells.AutoFitColumns();
                var fileBytes = package.GetAsByteArray();
                string fileName = $"Reporte_Caja_{parsedDate:dd-MM-yyyy}.xlsx";

                return File(fileBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
            }
        }

        // ═══════════════════════════════════════════════════════════════════
        // GET: api/transaction/export/pdf?date=yyyy-MM-dd
        // Genera y descarga el archivo PDF filtrado por fecha
        // ═══════════════════════════════════════════════════════════════════
        // ═══════════════════════════════════════════════════════════════════
        // GET: api/transaction/export/pdf?date=yyyy-MM-dd
        // Genera y descarga el archivo PDF filtrado por fecha usando iTextSharp
        // ═══════════════════════════════════════════════════════════════════
        [HttpGet("export/pdf")]
        public async Task<IActionResult> ExportPdf([FromQuery] string date)
        {
            if (!DateTime.TryParse(date, out var parsedDate))
                return BadRequest("Fecha inválida");

            try
            {
                var start = new DateTimeOffset(parsedDate.Date, TimeSpan.FromHours(-5)).UtcDateTime;
                var end = start.AddDays(1);
                var transactions = await _context.Transactions
                    .Where(t => t.CreatedAt >= start && t.CreatedAt < end)
                    .OrderBy(t => t.CreatedAt)
                    .ToListAsync();

                using (var ms = new MemoryStream())
                {
                    // 1. Crear el documento tamaño A4
                    var document = new Document(PageSize.A4, 25, 25, 30, 30);
                    PdfWriter.GetInstance(document, ms);
                    document.Open();

                    // 2. Fuentes personalizadas
                    var titleFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 18, new BaseColor(15, 118, 110)); // Esmeralda
                    var subtitleFont = FontFactory.GetFont(FontFactory.HELVETICA, 10, BaseColor.DARK_GRAY);
                    var headerFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 10, BaseColor.WHITE);
                    var normalFont = FontFactory.GetFont(FontFactory.HELVETICA, 9, BaseColor.BLACK);

                    // 3. Agregar Título y Encabezado
                    document.Add(new Paragraph("Como en Casa - Flujo de Caja", titleFont) { Alignment = Element.ALIGN_CENTER });
                    document.Add(new Paragraph($"Reporte Diario: {parsedDate:dd/MM/yyyy}", subtitleFont) { Alignment = Element.ALIGN_CENTER });
                    document.Add(new Paragraph("\n")); // Espacio

                    // 4. Crear la tabla (7 columnas)
                    var table = new PdfPTable(7) { WidthPercentage = 100 };
                    table.SetWidths(new float[] { 5f, 12f, 12f, 35f, 12f, 12f, 12f }); // Proporción de anchos

                    // 5. Encabezados de la tabla
                    string[] headers = { "ID", "Hora", "Tipo", "Descripción", "Mesa", "Método", "Monto" };
                    foreach (var head in headers)
                    {
                        var cell = new PdfPCell(new Phrase(head, headerFont))
                        {
                            BackgroundColor = new BaseColor(15, 118, 110),
                            HorizontalAlignment = Element.ALIGN_CENTER,
                            VerticalAlignment = Element.ALIGN_MIDDLE,
                            PaddingBottom = 5f
                        };
                        table.AddCell(cell);
                    }

                    // 6. Llenar los datos
                    decimal totalIngresos = 0;
                    decimal totalGastos = 0;

                    foreach (var t in transactions)
                    {
                        table.AddCell(new PdfPCell(new Phrase(t.Id.ToString(), normalFont)) { HorizontalAlignment = Element.ALIGN_CENTER });
                        table.AddCell(new PdfPCell(new Phrase(t.CreatedAt.ToString("hh:mm tt"), normalFont)) { HorizontalAlignment = Element.ALIGN_CENTER });
                        table.AddCell(new PdfPCell(new Phrase(t.Type.ToUpper(), normalFont)) { HorizontalAlignment = Element.ALIGN_CENTER });
                        table.AddCell(new PdfPCell(new Phrase(t.Description, normalFont)));
                        table.AddCell(new PdfPCell(new Phrase(t.TableNumber == 0 ? "Para llevar" : $"Mesa {t.TableNumber}", normalFont)) { HorizontalAlignment = Element.ALIGN_CENTER });
                        table.AddCell(new PdfPCell(new Phrase(t.PaymentMethod ?? "—", normalFont)) { HorizontalAlignment = Element.ALIGN_CENTER });

                        var montoCell = new PdfPCell(new Phrase($"S/. {t.Amount:F2}", normalFont)) { HorizontalAlignment = Element.ALIGN_RIGHT };
                        table.AddCell(montoCell);

                        if (t.Type == "ingreso") totalIngresos += t.Amount;
                        if (t.Type == "gasto") totalGastos += t.Amount;
                    }

                    document.Add(table);
                    document.Add(new Paragraph("\n"));

                    // 7. Resumen final (Balance)
                    var balanceFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 12, BaseColor.BLACK);
                    document.Add(new Paragraph($"Total Ingresos: S/. {totalIngresos:F2}", normalFont) { Alignment = Element.ALIGN_RIGHT });
                    document.Add(new Paragraph($"Total Gastos: S/. {totalGastos:F2}", normalFont) { Alignment = Element.ALIGN_RIGHT });
                    document.Add(new Paragraph($"BALANCE NETO: S/. {(totalIngresos - totalGastos):F2}", balanceFont) { Alignment = Element.ALIGN_RIGHT });

                    // 8. Cerrar documento y devolver bytes reales
                    document.Close();

                    byte[] pdfBytes = ms.ToArray();
                    string fileName = $"Reporte_Caja_{parsedDate:dd-MM-yyyy}.pdf";
                    return File(pdfBytes, "application/pdf", fileName);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error generando PDF: {ex.Message}");
            }
        }
    }

    public class CobrarRequest
    {
        public int OrderId { get; set; }
        public string PaymentMethod { get; set; } = "Efectivo";
        public decimal? TotalOverride { get; set; }
    }

    public class GastoRequest
    {
        public decimal Amount { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}

/*
Si necesitas añadir la referencia NuGet, agrega en tu .csproj:

<ItemGroup>
  <PackageReference Include="EPPlus" Version="6.0.8" />
</ItemGroup>

Luego ejecuta en la terminal del proyecto:
dotnet add package EPPlus --version 6.0.8

Ajusta la versión según convenga. */