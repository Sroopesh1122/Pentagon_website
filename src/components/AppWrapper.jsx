import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import FollowCursor from "./FollowCursor";
import { gsap } from "gsap";

const AppWrapper = () => {
  useEffect(() => {
    const timeline1 = gsap.timeline();
    const timeline2 = gsap.timeline();


  timeline1.fromTo(".code-orbit",
    { scale: 2 },
    { scale: 1, duration: 1 }
  )
  .fromTo(".code-inner-orbit",
    { opacity: 0 , scale:1.4 },
    { opacity: 1,scale:1, duration: 0.5 },
    "+=0" // starts immediately after previous
  )
  .fromTo(".code-inner-orbit .orbit-item",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      stagger: 0.4
    }
  )
  .fromTo(".code-outer-orbit",
    { opacity: 0 ,scale:1.4 },
    { opacity: 1,scale:1, duration: 0.5 },
    "+=0" // slight delay after inner-orbit
  )
  .fromTo(".code-outer-orbit .orbit-item",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      stagger: 0.4
    }
  ).fromTo(".into-btn",{
    opacity:0,
    x:20
  },{
    opacity:1,
    x:0
  })

  
  // timeline2.fromTo(".hero-info-1",{
  //   opacity:0,
  //   y:10
  // },{
  //   opacity:1,
  //   y:0,
  //   duration:1
  // }).fromTo(".moon-land",{
  //   opacity:0,
  //   y:10
  // },{
  //   opacity:1,
  //   y:0,
  //   duration:.5
  // }).fromTo(".pentagon-text",{
  //   opacity:0,
  //   scale:1
  // },{
  //   opacity:1,
  //   scale:1,
  // }).fromTo(".moon-astronout",{
  //   opacity:0,
  //   scale:1.5
  // },{
  //   opacity:1,
  //   scale:1,
  //   duration:0.5
  // })


  }, []);

  return (
    <section className="w-full max-w-[1800px] mx-auto overflow-hidden">
      <FollowCursor />
      <Navbar />
      <Outlet />
      <div className="w-full h-[20vh]"></div>
    </section>
  );
};

export default AppWrapper;
