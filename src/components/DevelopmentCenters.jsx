import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Vijaynagar from "../images/Vijaynagaroffice.png";
import Btm from "../images/BTMOffice.png";
import { btmGallery, vijaynagarGallery } from '../utils/Gallery';

const DevelopmentCenters = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for touch handling and performance
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const transitionTimer = useRef(null);

  // Check if device is mobile on component mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  const centers = [
    {
      id: 1,
      name: 'Vijaynagar',
      image: Vijaynagar,
      gallery: [Vijaynagar, ...vijaynagarGallery],
      email: 'info@pentagonspace.in',
      mobile: '+91 9901066669',
      address: '765, 8th Cross Rd, Govindaraja Nagar Ward, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040'
    },
    {
      id: 2,
      name: 'BTM Layout',
      image: Btm,
      gallery: [Btm, ...btmGallery],
      email: 'info@pentagonspace.in',
      mobile: '+91 82962 22234',
      address: 'Site No 24, Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076'
    }
  ];

  // Optimized navigation function without transition delay
  const navigateGallery = useCallback((direction) => {
    if (!selectedCenter) return;
    
    if (direction === 'prev') {
      setSelectedImgIndex(prev => (prev === 0 ? selectedCenter.gallery.length - 1 : prev - 1));
    } else {
      setSelectedImgIndex(prev => (prev === selectedCenter.gallery.length - 1 ? 0 : prev + 1));
    }
  }, [selectedCenter]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e) => {
    if (!showGallery || !selectedCenter) return;
    
    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowRight') {
      navigateGallery('next');
    } else if (e.key === 'ArrowLeft') {
      navigateGallery('prev');
    }
  }, [showGallery, selectedCenter, navigateGallery]);

  // Add keyboard event listener
  useEffect(() => {
    if (showGallery) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showGallery, handleKeyDown]);

  const openGallery = (center) => {
    setSelectedCenter(center);
    setSelectedImgIndex(0);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = useCallback(() => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToImage = (index) => {
    if (index === selectedImgIndex || !selectedCenter) return;
    setSelectedImgIndex(index);
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

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className='mx-1 text-red-500'>Development Centers</span>
          </h2>
        </div>

        {/* Modified Cards Container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl">
            {centers.map((center) => (
              <div key={center.id} className="bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="w-full h-full object-fill transform hover:scale-105 transition-transform duration-500"
                    src={center.image}
                    alt={center.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{center.name}</h3>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="flex-shrink-0 h-5 w-5 text-red-500 mt-1" />
                      <p className="ml-3 text-base text-gray-600">{center.address}</p>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="flex-shrink-0 h-5 w-5 text-red-500" />
                      <a href={`tel:${center.mobile}`} className="ml-3 text-base text-gray-600 hover:text-red-600 transition-colors">
                        {center.mobile}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="flex-shrink-0 h-5 w-5 text-red-500" />
                      <a href={`mailto:${center.email}`} className="ml-3 text-base text-gray-600 hover:text-red-600 transition-colors">
                        {center.email}
                      </a>
                    </div>
                  </div>

                  <div className='flex justify-end items-center'>
                    <button
                      onClick={() => openGallery(center)}
                      className="mt-4 cursor-pointer text-red-500 hover:text-red-600 transition-colors duration-300"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Modal with mobile-specific changes */}
      {showGallery && selectedCenter && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeGallery()}
        >
          <div className="relative w-full h-full max-w-7xl max-h-screen flex flex-col">
            {/* Header with counter and close button */}
            <div className="flex justify-between items-center text-white mb-4 px-2 z-10">
              <div className="text-lg font-medium bg-black/30 px-3 py-1 rounded-lg">
                {selectedImgIndex + 1} / {selectedCenter.gallery.length}
              </div>
              <button
                onClick={closeGallery}
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close gallery"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            
            {/* Main image container with improved touch handlers - FIXED MOBILE SIZE */}
            <div 
              className="relative flex-1 flex items-center justify-center overflow-hidden"
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              <div className="w-full h-full flex items-center justify-center p-0">
                <img
                  src={selectedCenter.gallery[selectedImgIndex]}
                  alt={`${selectedCenter.name} gallery image ${selectedImgIndex + 1}`}
                  className={`transition-opacity duration-300 ease-in-out ${
                    isMobile 
                      ? 'w-full h-full object-contain' 
                      : 'max-w-full max-h-[80vh] object-contain'
                  }`}
                  key={selectedImgIndex}
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
            {selectedCenter.gallery.length > 1 && !isMobile && (
              <div className="mt-4 px-2 overflow-x-auto py-3">
                <div className="flex space-x-3 justify-center">
                  {selectedCenter.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${selectedImgIndex === index ? 'border-red-500 ring-2 ring-red-300 ring-opacity-50' : 'border-transparent hover:border-white/70'} focus:outline-none focus:ring-2 focus:ring-white/50`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${selectedCenter.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Mobile indicator dots */}
            {isMobile && selectedCenter.gallery.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4 pb-4 z-10">
                {selectedCenter.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      selectedImgIndex === index 
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

export default DevelopmentCenters;