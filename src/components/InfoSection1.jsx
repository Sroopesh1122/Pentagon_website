import React from "react";
import corporateImg from "../assets/imgs/CorporateReality.jpg";

const InfoSection1 = () => {




  return (
    <>
      <section className="w-full h-[290px] md:h-[400px] lg:h-[600px] bg-[#d6dfe6] relative">
        <div className="absolute  top-1 lg:top-[10px] text-xl lg:text-3xl left-[50%] -translate-x-[50%] flex justify-center items-center flex-col lg:gap-2 font-extrabold">
          <span>GET YOURSELF TO</span>
          <span>CORPORATE REALITY</span>
        </div>

        <img
          src={corporateImg}
          className="w-full max-w-[1000px] mx-auto h-full"
          alt=""
        />
       
        <div className="corporate-info1">
            <span className="text-[0.8rem]">Opportunites</span>
            <span className="text-[0.8rem]">Every Month</span>
            <span className="text-[1.8rem] text-red-500  font-extrabold">200+</span>
        </div>
        <div className="corporate-info2">
            <span className="text-[0.8rem]">Hiring</span>
            <span className="text-[0.8rem]">Partners</span>
            <span className="text-[1.8rem] text-red-500 font-extrabold">3214+</span>
        </div>
        <div className="corporate-info3">
            <span className="text-[0.8rem]">Drives</span>
            <span className="text-[0.8rem]">Every Day</span>
            <span className="text-[1.8rem] text-red-500 font-extrabold">10+</span>
        </div>
        <div className="corporate-info4">
            <span className="text-[0.8rem]">Avg Students placed</span>
            <span className="text-[0.8rem]">every month</span>
            <span className="text-[1.8rem] text-red-500 font-extrabold">300+</span>
        </div>


      </section>
    </>
  );
};

export default InfoSection1;
