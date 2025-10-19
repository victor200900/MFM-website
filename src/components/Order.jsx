// OrderModal.jsx
import React from "react";

import { useState } from "react";

export default function OrderModal({ item, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'd like to order:\n\n📦 *${item.name}*\n💵 Price: ${item.price}\n\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n🏠 Address: ${form.address}`;
    const url = `https://wa.me/2347045939049?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl">
          &times;
        </button>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">Place Your Order</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              id="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Delivery Address</label>
            <textarea
              id="address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition">
            Send Order
          </button>
        </form>
      </div>
    </div>
  );
}
