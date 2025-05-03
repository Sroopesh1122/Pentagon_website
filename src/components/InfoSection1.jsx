import React from "react";
<<<<<<< HEAD
import corporateImg from "../assets/imgs/Corporate-reality.jpg";
=======
// import corporateImg from "../assets/imgs/CorporateReality.jpg";
import corporate from "../assets/imgs/Corporate-reality.jpg";
>>>>>>> 7f3e90f5f355e4545748c814715e2c93e9af94a2

const InfoSection1 = () => {




  return (
    <>
<<<<<<< HEAD
      <section className="w-full h-[290px] md:h-[400px] lg:h-[565px] bg-[#D5DEE3] relative">
        <div className="absolute top-1 lg:top-[10px] max-sm:text-[0.8rem] md:text-[1.5rem] left-[50%] -translate-x-[50%] flex flex-col justify-center items-center font-extrabold lg:gap-2 ">
          <span>GET YOURSELF TO</span>
          <span>CORPORATE REALITY</span>
        </div>
        <img
          src={corporateImg}
          className="w-full h-full object-cover 
             mx-auto max-w-[1000px] 
             lg:mx-0 lg:ml-auto lg:object-cover lg:max-w-none"
          alt=""
        />

        <div className="corporate-info1
                        max-sm:top-[40%] max-sm:left-[2%]
                        ">
          {/* corporate-info1 */}
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] lg:text-base">Opportunites</span>
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] lg:text-base">Every Month</span>
          <span className=" max-sm:text-[0.8rem] text-[1.8rem] text-red-500  font-extrabold">200+</span>
        </div>
        <div className="corporate-info2 
                        max-sm:top-[22%] max-sm:left-[14%]
                        ">
          {/* corporate-info2 */}
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] sm:text-[0.8rem] lg:text-base">Hiring</span>
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] sm:text-[0.8rem] lg:text-base">Partners</span>
          <span className=" max-sm:text-[0.8rem] text-[1.8rem] text-red-500 font-extrabold">3214+</span>
        </div>
        <div className="corporate-info3
                        max-sm: top-[50%] max-sm:left-[2%]
                        ">
          {/* corporate-info3 */}
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] sm:text-[0.8rem] lg:text-base">Drives</span>
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] sm:text-[0.8rem] lg:text-base">Every Day</span>
          <span className=" max-sm:text-[0.8rem] text-[1.8rem] text-red-500 font-extrabold">10+</span>
        </div>
        <div className="corporate-info4
                        max-sm:top-[42%] max-sm:left-[45%]
                        ">
          {/* corporate-info4 */}
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] sm:text-[0.8rem] lg:text-base">Avg Students placed</span>
          <span className="block max-sm:text-[0.4rem] text-[0.5rem] sm:text-[0.8rem] lg:text-base">every month</span>
          <span className="max-sm:text-[0.8rem] text-[1.8rem] text-red-500 font-extrabold">300+</span>
        </div>
        <div className="blink-cursor
                        max-sm:top-[65%] max-sm:left-[6%] h-2
                        sm:top-[65%] sm:left-[11%] h-3
                        md:top-[65%] md:left-[11%] h-5
                        xl:top-[65%] xl:left-[14%]
                        "></div>
=======
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
>>>>>>> 7f3e90f5f355e4545748c814715e2c93e9af94a2

      </section>
    </>
  );
};

export default InfoSection1;
