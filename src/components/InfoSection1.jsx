import React from "react";
// import corporateImg from "../assets/imgs/CorporateReality.jpg";
import corporate from "../assets/imgs/Corporate-reality.jpg";

const InfoSection1 = () => {




  return (
    <>
      <section className="w-full h-[370px] md:h-[300px] lg:h-[600px]  bg-[#d6dfe6]  relative">
      <div className="absolute top-1 lg:top-[10px] text-base sm:text-xl md:text-2xl lg:text-3xl left-1/2 -translate-x-1/2 flex justify-center items-center flex-col gap-1 lg:gap-2 font-extrabold text-center font-sans">
      <span >GET YOURSELF TO  </span>
          <span>CORPORATE REALITY</span>
        </div>

<div className="w-full h-full flex items-center justify-center">

        <img
          src={corporate}
          className="w-full h-full  object-contain lg:object-cover"
          alt=""
        />
        </div>
        <div className="w-full  px-4 sm:px-8 lg:px-16 2xl:px-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center w-full max-w-[3840px] mx-auto px-4">
        <div className="corporate-info1">
            <span className=" block text-[0.8rem] sm:text-sm md:text-base">Opportunites</span>
            <span className=" block text-[0.8rem] sm:text-sm md:text-base">Every Month</span>
            <span className="block text-[1.8rem] sm:text-xl md:text-2xl text-red-500  font-extrabold">200+          
           
            </span>
            <div className="blinking-cursor">
            <span >|</span>
            </div>
            </div>
</div>

        <div className="corporate-info2">
            <span className="block text-[0.8rem] sm:text-sm md:text-base">Hiring</span>
            <span className="block text-[0.8rem] sm:text-sm md:text-base">Partners</span>
            <span className="block text-[1.8rem] sm:text-xl md:text-2xl text-red-500 font-extrabold">3214+</span>
        </div>
        <div className="corporate-info3">
            <span className="text-[0.8rem] sm:text-sm md:text-base">Drives</span>
            <span className="text-[0.8rem] sm:text-sm md:text-base">Every Day</span>
            <span className="text-[1.8rem] sm:text-xl md:text-2xl text-red-500 font-extrabold">10+</span>
        </div>
        <div className="corporate-info4">
            <span className="text-[0.8rem] sm:text-sm md:text-base">Avg Students placed</span>
            <span className="text-[0.8rem] sm:text-sm md:text-base">every month</span>
            <span className="text-[1.8rem] sm:text-xl md:text-2xl text-red-500 font-extrabold">300+</span>
        </div>
</div>

      </section>
    </>
  );
};

export default InfoSection1;
