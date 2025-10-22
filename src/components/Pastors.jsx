import React from "react";
import pastor1 from "../assets/pastordkolukoya.jpg";
// import pastor2 from "../assets/pastor2.jpg";
// import pastor3 from "../assets/pastor3.jpg";

function Pastors() {
  const team = [
    {
      img: pastor1,
      name: "Pastor Dk olukoya",
      role: "General overseer MFM",
      message:
        "A passionate teacher of the Word, guiding believers to walk in spiritual strength and victory.",
    },
    {
      
      name: "Pastor (Mrs.) Grace Adeyemi",
      role: "Co-Pastor / Women’s Leader",
      message:
        "A vessel of grace, leading women to rise in faith, prayer, and purpose through godly mentorship.",
    },
    {
    
      name: "Pastor Michael Olamide",
      role: "Youth Pastor",
      message:
        "Dedicated to raising a fire-filled generation passionate about prayer, purpose, and purity.",
    },
  ];

  return (
    <section id="pastors" className="py-24 bg-gradient-to-b from-purple-50 to-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            Meet Our Pastors
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Spiritual leaders with vision, prayer, and passion — committed to nurturing lives
            and leading souls closer to God.
          </p>
        </div>

        {/* Pastor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((pastor, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={pastor.img}
                  alt={pastor.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-bold text-purple-700">{pastor.name}</h3>
                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide">
                  {pastor.role}
                </p>
                <p className="text-gray-600 leading-relaxed">{pastor.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pastors;
