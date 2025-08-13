import React, { useState } from 'react';
import { FaPlay, FaSearch, FaCertificate, FaArrowRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { eLearningGallery } from '../utils/Gallery';

const Elearning = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery images
  const galleryImages = [
   ...eLearningGallery  
  ];

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  };

  const navigateGallery = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="relative mt-32">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Career With Our <span className="text-red-500">E-Learning</span> Platform
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access world-class courses from industry experts anytime, anywhere
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Explore Programs <FaArrowRight />
            </button> */}
            <button 
              onClick={() => openGallery()}
              className="bg-white cursor-pointer text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              View Gallery <FiExternalLink />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Why Choose <span className="text-red-500">Our Platform</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPlay className="text-4xl text-red-500" />,
                title: "500+ Hours Content",
                description: "Comprehensive learning materials with video lectures"
              },
              {
                icon: <FaSearch className="text-4xl text-red-500" />,
                title: "Practical Projects",
                description: "Hands-on experience with real-world applications"
              },
              {
                icon: <FaCertificate className="text-4xl text-red-500" />,
                title: "Industry Certifications",
                description: "Get certified by top tech companies"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute cursor-pointer top-4 right-4 text-white text-4xl z-10 hover:text-red-500 transition-colors"
          >
            &times;
          </button>
          
          <div className="relative max-w-4xl w-full">
            <img
              src={galleryImages[currentImageIndex]}
              alt="Gallery"
              className="w-full max-h-[80vh] object-contain"
            />
            
            <button
              onClick={() => navigateGallery('prev')}
              className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
            >
              &larr;
            </button>
            <button
              onClick={() => navigateGallery('next')}
              className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
            >
              &rarr;
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 cursor-pointer rounded-full ${currentImageIndex === index ? 'bg-red-500' : 'bg-gray-500'} hover:bg-red-500 transition-colors`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Elearning;