// Shop.jsx
import React from "react";
import { useState, useEffect } from "react";
import OrderModal from "./OrderModal";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // auto refresh shop data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/shop-data.json");
      const data = await res.json();
      setItems(data.items);
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="shop" className="py-20 px-6 md:px-20 bg-gradient-to-br from-purple-50 to-white">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Church Shop</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6 text-center w-72 hover:shadow-2xl transition transform hover:-translate-y-2">
            <img src={item.image} alt={item.name} className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-3">{item.price}</p>
            <button
              onClick={() => setSelectedItem(item)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedItem && (
        <OrderModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
