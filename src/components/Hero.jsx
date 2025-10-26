import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen w-full text-white flex items-center justify-center text-center font-[Montserrat]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://billelliff.org/cdn/shop/articles/Praying_group.jpg?v=1631884312')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          MFM
        </h1>

        <div className="inline-block bg-purple-300 text-purple-900 text-base sm:text-lg font-semibold px-4 py-2 rounded-2xl mb-6">
          Sanctuary of Grace
        </div>

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
