import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutusimg.webp";
import missionImg from "../assets/ourmission.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-purple-100 text-gray-900 font-[Poppins]"
    >
      {/* About Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold text-purple-800 leading-tight font-[Playfair_Display]">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At{" "}
            <span className="font-semibold text-purple-700">
              MFM Sanctuary of Grace
            </span>
            , faith isn’t just spoken — it’s lived. Through powerful prayers,
            anointed worship, and life-changing teachings, we connect hearts to
            the presence of God. We’re not just a church; we’re a family walking
            together in grace, growth, and victory.
          </p>
          <a href="#pastors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-8 py-3 bg-purple-700 text-white rounded-full shadow-md hover:bg-purple-800 transition duration-300"
            >
              Learn More
            </motion.button>
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About MFM Church"
            className="rounded-3xl shadow-2xl max-h-[520px] object-cover w-full lg:w-[95%] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 mt-28 px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold text-purple-800 leading-tight font-[Playfair_Display]">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to ignite spiritual revival through prayer, worship,
            and the Word of God. We’re raising a generation of believers who
            live in divine purpose, move in power, and shine the light of Christ
            in every sphere of life.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <span className="px-5 py-2 bg-purple-200 text-purple-800 rounded-full font-semibold text-sm shadow-sm">
              Faith
            </span>
            <span className="px-5 py-2 bg-pink-200 text-pink-800 rounded-full font-semibold text-sm shadow-sm">
              Growth
            </span>
            <span className="px-5 py-2 bg-indigo-200 text-indigo-800 rounded-full font-semibold text-sm shadow-sm">
              Purpose
            </span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={missionImg}
            alt="Our Mission"
            className="rounded-3xl shadow-2xl max-h-[520px] object-cover w-full lg:w-[95%] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
