import React, { useEffect } from "react";
import learnImg from "../assets/imgs/PageLearn.png";
import person1 from "../assets/imgs/Layer4.png";
import person2 from "../assets/imgs/Layer5.png";
import person3 from "../assets/imgs/Layer6.png";
import person4 from "../assets/imgs/Layer7.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import appleIcon from "../assets/imgs/mac-os.png"

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useEffect(()=>{

        const baseAnimation = {
            scrollTrigger: {
              trigger: ".footer-section",
              start: "top 70%",
              toggleActions: "play none none none",
            },
            scale: 1,
            duration: 2,
            ease: "power2.out"
          };
      
          gsap.fromTo(".person1", { scale: 2 , opacity:0 }, { ...baseAnimation , opacity:1 });
          gsap.fromTo(".person2", { scale: 2 , opacity:0 }, { ...baseAnimation , opacity:1 });
          gsap.fromTo(".person3", { scale: 2 , opacity:0 }, { ...baseAnimation , opacity:1 });
          gsap.fromTo(".person4", { scale: 3, opacity: 0 }, {
            ...baseAnimation,
            opacity: 1
          });

          gsap.fromTo(".text-from-anywhere",{
            scale:2,
            opacity:0
          },{
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 70%",
                toggleActions: "play none none none",
              },
              scale: 1,
              duration: 2,
              opacity:1,
              delay:1.2,
              ease: "power2.out",  
          })

    },[])


  return (
    <>
      <section className="w-full h-[350px] md:h-[500px] lg:h-[700px] relative footer-section ">
        <img src={learnImg} className="w-full h-full" alt="" />
        <img src={person1} alt="" className="person1" />
        <img src={person2} alt="" className="person2" />
        <img src={person3} alt="" className="person3" />
        <img src={person4} alt="" className="person4" />
        <span className="text-from-anywhere whitespace-nowrap">FROM ANYWHERE</span>
        
        <div className="w-full absolute bottom-0 left-0 h-[135px] bg-[#1e1f21]">
            <div className="w-full h-[135px] ">
               
               <div className="flex justify-center items-center w-full">

                 <span className="uppercase tracking-widest text-[1.2rem] font-semibold text-white">Download App</span>

               </div>

               <div className="flex justify-center items-center w-full gap-2 mt-[20px]">

                 
                 <button className="px-3 py-1 rounded-md border border-white border-dashed text-white flex justify-center items-center gap-1">
                    
                    <img src={appleIcon} className="w-[20px] h-[20px]" alt="" />

                    App Store</button>
                 
                 <button className="px-3 py-1 rounded-md border border-white border-dashed text-white flex justify-center items-center gap-1 ">
                   
                   <img className="w-[20px] h-[20px]" src="https://static.vecteezy.com/system/resources/previews/017/395/379/non_2x/google-play-store-mobile-apps-logo-free-png.png" alt="" />
                    
                    Google Play</button>

               </div>


            </div>
        </div>

      </section>

    </>
  );
};

export default Footer;
