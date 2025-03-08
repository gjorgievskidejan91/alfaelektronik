import { generateCatalogPdf } from '@/utils/generatePdf';
import { getCatalogItems } from './catalog';


export async function generatePdf() {
  try {
    const items = await getCatalogItems(); // Fetch catalog items from DB

    // Generate the PDF
    const pdfBytes = await generateCatalogPdf(items);

    return pdfBytes;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Error generating PDF');
  }
}
