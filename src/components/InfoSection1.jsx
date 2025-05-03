import React from "react";

import corporateImg from "../assets/imgs/Corporate-reality.jpg";

const InfoSection1 = () => {




  return (
    <>
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

      </section>
    </>
  );
};

export default InfoSection1;
