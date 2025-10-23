import React from "react";
import teenageClass from '../assets/teenageclass.jpeg';

function YouthMinistry() {
  return (
    <section id="youth" className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">
            Empowering the Next Generation
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At MFM Sanctuary of Grace, our Youth Ministry is more than just a
            group — it's a movement. We are raising spiritually grounded, bold,
            and purpose-driven youth who stand strong in their faith, impact
            their world, and serve with passion.
          </p>

          <ul className="space-y-3 text-base text-gray-600 list-disc list-inside mb-6">
            <li>Weekly youth fellowships and Bible studies</li>
            <li>Mentorship and leadership development</li>
            <li>Community outreach and mission trips</li>
            <li>Interactive discussions on real-life issues</li>
          </ul>

          <a
            href="#contact"
            className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md transition font-medium"
          >
            Connect with Youth Leaders
          </a>
        </div>

        {/* Image or Illustration */}
        <div className="relative">
          <img
            src={teenageClass}
            alt="Youth Ministry"
            className="rounded-xl shadow-lg object-cover w-full h-[350px]"
          />

          {/* Optional background shape */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-100 rounded-full z-[-1]"></div>
        </div>
      </div>
    </section>
  );
}

export default YouthMinistry;
