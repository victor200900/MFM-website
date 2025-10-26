import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen w-full text-white flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          MFM <span className="text-purple-300">(Sanctuary of Grace)</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-3 font-medium">
          Pursue. Engage. Encounter God.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
          Sundays at 9am · 22 Abiodun Street, Shomolu, Lagos, Nigeria
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#watch"
            className="bg-white text-purple-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
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
