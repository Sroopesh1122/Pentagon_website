import React, { useEffect, useState } from "react";
import spaceHuman from "../assets/imgs/LAPTOP.png";
import { AnimatePresence, motion } from "motion/react";
import triangle from "../assets/imgs/triangle.jpg";
import moonfloor from "../assets/imgs/MOONFLOOR.png";
import astronut from "../assets/imgs/ASTRONUT_WITH_LAPTOP.png";
import javaImg from "../assets/imgs/java.png";
import mernImg from "../assets/imgs/MERN.png";
import pythonImg from "../assets/imgs/PYTHON.png";
import testingImg from "../assets/imgs/TESTING.png";
import corporateBuilding from "../assets/imgs/CORPORATE_BUILDING.png";
import spaceVedio from "../assets/vedio/spacevedio.mp4";
import VedioPlayer from "../components/VedioPlayer";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import InfoSection1 from "../components/InfoSection1";
import HiringPartners from "../components/HiringPartners";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import TeamMembers from "../components/TeamMembers";
import PageFooter from "../components/PageFooter";

const Home = () => {
  const TEXT = [
    { label: "CODE", path: "/code" },
    { label: "BREATH", path: "/breath" },
    { label: "LIVE", path: "/live" },
    { label: "DEEP", path: "/deep" },
  ];

  const COURSES = [
    {
      key: "java-full-stack",
      label: "JAVA FULL STACK",
      img: javaImg,
      link: "/java-full-stack",
    },
    {
      key: "python-full-stack",
      label: "PYTHON FULL STACK",
      img: pythonImg,
      link: "/courses#python-full-stack",
    },
    {
      key: "mern-full-stack",
      label: "MERN STACK",
      img: mernImg,
      link: "/courses#mern-stack",
    },
    {
      key: "software-testing",
      label: "SOFTWARE TESTING",
      img: testingImg,
      link: "/courses#software-testing",
    },
  ];

  const COURSE_HERO_1 = "Get the code to travel smart and safe";
  const COURSE_HERO_2 = "to reach your first tech mountain";

  const [openPromo, setPromoOpen] = useState(false);

  const handlePromoClose = () => {
    setPromoOpen(false);
  };

  useEffect(() => {
    if (openPromo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openPromo]);

  return (
    <>
      <section id="hero-section" className="w-full">
        <article className="w-full relative    flex justify-center items-center">
          <div className="relative w-[400px] h-[400px] flex justify-center items-center  code-orbit ">
            {/* Outer Circle: Top and Bottom */}
            <div className="orbit orbit-outer code-outer-orbit">
              <div className="orbit-content">
                {TEXT.slice(0, 2).map((text, i) => (
                  <div
                    key={i}
                    className="orbit-item"
                    style={{ "--angle": `${i === 0 ? 0 : 180}deg` }} // top (0deg), bottom (180deg)
                  >
                    <span
                      className={`orbit-text font-semibold cursor-pointer text-[2.1rem] relative ${
                        text.label.toLowerCase() === "code"
                          ? "text-red-500"
                          : ""
                      }`}
                      onClick={() => alert(text.path)}
                    >
                      <span className="absolute top-2 -left-2 w-5 h-5 bg-black/20 rounded-full -z-[3]"></span>
                      {text.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inner Circle: Left and Right */}
            <div className="orbit orbit-inner code-inner-orbit">
              <div className="orbit-content">
                {TEXT.slice(2, 4).map((text, i) => (
                  <div
                    key={i}
                    className="orbit-item"
                    style={{ "--angle": `${i === 0 ? 90 : 270}deg` }} // right (90deg), left (270deg)
                  >
                    <span
                      className={`orbit-text cursor-pointer font-extrabold text-[2.3rem] ${
                        text.label.toLowerCase() === "code"
                          ? "text-red-600"
                          : ""
                      }`}
                      onClick={() => alert(text.path)}
                    >
                      {text.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Image */}
            <img
              src={spaceHuman}
              className="absolute w-[185px]  h-[145px] rounded-full -z-10 "
              alt="Central"
            />
          </div>

          <button
            onClick={() => setPromoOpen(true)}
            className="px-[30px] into-btn absolute bottom-[30px] right-[5%]  md:right-[10%] lg:right-[25%] flex gap-[1px] justify-center items-center cursor-pointer rounded-sm py-1 text-2xl"
          >
            <div className="w-[60px] relative h-[60px] md:w-[80px] md:h-[80px] bg-black rounded-full flex justify-center items-center pulse">
              <div className="absolute left-full font-semibold text-sm top-full">
                Play <br /> Now
              </div>

              <span style={{ "--i": 1 }}></span>
              <FaPlay size={23} className="text-red-500 " />
            </div>
          </button>
        </article>

        <article className=" w-full md:mt-[20px] hero-info1">
          <div className="w-full font-[500] flex justify-center items-center flex-col uppercase text-[1.2rem] md:text-[2rem]">
            <span className="text-[1rem] md:text-[2rem] font-extrabold hero-info-1">
              BREATH DEEP WITH CODE
            </span>
          </div>
        </article>

        <article className="w-full relative h-[30vh] md:h-[300px] md:mt-[20px] ">
          {/* Moon lading img    */}
          <img
            src={moonfloor}
            className="w-full h-full img-reflect moon-land"
            alt=""
          />

          {/* Astronut img */}
          <img
            src={astronut}
            className="absolute left-[50%] bottom-8 w-[250px] h-[150px] md:w-[280px] md:h-[180px] lg:w-[320px] lg:h-[200px] z-10 -translate-x-[50%] moon-astronout"
            alt=""
          />

          <span className="absolute font-archivo font-[300]  text-red-500 top-4 md:top-0 w-full text-center text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] duration-300 hover:tracking-tighter pentagon-text">
            PENTAGON SPACE
          </span>
        </article>
      </section>

      {/* Courses Section */}

      <section id="course-section" className="w-full mt-[50px] md:mt-[120px] ">
        <article className="flex w-full justify-center items-center pt-[30px]">
          <button className="px-[30px] flex gap-[1px] justify-center items-center cursor-pointer rounded-sm py-1   text-2xl">
            <div className="border border-black font-extrabold px-2 py-1">
              COURSES
            </div>
            <div className="w-[43px] h-[43px] bg-black flex justify-center -rotate-90 items-center">
              <img
                src={triangle}
                className="w-[25px] h-[25px] rotate-0"
                alt=""
              />
            </div>
          </button>
        </article>

        <article className="w-full relative mt-[100px]   flex justify-center items-center">
          <button
            onClick={() => setPromoOpen(true)}
            className="px-[30px] into-btn absolute bottom-[30px] left-[2%]  md:left-[10%] lg:left-[25%] flex gap-[1px] justify-center items-center cursor-pointer rounded-sm py-1 text-2xl"
          >
            <div className="w-[60px] relative h-[60px] md:w-[80px] md:h-[80px] bg-black rounded-full flex justify-center items-center pulse">
              <div className="absolute left-full font-semibold text-sm top-full">
                Watch <br /> Demo
              </div>

              <span style={{ "--i": 1 }}></span>
              <FaPlay size={23} className="text-red-500 " />
            </div>
          </button>

          <div className="relative w-[400px] h-[400px] flex justify-center items-center">
            {/* Outer Circle: Top and Bottom */}
            <div className="orbit orbit-outer">
              <div className="orbit-content">
                {COURSES.slice(0, 2).map((course, i) => (
                  <div
                    key={i}
                    className="orbit-item"
                    style={{ "--angle": `${i === 0 ? 0 : 180}deg` }} // top (0deg), bottom (180deg)
                  >
                    <a
                      href={course.link}
                      className={`orbit-text font-semibold cursor-pointer !text-[0.6rem] md:!text-[0.7rem] relative`}
                    >
                      <img
                        src={course.img}
                        className="w-[50px] h-[50px] md:w-[70px] z-10 md:h-[70px]"
                        alt=""
                      />
                      <span>{course.label}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Inner Circle: Left and Right */}
            <div className="orbit orbit-inner">
              <div className="orbit-content">
                {COURSES.slice(2, 4).map((course, i) => (
                  <div
                    key={i}
                    className="orbit-item"
                    style={{ "--angle": `${i === 0 ? 90 : 270}deg` }} // right (90deg), left (270deg)
                  >
                    <a
                      href={course.link}
                      className={`orbit-text cursor-pointer font-extrabold !text-[0.7rem] flex justify-center items-center flex-col`}
                    >
                      <img
                        src={course.img}
                        className="w-[50px] h-[50px] md:w-[70px] z-10 md:h-[70px]"
                        alt=""
                      />
                      <span className="text-center">{course.label}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Image */}
            <img
              src={spaceHuman}
              className="absolute w-[170px]  h-[130px] rounded-full -z-10 "
              alt="Central"
            />
          </div>
        </article>

        <article className=" w-full mt-[20px] md:mt-[50px] flex justify-center items-center">
          <span className="px-6 hover:tracking-widest duration-300 cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-black tracking-wider text-xl md:text-2xl uppercase py-1 rounded-full bg-black text-white font-semibold">
            Pay fees
          </span>
        </article>

        <article className=" w-full mt-[20px] flex justify-center items-center">
          <span className="text-[1rem] md:text-[1.8rem] font-semibold text-center uppercase">
            {COURSE_HERO_1.split(" ").map((txt, idx) => (
              <span
                className="hover:text-red-500 hover:tracking-wider duration-300 mx-[5px] "
                key={idx}
              >
                {txt}
              </span>
            ))}
            <br />
            {COURSE_HERO_2.split(" ").map((txt, idx) => (
              <span
                className="hover:text-red-500 hover:tracking-wider duration-300 mx-[5px] "
                key={idx}
              >
                {txt}
              </span>
            ))}
          </span>
        </article>

        <article className="w-full relative h-[30vh] md:h-[35vh]">
          {/* Moon landing img */}
          <img
            src={corporateBuilding}
            className="w-full h-full  object-cover md:object-fill"
            alt=""
          />
        </article>
      </section>

      <Testimonial />

      {/* <Testimonial1/> */}

      <TeamMembers />

      <InfoSection1 />

      <HiringPartners />

      <Footer />

      {/* <PageFooter/> */}

      <AnimatePresence mode="wait">
        {openPromo && (
          <motion.section
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-0 left-0 bg-black w-full z-[999] h-[100vh] "
          >
            <span
              className="absolute top-2 right-2 z-[10] cursor-pointer text-white"
              onClick={handlePromoClose}
            >
              <AiOutlineClose />
            </span>
            <VedioPlayer url={spaceVedio} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
