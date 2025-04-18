import React from 'react';
import { FaHeartbeat, FaFirstAid, FaUserTie, FaComments } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00454A] mb-4">
          Sajeeaa Siddeek
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#DDDDDD] mb-8 max-w-2xl">
          Health Promotion Undergraduate | Field Experience | First Aid Volunteer
        </p>

        {/* Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-3xl sm:text-4xl text-[#00454A] mb-2" />
            <span className="text-sm text-[#DDDDDD]">Public Health</span>
          </div>
          <div className="flex flex-col items-center">
            <FaFirstAid className="text-3xl sm:text-4xl text-[#00454A] mb-2" />
            <span className="text-sm text-[#DDDDDD]">First Aid</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUserTie className="text-3xl sm:text-4xl text-[#00454A] mb-2" />
            <span className="text-sm text-[#DDDDDD]">Leadership</span>
          </div>
          <div className="flex flex-col items-center">
            <FaComments className="text-3xl sm:text-4xl text-[#00454A] mb-2" />
            <span className="text-sm text-[#DDDDDD]">Communication</span>
          </div>
        </div>

        {/* Download CV Button */}
        <a 
          href="#" 
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00454A] to-[#DDDDDD] text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
