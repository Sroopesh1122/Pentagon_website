import React, { useEffect } from "react";
import learnImg from "../assets/imgs/PageLearn.png";
import person1 from "../assets/imgs/Layer4.png";
import person2 from "../assets/imgs/Layer5.png";
import person3 from "../assets/imgs/Layer6.png";
import person4 from "../assets/imgs/Layer7.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import appleIcon from "../assets/imgs/mac-os.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    const baseAnimation = {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      scale: .8,
      duration: 20,
      ease: "power2.out",
    };

    gsap.fromTo(
      ".footer-person1",
      { scale: 1 },
      { ...baseAnimation, opacity: 1 }
    ),
      gsap.fromTo(
        ".footer-person2",
        { scale: 1 },
        { ...baseAnimation, opacity: 1 }
      ),
      gsap.fromTo(
        ".footer-person3",
        { scale: 1 },
        { ...baseAnimation, opacity: 1 }
      ),
      gsap.fromTo(
        ".footer-person4",
        { scale: 1 },
        { ...baseAnimation, opacity: 1 }
      ),
      gsap.fromTo(
        ".text-from-anywhere",
        {
          letterSpacing: "15px"
        },
        {
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 40%",   
            scrub: 2,    
            toggleActions: "play none none none"
          },
          letterSpacing: "45px",
          duration:20,
          ease: "power3.out" 
        }
      );

  }, []);
 
  return (
    <>
      <section className="w-full max-w-[1800px] mx-auto  footer-section md:mt-[100px] ">
        <div className="w-full   relative h-[280px] md:h-[500px] lg:h-[600px] xl:h-[800px] ">
          <img src={learnImg} className="w-full h-full object-cover" alt="Background" />
          <img src={person1} alt="Person 1" className="footer-person1" />
          <img src={person2} alt="Person 2" className="footer-person2" />
          <img src={person3} alt="Person 3" className="footer-person3" />
          <img src={person4} alt="Person 4" className="footer-person4" />
          <div className="text-from-anywhere">FROM ANYWHERE</div>
        </div>

        <div className="w-full z-[4]  bg-[#1e1f21] absolute translate-y-[-60px] md:translate-y-[-100px] lg:translate-y-[-120px] xl:translate-y-[-180px] h-[200px]">
          <div className="w-full">
            <h3 className="text-center text-white text-[1.2rem]">
              DOWNLOAD APP
            </h3>

            <div className="w-full flex justify-center items-center gap-2 mt-[10px]">
              <button className="px-3 py-1 border border-white hover:bg-black/50 cursor-pointer border-dashed rounded-xl flex justify-center items-center text-white gap-1">
                <img
                  src={appleIcon}
                  className="w-[30px] h-[30px]"
                  alt="App Store"
                />
                App Store
              </button>

              <button className="px-3 py-1 border border-white hover:bg-black/50 cursor-pointer border-dashed rounded-xl flex justify-center items-center text-white gap-1">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/017/395/379/non_2x/google-play-store-mobile-apps-logo-free-png.png"
                  className="w-[30px] h-[30px]"
                  alt="Google Play"
                />
                Google Play
              </button>
            </div>
          </div>
        </div>  
      </section>

    </>
  );
};

export default Footer;
