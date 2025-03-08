'use client'
import { useState, useEffect } from 'react';

import { getCatalogItems } from '../actions/catalog';
import ItemCard from '../components/ItemCard';

// import UpdateSifraButton from '../components/UpdateSifraButton';
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getCatalogItems(searchTerm);
      setItems(result);
    };
    fetchItems();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Барај...."
          className="border px-4 py-2 rounded-lg w-full md:w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage ;
