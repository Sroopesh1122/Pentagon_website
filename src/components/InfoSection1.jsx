import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import VedioPlayer from "./VedioPlayer";
import { AiOutlineClose } from "react-icons/ai";
import spaceWindow from "../assets/vedio/SPACE WINDOW.mp4";
import achievementBg from "../assets/imgs/teamMembers/OurAchievementPhoto.png";

const InfoSection1 = () => {
  const [openPromo, setPromoOpen] = useState(false);

  const handlePromoClose = () => {
    setPromoOpen(false);
  };

  useEffect(() => {
    if (openPromo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openPromo]);

  return (
    <>
      <section className="w-full mt-[40px] h-[300px] md:h-[400px] lg:h-[565px] relative">
        {/* Remove the container div and apply styles directly */}
        <div className="absolute inset-0 w-full h-full">
          {/* Background image with full width and no constraints */}
          <img 
            src={achievementBg} 
            className="w-full h-full object-cover absolute inset-0" 
            alt="Our Achievements"
            style={{ left: 0, right: 0 }}
          />
          
          {/* Content Container on Left Side */}
          <div className="absolute inset-0 flex items-center">
            <div className="ml-16 md:ml-24 lg:ml-32 xl:ml-40 text-white">
              
              {/* Title on Left Side with increased font size */}
              <div className="-mt-[50px] md:mt-0 md:mb-8">
                <div className="flex flex-col">
                  <span className="text-base md:text-2xl lg:text-4xl tracking-wider font-normal ml-12 md:ml-16 lg:ml-20">GET YOURSELF TO</span>
                  <span className="text-xl md:text-4xl lg:text-5xl tracking-wider font-extrabold">CORPORATE REALITY</span>
                </div>
              </div>
              
              {/* Stats Container - Only 3 items with increased spacing */}
              <div className="flex flex-wrap gap-16 md:gap-20 -mb-[180px] mt-3 md:mb-0 lg:gap-24 -ml-8 md:-ml-10 lg:-ml-12">
                {/* Opportunities */}
                <div className="text-left">
                  <div className="mb-1">
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Opportunites</span>
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Every Month</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-white font-extrabold text-[0.8rem] md:text-2xl lg:text-3xl leading-none border-2 border-white px-3 py-1">
                      200+
                    </span>
                  </div>
                </div>
                
                {/* Hiring Partners */}
                <div className="text-left">
                  <div className="mb-1">
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Hiring</span>
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Partners</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-white font-extrabold text-[0.8rem] md:text-2xl lg:text-3xl leading-none border-2 border-white px-3 py-1">
                      3214+
                    </span>
                  </div>
                </div>
                
                {/* Average Students */}
                <div className="text-left mt-4">
                  <div className="mb-1">
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Average Students</span>
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Placed Every Month</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-white font-extrabold text-[0.8rem] md:text-2xl lg:text-3xl leading-none border-2 border-white px-3 py-1">
                      300+
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Container for Drives stat and Play Button - Moved to right */}
              <div className="flex items-center mt-8 md:mt-10 gap-6 md:gap-8 ml-16 md:ml-24 lg:ml-32">
                {/* Drives Every Day stat */}
                <div className="text-left">
                  <div className="mb-1">
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Drives</span>
                    <span className="block text-[0.7rem] md:text-lg lg:text-xl uppercase tracking-wide">Every Day</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-white font-extrabold text-[0.8rem] md:text-2xl lg:text-3xl leading-none border-2 border-white px-3 py-1">
                      10+
                    </span>
                  </div>
                </div>
                
                {/* Play Button - Moved further right */}
                <div 
                  className="flex items-center cursor-pointer mt-8 ml-8 md:ml-12 lg:ml-16"
                  onClick={() => setPromoOpen(true)}
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-60"></div>
                    <div className="absolute inset-0 rounded-full border border-white"></div>
                    <FaPlay className="text-red-500 text-lg md:text-xl ml-1" />
                  </div>
                  <span className="text-white text-base md:text-lg uppercase tracking-wide font-medium">
                    Play Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AnimatePresence mode="wait">
        {openPromo && (
          <motion.section
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-0 left-0 bg-black w-full z-[999] h-[100vh] "
          >
            <span 
              className="absolute top-4 right-4 z-[1000] cursor-pointer text-white text-2xl bg-black/50 rounded-full p-1" 
              onClick={handlePromoClose}
            >
              <AiOutlineClose />
            </span>
            <VedioPlayer url={spaceWindow} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default InfoSection1;