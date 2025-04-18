import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Animated background circle */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00454A] to-[#DDDDDD] rounded-full opacity-20 animate-pulse"></div>
              
              {/* Profile image with animation */}
              <div className="relative z-10 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                  alt="Sajeeaa Siddeek" 
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00454A] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#DDDDDD] rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Details Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00454A] mb-4">
              Portfolio of Sajeeaa
            </h2>
            
            <p className="text-lg text-[#DDDDDD] mb-6 max-w-lg">
              Aspiring health promoter with hands-on experience in rural health initiatives and first aid.
            </p>
            
            {/* Animated typing text */}
            <div className="h-12 mb-8">
              <Typewriter
                words={[
                  'Health Promotion Undergraduate',
                  'Field Experience Volunteer',
                  'First Aid Contributor',
                  'Public Health Advocate'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                className="text-xl font-medium text-[#00454A]"
              />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-4">
              <a 
                href="#" 
                className="text-2xl text-[#00454A] hover:text-[#DDDDDD] transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="#" 
                className="text-2xl text-[#00454A] hover:text-[#DDDDDD] transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="#" 
                className="text-2xl text-[#00454A] hover:text-[#DDDDDD] transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
