import { PDFDocument, rgb } from 'pdf-lib';

export async function generateCatalogPdf(items) {
  const pdfDoc = await PDFDocument.create();

  // Create a page
  const page = pdfDoc.addPage([600, 800]);
  const { height } = page.getSize();

  // Embed the Helvetica font
  const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
  const fontSize = 12;

  let yPosition = height - 50; // Start position on the page

  // Add header
  page.drawText('Catalog', { x: 50, y: yPosition, size: 20, font });

  yPosition -= 40; // Adjust y-position for items

  // Add items to the PDF
  for (const item of items) {
    page.drawText(`Title: ${item.title}`, { x: 50, y: yPosition, size: fontSize, font });
    yPosition -= 20;
    page.drawText(`Sifra: ${item.sifra}`, { x: 50, y: yPosition, size: fontSize, font });
    yPosition -= 20;
    page.drawText(`Cena: ${item.cena}`, { x: 50, y: yPosition, size: fontSize, font });
    yPosition -= 30; // Space between items

    // Check if we need to create a new page
    if (yPosition <= 50) {
      const newPage = pdfDoc.addPage([600, 800]);
      yPosition = newPage.getHeight() - 50;
    }
  }

  // Serialize the document to bytes
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
