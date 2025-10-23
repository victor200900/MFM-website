import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // send through email
  const handleEmailSend = (e) => {
    e.preventDefault();
    const mailto = `mailto:info@mfmlagos.org?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  // send through WhatsApp
  const handleWhatsAppSend = () => {
    const phoneNumber = "+2347045939049"; // your WhatsApp number
    const text = `Hello, I'm ${form.name}. ${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-purple-100 via-white to-purple-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Need prayer, guidance, or want to worship with us? Reach out — our doors and
            hearts are always open.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div
            data-aos="fade-right"
            className="bg-white shadow-xl rounded-2xl p-8 text-left"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Visit or Contact Us
            </h3>
            <p className="text-gray-700 mb-3">
              <span className="font-bold">Address:</span> 13 Prayer Avenue, MFM Regional HQ, Lagos, Nigeria
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-bold">Phone:</span> +234 701 234 5678
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-bold">Email:</span> info@mfmlagos.org
            </p>
            <p className="text-gray-600">
              Join us this Sunday for a power-filled service. We look forward to meeting you!
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleEmailSend}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send via Email
              </button>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Gradient bottom */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-purple-200 to-transparent"></div>
    </section>
  );
}

export default Contact;
