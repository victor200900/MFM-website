import React from "react";
import aboutImg from "../assets/aboutusimg.webp";
import missionImg from "../assets/ourmission.jpg";

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-purple-50 text-gray-800">
      {/* About Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 ">
        {/* Text */}
        <div data-aos="fade-up" className="flex-1 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold text-purple-700">MFM Sanctuary of Grace</span>, 
            faith isn’t just spoken — it’s lived. Through powerful prayers, 
            anointed worship, and life-changing teachings, we connect hearts 
            to the presence of God. We’re not just a church; we’re a family of 
            believers walking together in grace, growth, and victory.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition duration-300 shadow-md hover:shadow-lg">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div data-aos="fade-left" className="flex-1 flex justify-center">
          <img
            src={aboutImg}
            alt="About MFM Church"
            className="rounded-3xl shadow-2xl max-h-[420px] object-cover w-full lg:w-[90%] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 mt-24 px-6">
        {/* Text */}
        <div data-aos="fade-up" className="flex-1 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to ignite spiritual revival through prayer, 
            worship, and the Word of God. We’re raising a generation of 
            believers who live in divine purpose, move in power, and shine 
            the light of Christ in every sphere of life.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold text-sm shadow-sm">
              Faith
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg font-semibold text-sm shadow-sm">
              Growth
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-semibold text-sm shadow-sm">
              Purpose
            </span>
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-right" className="flex-1 flex justify-center">
          <img
            src={missionImg}
            alt="Our Mission"
            className="rounded-3xl shadow-2xl max-h-[420px] object-cover w-full lg:w-[90%] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
