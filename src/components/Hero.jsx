import React from "react";

function Hero() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-purple-900/60"></div>

      {/* Content */}
      <div className="absolute bottom-20 left-10 md:left-20 z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          MFM (Sanctuary of Grace)
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Pursue. Engage. Encounter God.
        </p>
        <p className="text-sm md:text-base text-gray-300 mb-10">
          Sundays at 9am · 22 Abiodun Street Shomolu, Lagos, Nigeria
        </p>

        <div className="flex gap-4">
          <a
            href="#watch"
            className="bg-white text-purple-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
          >
            Watch Live
          </a>
          <a
            href="#visit"
            className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-purple-900 transition"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
