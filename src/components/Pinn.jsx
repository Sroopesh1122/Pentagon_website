import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SurahSir from "../assets/imgs/teamMembers/SurajSir.png"
import KarthikSir from "../assets/imgs/teamMembers/Karthik Sir.png"
import SharathSir from "../assets/imgs/teamMembers/Sharath sir.png"


const Pinn = () => {
 
  const TEAM_DETAILS=[
          {
              key:1,
              img:SurahSir,
              name:"Mr. Suraj Vijay Sheety",
              desc:"CEO & Managing Director",
              info:"As the CEO of Pentagon, he has beeen instrumental in diving digital transformation in learning, creating accessible, engaging, and AI-enhanced educational experiences of learners globally."
          },{
              key:2,
              img:SharathSir,
              name:"Mr Sharath Basavaraju",
              desc:"Head-Product & Engineering",
              info:"Over 9 years of experience specializing in Java Full Stack Development, with deep expertise across front-end and back-end technologies."
          },{
              key:3,
              img:KarthikSir,
              name:"Mr Karthik",
              desc:"Software Architect & Placement Executive",
              info:"Over 13 years of experience with strong expertise in Java Full Stack Developmwnt and a proven track record as a Placement Executive, bridging technology and talent."
          }
      ]



  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".box:not(:first-child)");
  
      gsap.set(boxes, { yPercent: 100 });
  
      const animation = gsap.to(boxes, {
        yPercent: -100,
        duration: 1,
        stagger: 1
      });
  
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
      });
    });
  
    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <>
      <section className="w-full flex justify-center items-center mt-[20px]">
         <h1 className="text-3xl font-semibold">Out Team Members</h1>
      </section>

      <div class="gallery">
        <div class="left">
          {
            TEAM_DETAILS.map((details,idx)=><div class="content">
            <div className="p-10">
              <h2 className="text-2xl font-semibold">{details.name}</h2>
              <h1 className="text-lg">{details.desc}</h1>
              <p className="text-[0.9rem] text-start w-full mt-[30px]">
                {details.info}
              </p>
            </div>
          </div>)
          }
          
        </div>

        <div class="right">
          <div class="box-container">
            {
              TEAM_DETAILS.map((details,idx)=><div class="box">
              <img
                src={details.img}
                alt=""
              />
            </div>)
            }
            
          </div>
        </div>
      </div>

    </>
  );
};

export default Pinn;
