import React from 'react';

export default function ItemCard({ item }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden p-4 mb-4">
      <div className="flex flex-col items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-60 object-cover mb-4 rounded-md"
        />
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">Sifra: {item.sifraString}</p>
        <p className="text-lg font-bold mt-2">{item.cena} MKD</p>
      </div>
      <div className="mt-4 text-center">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
