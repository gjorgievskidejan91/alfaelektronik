'use client'
import { useState } from 'react';
import { generatePdf } from '../actions/generatePdf'; // Import the server action

export default function CatalogPage({ items = [] }) {
  const [isLoading, setIsLoading] = useState(false);

  // Call the server action to generate the PDF
  const handleDownloadPdf = async () => {
    setIsLoading(true);
    try {
      // Trigger the server-side action
      const pdfBytes = await generatePdf();
      
      // Create a blob from the PDF bytes and prompt the download
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'catalog.pdf';
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Catalog</h1>
      <button
        onClick={handleDownloadPdf}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Generating PDF...' : 'Download Catalog PDF'}
      </button>

      {/* Render the catalog items */}
      <div className="mt-4">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item._id} className="mb-4">
              <h2>{item.title}</h2>
              <p>Sifra: {item.sifra}</p>
              <p>Cena: {item.cena}</p>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}
