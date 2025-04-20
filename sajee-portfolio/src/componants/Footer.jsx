import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00454A] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Name and Profile Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Sajee Portfolio</h3>
            <p className="text-gray-300">
              A platform dedicated to showcasing my professional journey, skills, and achievements in the healthcare field.
            </p>
          </div>

          {/* 2. Explore (Navigation Links) Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="education" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  to="experience" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="skills" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="gallery" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 text-gray-300" />
                <span className="text-gray-300">info@sajeeportfolio.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="mt-1 text-gray-300" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-gray-300" />
                <span className="text-gray-300">123 Healthcare Avenue, Medical City, MC 12345</span>
              </li>
            </ul>
          </div>

          {/* 4. Social Media Icons Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1BKmYyJXLg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
          
              <a 
                href="https://www.instagram.com/sajeeaa_siddeek?igsh=M3NtemhnMzNpeXZt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/in/sajeeaa-siddeek-aa62b4211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
             
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Sajee Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
