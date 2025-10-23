import React from "react";
// import feedingImg from "../assets/feeding_program.jpg";
// import healthcareImg from "../assets/healthcare_outreach.jpg";
// import educationImg from "../assets/education_support.jpg";

const Outreach = () => {
  const outreachPrograms = [
    {
      title: "Feeding Program",
      description: "Help us provide meals to the less privileged and bring smiles to those in need.",
     
      link: "#donate",
      buttonText: "Get Involved",
    },
    {
      title: "Healthcare Outreach",
      description: "Join our team to provide medical aid and wellness services to underserved communities.",
     
      link: "#volunteer",
      buttonText: "Volunteer Now",
    },
    {
      title: "Education Support",
      description: "Empower children and adults with knowledge by joining our educational programs.",
     
      link: "#join",
      buttonText: "Participate",
    },
  ];

  return (
    <section id="outreach" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Join Our Outreach Programs</h2>
          <p className="text-lg text-gray-600">
            Be a part of spreading hope, faith, and miracles to communities in need.
          </p>
        </div>

        {/* Outreach Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {outreachPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 flex-1">{program.description}</p>
                <a 
                  href={program.link} 
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition"
                >
                  {program.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outreach;
