import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import FollowCursor from "./FollowCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageFooter from "./PageFooter";

gsap.registerPlugin(ScrollTrigger);

const AppWrapper = () => {
  const location = useLocation();

  // Scroll animations on mount
  useEffect(() => {
    gsap.fromTo(".code-orbit", { scale: 0.5 }, { scale: 1, duration: 0.5 });
    gsap.fromTo(".hero-info1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  // Scroll to top on route change (body scroll)
  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
    },0 )
  }, [location.pathname]);

  return (
    <section className="w-full max-w-[1800px] mx-auto overflow-hidden font-Mansfield">
      <FollowCursor />
      <Navbar />
      <section>
        <Outlet />
      </section>
      <PageFooter />
    </section>
  );
};

export default AppWrapper;
