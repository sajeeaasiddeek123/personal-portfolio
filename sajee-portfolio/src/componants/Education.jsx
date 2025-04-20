import React, { useEffect } from 'react';
import { FaGraduationCap, FaUniversity, FaClock, FaCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Education data
  const educationData = [
    {
      id: 1,
      degree: "BSc. Health Promotion (Undergraduate)",
      institution: "Rajarata University of Sri Lanka",
      duration: "2020 - Present",
      description: "Focusing on public health, community health promotion, and health education. Key courses include Epidemiology, Health Communication, and Community Health Assessment."
    },
    {
      id: 2,
      degree: "Diploma in First Aid and Emergency Response",
      institution: "Red Cross Society",
      duration: "2019 - 2020",
      description: "Comprehensive training in emergency response, first aid techniques, and disaster management. Certified as a first aid instructor."
    },
    {
      id: 3,
      degree: "Certificate in Health Education",
      institution: "Ministry of Health",
      duration: "2018 - 2019",
      description: "Specialized training in health education methodologies, program planning, and evaluation techniques for community health initiatives."
    }
  ];

  return (
    <section 
      id="education"
      className="py-20 bg-gradient-to-b from-[#00454A]/10 to-[#DDDDDD]/10"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-[#00454A] text-center mb-16"
          data-aos="fade-up"
        >
          Education
        </h2>

        {/* Education Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Column - Timeline Line */}
          <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[#00454A] to-[#828181] rounded-full"></div>

          {/* Right Column - Education Entries */}
          <div className="w-full md:w-3/4 space-y-12">
            {educationData.map((education, index) => (
              <div 
                key={education.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Degree Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00454A]/10 flex items-center justify-center">
                    <FaGraduationCap className="text-2xl text-[#00454A] hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Degree Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#00454A] mb-1">{education.degree}</h3>
                    
                    <div className="flex items-center text-[#828181] mb-2">
                      <FaUniversity className="mr-2 text-[#00454A]" />
                      <span>{education.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-[#828181] mb-3">
                      <FaCalendarAlt className="mr-2 text-[#00454b]" />
                      <span>{education.duration}</span>
                    </div>
                    
                    <p className="text-gray-600">{education.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
