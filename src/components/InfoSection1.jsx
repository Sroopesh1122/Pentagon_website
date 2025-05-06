import React from "react";

import corporateImg from "../assets/imgs/Corporate-reality.jpg";

const InfoSection1 = () => {
  return (
    <>
      <section className="w-full mt-[40px] h-[300px] md:h-[400px] lg:h-[565px] bg-[#D5DEE3] relative">
        <div className="mx-auto w-full h-full max-w-[1440px] relative">

        <div className="absolute top-1 lg:top-[10px] max-sm:text-[0.8rem] md:text-3xl left-[50%] -translate-x-[50%] flex flex-col justify-center items-center font-extrabold lg:gap-2 ">
          <span>GET YOURSELF TO</span>
          <span>CORPORATE REALITY</span>
        </div>
        <img
          src={corporateImg}
          className="w-full h-full object-cover mx-auto max-w-[1440px]"
          alt=""
        />
        <div
          className="corporate-info1  max-sm:top-[30%] max-sm:left-[2%]">
          {/* corporate-info1 */}
          <span className="block  ">
            Opportunites
          </span>
          <span className="block  ">
            Every Month
          </span>
          <span className="  text-red-500  font-extrabold">
            200+
          </span>
        </div>
        <div
          className="corporate-info2 
                        max-sm:top-[22%] max-sm:left-[14%]
                        "
        >
          {/* corporate-info2 */}
          <span className="block ">
            Hiring
          </span>
          <span className="block  ">
            Partners
          </span>
          <span className="  text-red-500 font-extrabold">
            3214+
          </span>
        </div>
        <div
          className="corporate-info3 max-sm: top-[50%] max-sm:left-[2%]"
        >
          {/* corporate-info3 */}
          <span className="block ">
            Drives
          </span>
          <span className="block">
            Every Day
          </span>
          <span className="  text-red-500 font-extrabold">
            10+
          </span>
        </div>
        <div
          className="corporate-info4
                        max-sm:top-[42%] max-sm:left-[45%]
                        "
        >
          {/* corporate-info4 */}
          <span className="block  ">
            Avg Students placed
          </span>
          <span className="block ">
            every month
          </span>
          <span className=" text-red-500 font-extrabold">
            300+
          </span>
        </div>
        <div
          className="blink-cursor
                        max-sm:top-[65%] max-sm:left-[6%] sm:h-2
                        sm:top-[65%] sm:left-[11%] h-3
                        md:top-[65%] md:left-[11%] md:h-5
                        xl:top-[65%] xl:left-[14%]
                        "
        ></div>
         <div className="corporate-window">
            <div className="corporate-window-content window-pulse">
            <span style={{'--i':1}}></span>
            </div>
         </div>

        </div>
         
      </section>
    </>
  );
};

export default InfoSection1;
