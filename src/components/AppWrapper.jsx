import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import FollowCursor from "./FollowCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

const AppWrapper = () => {
  useEffect(() => {
    const timeline1 = gsap.timeline();
    const timeline2 = gsap.timeline();


  // timeline1.fromTo(".code-orbit",
  //   { scale: 2 },
  //   { scale: 1, duration: 0.5 }
  // )
  // .fromTo(".code-inner-orbit",
  //   { opacity: 0 , scale:1.4 },
  //   { opacity: 1,scale:1, duration: 0.5 },
  //   "+=0" // starts immediately after previous
  // )
  // .fromTo(".code-outer-orbit",
  //   { opacity: 0 ,scale:1.4 },
  //   { opacity: 1,scale:1, duration: 0.5 },
  //   "+=0" // slight delay after inner-orbit
  // )
  // .fromTo(".code-inner-orbit .orbit-item",
  //   { opacity: 0 },
  //   {
  //     opacity: 1,
  //     duration: 0.3,
  //     stagger: 0.2
  //   }
  // )
  // .fromTo(".code-outer-orbit .orbit-item",
  //   { opacity: 0 },
  //   {
  //     opacity: 1,
  //     duration: 0.3,
  //     stagger: 0.2
  //   }
  // ).fromTo(".into-btn",{
  //   opacity:0,
  //   x:20
  // },{
  //   opacity:1,
  //   x:0
  // })


  }, []);

  return (
    <section className="w-full max-w-[1800px] mx-auto overflow-hidden">
      <FollowCursor />
      <Navbar />
      <Outlet />
    </section>
  );
};

export default AppWrapper;
