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
      className="py-28 bg-gradient-to-b from-purple-100 via-white to-purple-50 text-gray-900 font-[Poppins]"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-purple-800 font-[Playfair_Display]">
            Meet Our Pastors
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Spirit-filled leaders devoted to prayer, purpose, and people —
            nurturing lives and guiding believers closer to God’s presence.
          </p>
        </motion.div>

        {/* Pastor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((pastor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative">
                {pastor.img ? (
                  <img
                    src={pastor.img}
                    alt={pastor.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-80 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center text-purple-700 font-bold text-3xl">
                    {pastor.name[0]}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-4">
                <h3 className="text-2xl font-bold text-purple-800 font-[Playfair_Display]">
                  {pastor.name}
                </h3>
                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide">
                  {pastor.role}
                </p>
                <p className="text-gray-700 leading-relaxed">{pastor.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pastors;
