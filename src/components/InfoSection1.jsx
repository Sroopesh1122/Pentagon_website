import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import corporateImg from "../assets/imgs/Corporate-reality.jpg";
import { AnimatePresence ,motion } from "motion/react";
import VedioPlayer from "./VedioPlayer";
import { AiOutlineClose } from "react-icons/ai";
import spaceWindow from "../assets/vedio/SPACE WINDOW.mp4"

const InfoSection1 = () => {


  const [openPromo ,setPromoOpen] = useState(false);



  const handlePromoClose=()=>{
    setPromoOpen(false)
  }


    useEffect(() => {
      if (openPromo) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [openPromo]);


  return (
    <>
      <section className="w-full mt-[40px] h-[300px] md:h-[400px] lg:h-[565px] bg-[#D5DEE3] relative">
        <div className="mx-auto w-full h-full max-w-[1440px] relative">
          <div className="absolute top-1 lg:top-[10px] max-sm:text-[0.8rem] md:text-3xl left-[50%] -translate-x-[50%] flex flex-col justify-center items-center font-extrabold lg:gap-2 ">
            <span>GET YOURSELF TO</span>
            <span>CORPORATE REALITY</span>
          </div>
          <img src={corporateImg} className="w-full h-full object-cover mx-auto max-w-[1440px]"alt=""/>
          <div className="corporate-info1  max-sm:top-[30%] max-sm:left-[2%]">
            {/* corporate-info1 */}
            <span className="block  ">Opportunites</span>
            <span className="block  ">Every Month</span>
            <span className="  text-red-500  font-extrabold">200+</span>
          </div>
          <div
            className="corporate-info2 
                        max-sm:top-[22%] max-sm:left-[14%]
                        "
          >
            {/* corporate-info2 */}
            <span className="block ">Hiring</span>
            <span className="block  ">Partners</span>
            <span className="  text-red-500 font-extrabold">3214+</span>
          </div>
          <div className="corporate-info3 max-sm: top-[50%] max-sm:left-[2%]">
            {/* corporate-info3 */}
            <span className="block ">Drives</span>
            <span className="block">Every Day</span>
            <span className="  text-red-500 font-extrabold">10+</span>
          </div>
          <div
            className="corporate-info4
                        max-sm:top-[42%] max-sm:left-[45%]
                        "
          >
            {/* corporate-info4 */}
            <span className="block  ">Avg Students placed</span>
            <span className="block ">every month</span>
            <span className=" text-red-500 font-extrabold">300+</span>
          </div>
          <div
            className="blink-cursor
                        max-sm:top-[65%] max-sm:left-[6%] sm:h-2
                        sm:top-[65%] sm:left-[11%] h-3
                        md:top-[65%] md:left-[11%] md:h-5
                        xl:top-[65%] xl:left-[14%]
                        "
          ></div>
          <div className="corporate-window cursor-pointer " onClick={()=>setPromoOpen(true)}>
            
          <FaPlay  className="text-red-500 w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5  hover:scale-120 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"/>
            <div className="corporate-window-content window-pulse">
              <span style={{ "--i": 1 }}></span>
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
                   <span className="absolute top-2 right-2 z-[10] cursor-pointer text-white" onClick={handlePromoClose}><AiOutlineClose/></span>
                  <VedioPlayer url={spaceWindow}/>
                </motion.section>
              )}
            </AnimatePresence>
    </>
  );
};

export default InfoSection1;
