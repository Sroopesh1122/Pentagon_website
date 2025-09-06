import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaPlay, FaSearch, FaCertificate, FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { eLearningGallery } from '../utils/Gallery';

const Elearning = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for touch handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const galleryImages = [
    ...eLearningGallery  
  ];

  // Check if device is mobile on component mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const navigateGallery = useCallback((direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  }, [galleryImages.length]);

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = useCallback(() => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToImage = (index) => {
    if (index === currentImageIndex) return;
    setCurrentImageIndex(index);
  };

  // Improved touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe to register
    
    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swipe left - next image
        navigateGallery('next');
      } else {
        // Swipe right - previous image
        navigateGallery('prev');
      }
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e) => {
    if (!showGallery) return;
    
    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowRight') {
      navigateGallery('next');
    } else if (e.key === 'ArrowLeft') {
      navigateGallery('prev');
    }
  }, [showGallery, navigateGallery, closeGallery]);

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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

      {/* Enhanced Gallery Modal with mobile-specific changes */}
      {showGallery && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeGallery()}
        >
          <div className="relative w-full h-full max-w-7xl max-h-screen flex flex-col">
            {/* Header with counter and close button */}
            <div className="flex justify-between items-center text-white mb-4 px-2 z-10">
              <div className="text-lg font-medium bg-black/30 px-3 py-1 rounded-lg">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
              <button
                onClick={closeGallery}
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close gallery"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            
            {/* Main image container with improved touch handlers */}
            <div 
              className="relative flex-1 flex items-center justify-center overflow-hidden"
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              <div className="w-full h-full flex items-center justify-center p-0">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className={`transition-opacity duration-300 ease-in-out ${
                    isMobile 
                      ? 'w-full h-full object-contain' 
                      : 'max-w-full max-h-[80vh] object-contain'
                  }`}
                  key={currentImageIndex}
                  style={{ 
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    KhtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    userSelect: 'none'
                  }}
                />
              </div>
              
              {/* Navigation buttons - positioned differently for mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery('prev');
                }}
                className={`absolute bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm ${
                  isMobile 
                    ? 'bottom-4 left-4 top-auto z-20' 
                    : 'left-4 top-1/2 -translate-y-1/2 z-20'
                }`}
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-2xl md:text-3xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery('next');
                }}
                className={`absolute bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm ${
                  isMobile 
                    ? 'bottom-4 right-4 top-auto z-20' 
                    : 'right-4 top-1/2 -translate-y-1/2 z-20'
                }`}
                aria-label="Next image"
              >
                <FaChevronRight className="text-2xl md:text-3xl" />
              </button>
            </div>
            
            {/* Thumbnail navigation - hidden on mobile for better UX */}
            {galleryImages.length > 1 && !isMobile && (
              <div className="mt-4 px-2 overflow-x-auto py-3">
                <div className="flex space-x-3 justify-center">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index ? 'border-red-500 ring-2 ring-red-300 ring-opacity-50' : 'border-transparent hover:border-white/70'} focus:outline-none focus:ring-2 focus:ring-white/50`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Mobile indicator dots */}
            {isMobile && galleryImages.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4 pb-4 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentImageIndex === index 
                        ? 'bg-red-500 scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Elearning;