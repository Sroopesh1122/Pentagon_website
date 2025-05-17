import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import FollowCursor from "./FollowCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageFooter from "./PageFooter";


gsap.registerPlugin(ScrollTrigger)

const AppWrapper = () => {
  useEffect(() => {
    
     gsap.fromTo(".code-orbit",{
      scale:0.5,
     },{
      scale:1,
      duration:.5
     })

     gsap.fromTo(".hero-info1",{
      opacity:0,
      y:50
     },{
      opacity:1,
      y:0,
      duration:.5
     })



  }, []);

  return (
    <section className="w-full max-w-[1800px] mx-auto overflow-hidden  font-Mansfield">
      <FollowCursor />
      <Navbar />
      <Outlet />
      <PageFooter/>
    </section>
  );
};

export default AppWrapper;
