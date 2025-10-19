import React from "react";
import { FaPrayingHands, FaBible, FaChurch } from "react-icons/fa";

function Belief() {
  return (
    <section
      id="our-beliefs"
      className="py-20 bg-gradient-to-b from-purple-50 to-white text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-purple-700 mb-4"
        >
          Our Core Beliefs
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        >
          At <span className="font-semibold">MFM Sanctuary of Grace</span>, our
          foundation is built on prayer, holiness, and total dependence on God’s
          power. Everything we do flows from the Word and Spirit of God.
        </p>

        {/* Belief Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Card 1 */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <FaPrayingHands className="text-purple-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              The Power of Prayer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe prayer is a divine weapon for victory and
              transformation. Through prayer, we break barriers and experience
              supernatural breakthroughs.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <FaBible className="text-purple-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              The Word of God
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The Bible is our foundation and guide. Every teaching and decision
              in our ministry aligns with the unchanging truth of God’s Word.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <FaChurch className="text-purple-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Holiness & Fellowship
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We strive for purity and unity among believers. Through worship
              and love, we grow together as one family in Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Belief;
