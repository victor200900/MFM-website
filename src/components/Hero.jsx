import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.mubicdn.net/images/film/308967/cache-685514-1623407915/image-w1280.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl w-full text-center px-6 sm:px-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to <span className="text-purple-400">MFM Sanctuary of Grace</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10">
          Experience the power of God through prayer, worship, and His Word.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-md font-medium transition duration-300"
        >
          Join Us This Sunday
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
