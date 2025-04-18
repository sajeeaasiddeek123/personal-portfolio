import React, { useEffect } from 'react';
import { 
  FaLanguage, FaBaby, FaHeartbeat, FaFirstAid, FaUsers, 
  FaUserTie, FaBrain, FaClock, FaPuzzlePiece, FaFileWord, 
  FaFileExcel, FaLaptop, FaSearch, FaComments
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Skills data organized by category
  const skillsData = [
    {
      id: 1,
      category: "Languages",
      icon: <FaLanguage className="text-3xl text-[#00454A]" />,
      skills: [
        { name: "English", icon: <FaComments className="text-xl text-[#00454A]" /> },
        { name: "Tamil", icon: <FaComments className="text-xl text-[#00454A]" /> },
        { name: "Sinhala", icon: <FaComments className="text-xl text-[#00454A]" /> },
        { name: "Good Communication Skills", icon: <FaComments className="text-xl text-[#00454A]" /> }
      ]
    },
    {
      id: 2,
      category: "Health-related Skills",
      icon: <FaHeartbeat className="text-3xl text-[#00454A]" />,
      skills: [
        { name: "Child Care", icon: <FaBaby className="text-xl text-[#00454A]" /> },
        { name: "Women's Health", icon: <FaHeartbeat className="text-xl text-[#00454A]" /> },
        { name: "First Aid", icon: <FaFirstAid className="text-xl text-[#00454A]" /> },
        { name: "Community Health Education", icon: <FaUsers className="text-xl text-[#00454A]" /> }
      ]
    },
    {
      id: 3,
      category: "Professional Skills",
      icon: <FaUserTie className="text-3xl text-[#00454A]" />,
      skills: [
        { name: "Adaptability", icon: <FaBrain className="text-xl text-[#00454A]" /> },
        { name: "Teamwork & Collaboration", icon: <FaUsers className="text-xl text-[#00454A]" /> },
        { name: "Leadership", icon: <FaUserTie className="text-xl text-[#00454A]" /> },
        { name: "Critical Thinking", icon: <FaBrain className="text-xl text-[#00454A]" /> },
        { name: "Time Management", icon: <FaClock className="text-xl text-[#00454A]" /> },
        { name: "Problem Solving", icon: <FaPuzzlePiece className="text-xl text-[#00454A]" /> }
      ]
    },
    {
      id: 4,
      category: "Technical Skills",
      icon: <FaLaptop className="text-3xl text-[#00454A]" />,
      skills: [
        { name: "Microsoft Word", icon: <FaFileWord className="text-xl text-[#00454A]" /> },
        { name: "Microsoft Excel", icon: <FaFileExcel className="text-xl text-[#00454A]" /> },
        { name: "Basic Computer Literacy", icon: <FaLaptop className="text-xl text-[#00454A]" /> },
        { name: "Online Research", icon: <FaSearch className="text-xl text-[#00454A]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        {/* Section Title */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-[#00454A] text-center mb-16"
          data-aos="fade-up"
        >
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-[#00454A] to-[#00454A]/80 p-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#00454A]/5 transition-colors duration-300"
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + idx * 50}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#00454A]/10 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-[#DDDDDD] font-medium">{skill.name}</span>
                    </li>
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

export default Skills;
