import React from "react";
import { motion } from "framer-motion";

function Timetable() {
  const schedule = [
    { day: "Sunday", event: "Sunday Worship Service", time: "9:00 AM – 12:00 PM" },
    { day: "Monday", event: "Bible Study / Discipleship Class", time: "6:00 PM – 7:30 PM" },
    { day: "Wednesday", event: "Revival Service", time: "6:00 PM – 8:00 PM" },
    { day: "Friday", event: "Deliverance & Prayer Fire Night", time: "10:00 PM – 1:00 AM" },
    { day: "Saturday", event: "Evangelism & Outreach", time: "9:00 AM – 11:00 AM" },
  ];

  return (
    <section
      id="timetable"
      className="py-24 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-gray-100 font-[Poppins]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-[Playfair_Display] mb-4 text-white tracking-wide">
            Weekly Service Schedule
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Step into God’s presence all week long. Each service is a moment of encounter, renewal, and divine empowerment.
          </p>
        </motion.div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-2">{item.day}</h3>
              <p className="text-lg font-medium text-white mb-1">{item.event}</p>
              <p className="text-sm text-gray-300">{item.time}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-14"
        >
          📍 22 Abiodun Street, Shomolu, Lagos, Nigeria
        </motion.p>
      </div>
    </section>
  );
}

export default Timetable;
