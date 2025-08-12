import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import Vijaynagar from "../images/Vijaynagaroffice.png";
import Btm from "../images/BTMOffice.png";
import { btmGallery, vijaynagarGallery } from '../utils/Gallery';

const DevelopmentCenters = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0); // ✅ track selected image

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

  const openGallery = (center) => {
    setSelectedCenter(center);
    setSelectedImgIndex(0); // default to first image
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className='mx-1 text-red-500'>Development Centers</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Gallery Modal */}
      {showGallery && selectedCenter && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 cursor-pointer z-10 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
            >
              <FaTimes className="h-6 w-6" />
            </button>

            <div className="h-[70vh] overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={selectedCenter.gallery[selectedImgIndex]} // ✅ show selected image
                alt={selectedCenter.name}
              />
            </div>

            <div className="p-4 bg-gray-100">
              <h3 className="text-xl font-bold text-gray-900">{selectedCenter.name} Gallery</h3>
              <div className="flex space-x-2 mt-2 overflow-x-auto py-2">
                {selectedCenter.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedCenter.name} ${index + 1}`}
                    className={`h-20 w-20 object-cover rounded cursor-pointer hover:opacity-80 ${
                      index === selectedImgIndex ? 'ring-2 ring-red-500' : ''
                    }`}
                    onClick={() => setSelectedImgIndex(index)} // ✅ just change index
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevelopmentCenters;
