import React from "react";
import { FaPrayingHands, FaBible, FaChurch } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

function Belief() {
  return (
    <section
      id="our-beliefs"
      className="py-24 md:py-32 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-[Playfair_Display]"
        >
          Our Core Beliefs
        </motion.h2>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          At <span className="font-semibold text-white">MFM Sanctuary of Grace</span>,
          our faith is anchored on <span className="text-pink-300">prayer, holiness,</span>{" "}
          and <span className="text-pink-300">the power of God’s Word.</span>  
          We are committed to living by the Spirit, walking in purity, and 
          advancing God’s kingdom through unshakable faith.
        </motion.p>

        {/* Belief Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Card 1 */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 p-10 flex flex-col items-center text-center border border-white/10 hover:border-pink-300/30"
          >
            <div className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 p-5 rounded-full mb-6 shadow-inner">
              <FaPrayingHands className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              The Power of Prayer
            </h3>
            <p className="text-gray-200 leading-relaxed">
              We believe prayer is the heartbeat of divine victory —  
              the weapon that shifts atmospheres, breaks barriers, and releases
              God’s supernatural power into every situation.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 p-10 flex flex-col items-center text-center border border-white/10 hover:border-pink-300/30"
          >
            <div className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 p-5 rounded-full mb-6 shadow-inner">
              <FaBible className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              The Word of God
            </h3>
            <p className="text-gray-200 leading-relaxed">
              The Bible is the unshakable foundation of our faith.
              Every teaching, every prayer, and every decision flows from
              the eternal wisdom of God’s Word.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 p-10 flex flex-col items-center text-center border border-white/10 hover:border-pink-300/30"
          >
            <div className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 p-5 rounded-full mb-6 shadow-inner">
              <FaChurch className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Holiness & Fellowship
            </h3>
            <p className="text-gray-200 leading-relaxed">
              We pursue holiness and unity as one family in Christ.
              Through love, worship, and fellowship, we build a community
              that reflects the glory and power of God.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Belief;
