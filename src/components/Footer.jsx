import React, { useEffect } from "react";
import learnImg from "../assets/imgs/PageLearn.png";
import person1 from "../assets/imgs/Layer4.png";
import person2 from "../assets/imgs/Layer5.png";
import person3 from "../assets/imgs/Layer6.png";
import person4 from "../assets/imgs/Layer7.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import appleIcon from "../assets/imgs/mac-os.png"
import "./FooterStyles.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  useEffect(() => {
   
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

   
    const animations = [
      gsap.fromTo(".person1", { scale: 2, opacity: 1 }, { ...baseAnimation, opacity: 1 }),
      gsap.fromTo(".person2", { scale: 2, opacity: 1 }, { ...baseAnimation, opacity: 1 }),
      gsap.fromTo(".person3", { scale: 2, opacity: 1 }, { ...baseAnimation, opacity: 1 }),
      gsap.fromTo(".person4", { scale: 3, opacity: 1 }, { ...baseAnimation, opacity: 1 }),
      gsap.fromTo(".text-from-anywhere", {
        scale: 2,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 70%",
          toggleActions: "play none none none",
        },
        scale: 1,
        duration: 2,
        opacity: 1,
        delay: 1.2,
        ease: "power2.out",
      })
    ];

  
    return () => {
      animations.forEach(animation => animation.kill());
    };
  }, []);


  return (
    <>
      <section className="footer-section">
      <div className="footer-background">
        <img src={learnImg} className="background-image" alt="Background" />
      </div>

      <div className="people-container">
        <img src={person1} alt="Person 1" className="person person1" />
        <img src={person2} alt="Person 2" className="person person2" />
        <img src={person3} alt="Person 3" className="person person3" />
        <img src={person4} alt="Person 4" className="person person4" />
        <div className="text-from-anywhere">FROM ANYWHERE</div>
      </div>

      <div className="footer-bar">
        <div className="download-section">
          <h3 className="download-title">DOWNLOAD APP</h3>
          
          <div className="download-buttons">
            <button className="download-button">
              <img src={appleIcon} className="store-icon" alt="App Store" />
              App Store
            </button>
            
            <button className="download-button">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/017/395/379/non_2x/google-play-store-mobile-apps-logo-free-png.png" 
                className="store-icon" 
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