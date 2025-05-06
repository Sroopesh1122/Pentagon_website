import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pinn = () => {
  const imagesRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Reset ScrollTrigger in case of hot reload
    ScrollTrigger.killAll();

    // Set all images hidden initially
    gsap.set(imagesRef.current, { autoAlpha: 0, position: "absolute" });

    // Show the first image initially
    gsap.set(imagesRef.current[0], { autoAlpha: 1 });

    sectionsRef.current.forEach((section, idx) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => showImage(idx),
        onEnterBack: () => showImage(idx),
      });
    });

    function showImage(idx) {
      gsap.to(imagesRef.current, { autoAlpha: 0, duration: 0.3 });
      gsap.to(imagesRef.current[idx], { autoAlpha: 1, duration: 0.5 });
    }
  }, []);

  return (
    <section className="w-full h-[100vh] overflow-auto flex relative">
      {/* Left Scrolling Section */}
      <section className="w-[70%]">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="w-full h-[100vh] flex justify-center items-center text-4xl"
          >
            Section {idx}
          </div>
        ))}
      </section>

      {/* Right Sticky Images */}
      <section className="w-[30%] h-[100vh] sticky top-0 flex justify-center items-center">
        <div className="w-[300px] h-[300px] bg-red-500 relative overflow-hidden">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <span
              key={idx}
              ref={(el) => (imagesRef.current[idx] = el)}
              className="absolute w-full h-full flex justify-center items-center bg-green-500 text-white text-2xl"
            >
              Img {idx}
            </span>
          ))}
        </div>
      </section>
      
    </section>
  );
};

export default Pinn;
