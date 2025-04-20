import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaInstagram , FaLinkedin ,FaFacebook } from 'react-icons/fa';
import profileImg from '../assets/sajee.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Animated background circle */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00454A] to-[#828181] rounded-full opacity-20 animate-pulse"></div>

              {/* Profile image with animation */}
              <div className="relative z-10 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500 animate-float">
                <img
                  src={profileImg}
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
            Hello! I'm Sajeeaa Siddeek,
            </h2>

            <p className="text-lg text-[##828181] mb-6 max-w-lg font-bold text-gray-800">
              Aspiring health promoter with hands-on experience in rural health initiatives and first aid.
            </p>

            {/* Animated typing text */}
            <div className="h-12 mb-8 font-bold text-gray-800 text-lg">
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
            <div className="  bg-gray-300 flex space-x-6 mt-4 animate-pulse  gap-10">
              <a
                href="https://www.instagram.com/sajeeaa_siddeek?igsh=M3NtemhnMzNpeXZt"
                className=" text-2xl text-[#00454A] hover:text-[#DDDDDD] transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaInstagram  />
              </a>
              <a
                href="https://www.linkedin.com/in/sajeeaa-siddeek-aa62b4211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-2xl text-[#00454A] hover:text-[#DDDDDD] transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
             
              <a
                href="https://www.facebook.com/share/1BKmYyJXLg/"
                className="text-2xl text-[#00454A] hover:text-[#DDDDDD] transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <FaFacebook  />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
