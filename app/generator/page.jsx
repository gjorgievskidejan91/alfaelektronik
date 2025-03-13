

import { getRonixItems } from "../actions/generator";

export default async function Generator() {
    const items = await getRonixItems()
// console.log(items)

const categorizeItems = (items) => {
    const categories = {
      "Cordless Tools": [],
      "Other Tools": []
    };
  
    items.forEach((item) => {
      if (!item.Naziv) return; // Ensure Naziv is defined
  
      const match = item.Naziv.match(/^\d+/); // Extract leading number
      const num = match ? parseInt(match[0], 10) : null;
  
      if (num !== null) {
        if (num >= 8000 && num <= 8999) {
          categories["Cordless Tools"].push(item);
        } else {
          categories["Other Tools"].push(item);
        }
      } else {
        categories["Other Tools"].push(item);
      }
    });
  
    return categories;
  };
  
  const categorizedItems = categorizeItems(items);
  
  return (
    <div className="space-y-8">
      {Object.entries(categorizedItems).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.Ident}
                className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <img
                  src={`https://www.alfaelektronik.com.mk/sliki/${item.Ident}/t_${item.Ident}.jpg`}
                  alt={item.Naziv || "No Name"}
                  className="w-full h-60 object-contain rounded-md mb-3 bg-gray-100"
                />
                <h3 className="text-lg font-semibold text-gray-800">{item.Naziv || "Unknown Item"}</h3>
                <p className="text-sm text-gray-500">ID: {item.Ident}</p>
                <p className="text-lg font-bold text-green-600">{item.prodazna_cena} MKD</p>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
}