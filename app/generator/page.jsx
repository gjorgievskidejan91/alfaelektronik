

import { getRonixItems } from "../actions/generator";

export default async function Generator() {
    const items = await getRonixItems()
// console.log(items)
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {items.map((item) => (
    <div 
      key={item.Ident} 
      className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition duration-300"
    >
      <img 
        src={`https://www.alfaelektronik.com.mk/sliki/${item.Ident}/t_${item.Ident}.jpg`} 
        alt={item.Naziv} 
        className="w-full h-40 object-contain rounded-md mb-3 bg-gray-100"
      />
      <h3 className="text-lg font-semibold text-gray-800">{item.Naziv}</h3>
      <p className="text-sm text-gray-500">Шифра: {item.Ident}</p>
      <p className="text-lg font-bold text-green-600">{item.prodazna_cena} MKD</p>
 
      <p className={`text-sm font-medium ${item.Zaliha > 0 ? 'text-blue-600' : 'text-red-500'}`}>
        {item.Zaliha > 0 ? `Залиха: ${item.Zaliha}` : 'Out of Stock'}
      </p>
    </div>
  ))}
</div>

  );
}
