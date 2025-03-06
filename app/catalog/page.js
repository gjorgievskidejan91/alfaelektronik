"use client";

import { useEffect, useState } from "react";
import { addCatalogItem, getCatalogItems } from "@/app/actions/catalog";

export default function CatalogPage() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);

  async function fetchItems() {
    const data = await getCatalogItems();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await addCatalogItem(formData);
    setMessage(result.message);
    fetchItems(); // Refresh list after adding
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Catalog</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" placeholder="Title" required className="border p-2 rounded" />
          <input name="sifra" placeholder="Sifra" required className="border p-2 rounded" />
          <input name="image" placeholder="Image URL" required className="border p-2 rounded" />
          <input name="cena" type="number" placeholder="Price" required className="border p-2 rounded" />
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Add Product</button>
      </form>

      {message && <p className="text-green-600 text-center">{message}</p>}

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600">Sifra: {item.sifra}</p>
            <p className="text-blue-600 font-bold">{item.cena} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
}
