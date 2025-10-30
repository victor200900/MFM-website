import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutusimg.webp"; // Replace with your image path
import missionImg from "../assets/ourmission.jpg"; // Replace with your image path

function About() {
  return (
    <section className="relative bg-white text-gray-900 overflow-hidden">
      {/* ABOUT SECTION */}
      <div
        id="about"
        className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 py-24 relative z-10"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <div className="relative group">
            <img
              src={aboutImg}
              alt="About MFM"
              className="rounded-2xl w-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Mountain of Fire
            </span>{" "}
            and Miracles Ministries
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A place where the <strong>supernatural becomes natural</strong>, and
            lives are refined by the consuming fire of the Holy Spirit. MFM is
            not just a church — it’s a movement, a prayer fortress, and a divine
            forge for raising warriors of light.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Rooted in holiness, prayer, and deliverance, we exist to build
            believers who walk in power and purity — people who carry the fire
            of revival and the authority to break generational chains.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#mission"
            className="inline-block mt-4 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
          >
            Our Mission
          </motion.a>
        </motion.div>
      </div>

      {/* MISSION SECTION */}
      <div
        id="mission"
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 px-6 py-24 relative z-10"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To promote spiritual growth through holiness and fire-powered
            prayers. MFM’s mission is to deliver men and women from bondage,
            restore broken lives, and equip believers to fulfill their divine
            purpose.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are committed to raising end-time warriors, prayer champions, and
            fearless ambassadors of Christ who will conquer darkness with the
            light of God’s word and power.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Every message, every prayer, and every service is designed to
            prepare souls for Heaven and manifest God’s glory on Earth.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block mt-4 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-700 hover:to-pink-600 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
          >
            Join the Fire Movement
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1"
        >
          <div className="relative group">
            <img
              src={missionImg}
              alt="Our Mission"
              className="rounded-2xl w-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;