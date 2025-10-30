import React from "react";
import teenageClass from "../assets/teenageclass.jpeg";
import { motion } from "framer-motion";

function YouthMinistry() {
  return (
    <section
      id="youth"
      className="relative rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white py-24 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,85,0.2),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 ">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-pink-400 font-[Playfair_Display]">
            Empowering the Next Generation
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            The <span className="text-pink-400 font-semibold">Youth Ministry</span> of{" "}
            <span className="font-semibold text-white">MFM Sanctuary of Grace</span>{" "}
            is a vibrant family of young believers on fire for God. We build a generation
            that’s prayerful, confident, and purpose-driven — ready to conquer spiritual and real-world challenges.
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-inside mb-8">
            <li>🔥 Weekly Youth Fellowship & Bible Studies</li>
            <li>💡 Mentorship & Leadership Training</li>
            <li>🌍 Evangelism & Community Impact</li>
            <li>🗣 Discussions on Faith, Purpose & Real-life Issues</li>
          </ul>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            Connect with Youth Leaders
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative group">
            <img
              src={teenageClass}
              alt="Youth Ministry"
              className="rounded-2xl shadow-2xl object-cover w-full h-[380px] border-4 border-pink-500/40 group-hover:border-pink-400 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default YouthMinistry;
