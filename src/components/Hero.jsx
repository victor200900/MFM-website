import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.mubicdn.net/images/film/308967/cache-685514-1623407915/image-w1280.jpg')", // You can replace this with your own church image
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/60 to-black/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-6"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Welcome to <span className="text-purple-400">MFM Sanctuary of Grace</span>
        </h2>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 mb-8">
          Encounter God’s power through prayer, worship, and His Word.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
        >
          Join Us This Sunday
        </motion.button>
      </motion.div>

      {/* Subtle floating light effect */}
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full bottom-1/3 right-1/4 animate-pulse"></div>
    </section>
  );
}

export default Hero;
