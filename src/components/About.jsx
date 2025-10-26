import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutusimg.webp";
import missionImg from "../assets/ourmission.jpg";

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-purple-900 text-white font-sans">
      {/* ABOUT SECTION */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            About Us
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            At{" "}
            <span className="font-semibold text-white">
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
              className="mt-4 px-8 py-3 bg-white text-purple-900 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
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
            className="shadow-2xl max-h-[500px] object-cover w-full sm:w-[90%] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* MISSION SECTION */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 mt-24 px-6">
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
            className="shadow-2xl max-h-[500px] object-cover w-full sm:w-[90%] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            Our mission is to ignite spiritual revival through prayer, worship,
            and the Word of God. We’re raising a generation of believers who
            live in divine purpose, move in power, and shine the light of Christ
            in every sphere of life.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap justify-center lg:justify-start">
            {["Faith", "Growth", "Purpose"].map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-white text-purple-900 rounded-full font-semibold text-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
