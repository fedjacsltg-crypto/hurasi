import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { QuoteFormData } from "@/types/quote";
import type { ContainerEstimate } from "@/types/quote";

/**
 * Génère un PDF professionnel récapitulant la demande de devis.
 * Utilise pdf-lib (pure JS, compatible edge runtime / Cloudflare Workers —
 * pas de dépendance native, contrairement à des libs comme puppeteer).
 */
export async function generateQuotePdf(
  data: QuoteFormData,
  referenceNumber: string,
  submittedAt: Date,
  estimate: ContainerEstimate | null
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;
  let y = 780;
  const gold = rgb(0.72, 0.58, 0.37);
  const dark = rgb(0.06, 0.06, 0.06);
  const gray = rgb(0.4, 0.4, 0.4);

  function heading(text: string, size = 18) {
    page.drawText(text, { x: margin, y, size, font: bold, color: dark });
    y -= size + 10;
  }

  function label(text: string) {
    page.drawText(text.toUpperCase(), { x: margin, y, size: 8, font: bold, color: gold });
    y -= 12;
  }

  function value(text: string) {
    page.drawText(text || "—", { x: margin, y, size: 11, font, color: dark });
    y -= 20;
  }

  function rule() {
    page.drawLine({
      start: { x: margin, y },
      end: { x: 545, y },
      thickness: 0.5,
      color: rgb(0.85, 0.85, 0.85),
    });
    y -= 16;
  }

  page.drawText("HURASI", { x: margin, y, size: 22, font: bold, color: dark });
  y -= 30;
  page.drawText("Quotation Request", { x: margin, y, size: 12, font, color: gray });
  y -= 30;

  label("Reference Number");
  value(referenceNumber);
  label("Date");
  value(submittedAt.toISOString().slice(0, 19).replace("T", " ") + " UTC");
  rule();

  heading("Customer Information", 13);
  label("Company");
  value(data.company);
  label("Contact Person");
  value(data.contactPerson);
  label("Country");
  value(data.country);
  label("Email");
  value(data.email);
  label("Phone");
  value(data.phone);
  rule();

  heading("Product Specification", 13);
  label("Product Type");
  value(data.productType);
  label("Species");
  value("African Mahogany (Khaya)");
  label("Grade");
  value(data.grade);
  label("Moisture Content");
  value(data.moistureContent);
  label("Surface Finish");
  value(data.surfaceFinish);
  label("Machining Options");
  value(data.machiningOptions.join(", "));
  rule();

  heading("Dimensions", 13);
  for (const row of data.dimensions) {
    if (row.thickness && row.width && row.length && row.quantity) {
      value(`${row.thickness} × ${row.width} × ${row.length} mm — Qty: ${row.quantity}`);
    }
  }
  rule();

  if (estimate) {
    heading("Container Estimate", 13);
    value(`Total Volume: ${estimate.totalVolumeM3} m³`);
    value(`Estimated Weight: ${estimate.estimatedWeightKg} kg`);
    if (estimate.bestFit) {
      value(
        `Best Fit: ${estimate.bestFit.type.toUpperCase()} (${estimate.bestFit.fillRate}% fill, ${estimate.bestFit.containersNeeded} unit(s))`
      );
    }
    rule();
  }

  heading("Destination & Logistics", 13);
  label("Destination Country");
  value(data.destinationCountry);
  label("Final Port");
  value(data.finalPort);
  label("Incoterm");
  value(data.incoterm);
  label("Desired Delivery Date");
  value(data.deliveryDate);

  if (data.comments) {
    rule();
    heading("Additional Comments", 13);
    value(data.comments);
  }

  page.drawText("HURASI — Premium African Mahogany", {
    x: margin,
    y: 40,
    size: 8,
    font,
    color: gray,
  });

  return pdfDoc.save();
}
