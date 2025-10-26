import React from "react";

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
      className="py-20 bg-gradient-to-b from-purple-50 to-white text-gray-800 font-[Poppins]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 font-[Playfair_Display] mb-4">
            Weekly Service Schedule
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join any of our spirit-filled sessions throughout the week and
            encounter the power of God in prayer, worship, and the Word.
          </p>
        </div>

        {/* Timetable Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-purple-800 text-white text-left">
                <th className="py-4 px-6 text-lg font-semibold">Day</th>
                <th className="py-4 px-6 text-lg font-semibold">Service</th>
                <th className="py-4 px-6 text-lg font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-purple-50 transition"
                >
                  <td className="py-4 px-6 font-semibold text-purple-700">{item.day}</td>
                  <td className="py-4 px-6">{item.event}</td>
                  <td className="py-4 px-6 text-gray-700">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          📍 22 Abiodun Street, Shomolu, Lagos, Nigeria
        </p>
      </div>
    </section>
  );
}

export default Timetable;
