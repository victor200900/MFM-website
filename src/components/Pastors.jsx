import React from "react";
import { motion } from "framer-motion";
import pastor1 from "../assets/pastordkolukoya.jpg";

function Pastors() {
  const team = [
    {
      img: pastor1,
      name: "Dr. D.K. Olukoya",
      role: "General Overseer, MFM Worldwide",
      message:
        "A passionate teacher and spiritual father, equipping believers to live in divine authority and victory through prayer and holiness.",
    },
    {
      name: "Pastor (Mrs.) Grace Adeyemi",
      role: "Co-Pastor / Women’s Leader",
      message:
        "A vessel of grace leading women to rise in faith, prayer, and purpose through godly mentorship and a heart for service.",
    },
    {
      name: "Pastor Michael Olamide",
      role: "Youth Pastor",
      message:
        "Dedicated to raising a generation of believers filled with passion, purity, and prayer — set apart for kingdom impact.",
    },
  ];

  return (
    <section
      id="pastors"
      className="py-24 md:py-32 bg-gradient-to-b from-purple-100 via-pink-50 to-purple-100 text-gray-900 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-800 font-[Playfair_Display]">
            Meet Our Pastors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Spirit-filled leaders devoted to prayer, purpose, and people —
            nurturing lives and guiding believers closer to God’s presence.
          </p>
        </motion.div>

        {/* Pastor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {team.map((pastor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                {pastor.img ? (
                  <img
                    src={pastor.img}
                    alt={pastor.name}
                    className="w-full h-72 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-72 sm:h-80 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center text-purple-700 font-bold text-4xl">
                    {pastor.name[0]}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-purple-800 font-[Playfair_Display] mb-2">
                    {pastor.name}
                  </h3>
                  <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-4">
                    {pastor.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {pastor.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pastors;
