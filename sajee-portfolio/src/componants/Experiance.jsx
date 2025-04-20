import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaHandHoldingMedical } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Experience data
  const experienceData = [
    {
      id: 1,
      title: "Field Practical Experience – Health Promotion",
      organization: "Rajarata University of Sri Lanka",
      location: "Anuradhapura, Sri Lanka",
      duration: "03/2023 – Present",
      icon: <FaBriefcase className="text-2xl text-[#00454A]" />,
      summary: "Gaining hands-on experience in community health promotion initiatives and public health programs.",
      responsibilities: [
        "Conducting health awareness campaigns in rural communities",
        "Assisting in data collection and analysis for health assessments",
        "Developing educational materials for health promotion",
        "Participating in community health workshops and seminars"
      ]
    },
    {
      id: 2,
      title: "Volunteer – First Aid Program",
      organization: "St. John's Ambulance First Aid",
      location: "Anuradhapura, Sri Lanka",
      duration: "11/2023",
      icon: <FaHandHoldingMedical className="text-2xl text-[#00454A]" />,
      summary: "Providing first aid support at community events and emergency situations.",
      responsibilities: [
        "Responding to medical emergencies at public events",
        "Providing first aid training to community members",
        "Assisting in emergency response coordination",
        "Maintaining first aid supplies and equipment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        {/* Section Title */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-[#00454A] text-center mb-16"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00454A]/10 flex items-center justify-center">
                  {experience.icon}
                </div>
                <div>
                  <h3 className="text-[#00454A] font-semibold text-lg md:text-xl mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-[#828181] text-sm md:text-base mb-2">
                    {experience.organization}
                  </p>
                </div>
              </div>

              {/* Location and Duration */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-[#828181] text-sm">
                  <FaMapMarkerAlt className="mr-2 text-[#00454A] hover:text-[#00454A] transform hover:scale-110 transition-all duration-300" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center text-[#828181] text-sm">
                  <FaClock className="mr-2 text-[#00454A] hover:text-[#00454A] transform hover:scale-110 transition-all duration-300" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-[#383030] text-sm md:text-base leading-relaxed mb-4">
                {experience.summary}
              </p>

              {/* Responsibilities */}
              <div>
                <h4 className="text-[#00454A] font-medium mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-[#828181] text-sm md:text-base space-y-1">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
