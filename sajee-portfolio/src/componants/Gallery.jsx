import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaShare, FaDownload, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';


const Gallery = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gallery data
  const galleryData = [
    {
      id: 1,
      title: "Health Promotion Workshop",
      image: img1,
      description: "Conducting a health promotion workshop in a rural community."
    },
    {
      id: 2,
      title: "First Aid Training",
      image: img2,
      description: "Providing first aid training to community members."
    },
    {
      id: 3,
      title: "Women's Health Program",
      image: img3,
      description: "Leading a women's health awareness program."
    },
    {
      id: 4,
      title: "Community Health Assessment",
      image:img4,
      description: "Conducting a community health assessment in rural areas."
    },
    {
      id: 5,
      title: "Child Care Initiative",
      image: img5,
      description: "Working with children in a health education program."
    },
    {
      id: 6,
      title: "Emergency Response Training",
      image: img6,
      description: "Training community members in emergency response."
    },
    {
      id: 7,
      title: "Health Education Materials",
      image: img7,
      description: "Developing health education materials for communities."
    },
    {
      id: 8,
      title: "Public Health Campaign",
      image: img8,
      description: "Leading a public health awareness campaign."
    }
  ];

  // Handle image click to open modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle navigation in modal
  const handlePrevImage = () => {
    const currentIndex = galleryData.findIndex(item => item.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1;
    setSelectedImage(galleryData[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = galleryData.findIndex(item => item.id === selectedImage.id);
    const nextIndex = currentIndex === galleryData.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryData[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        {/* Section Title */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-[#00454A] text-center mb-16"
          data-aos="fade-up"
        >
          Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(item)}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 blur-sm"
                  loading="lazy"
                />
                
                {/* Overlay with Icons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(item);
                    }}
                    aria-label="View image"
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Share functionality would go here
                    }}
                    aria-label="Share image"
                  >
                    <FaShare />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Download functionality would go here
                    }}
                    aria-label="Download image"
                  >
                    <FaDownload />
                  </button>
                </div>
              </div>
              
              {/* Image Title */}
              <div className="p-3 bg-white">
                <h3 className="text-[#00454A] font-medium text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4 bg-white rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              
              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
              
              {/* Image */}
              <div className="relative h-96 md:h-[500px]">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Image Info */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-[#00454A] mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
