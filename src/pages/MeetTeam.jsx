import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import all your images
import ceoImage from "../assets/imgs/teamMembers/Ceo.png";
import ceoSign from "../assets/imgs/teamMembers/CeoSign.png";
import kart from "../assets/imgs/teamMembers/Karthik.png";
import punith from "../assets/imgs/teamMembers/Punithnew.png";
import sharath from "../assets/imgs/teamMembers/Sharath.png";
import harish from "../assets/imgs/teamMembers/HarishSir.png";
import prathvi from "../assets/imgs/teamMembers/Prathvi.png";
import nagaraj from "../assets/imgs/teamMembers/Nagaraj.png";
import pavanprakash from "../assets/imgs/teamMembers/PavanPrakash.png";
import kiran from "../assets/imgs/teamMembers/Kirannew.png";
import shashank from "../assets/imgs/teamMembers/Shashank.png";
import pavan from "../assets/imgs/teamMembers/Pavan.png";

const MeetTheTeam = () => {
  const leadership = {
    name: "Mr. Suraj Vijay Shetty",
    position: "CEO - Pentagon Space",
    description: "As the CEO of Pentagon, he has been instrumental in driving digital transformation in learning, creating accessible, engaging, and AI-enhanced educational experiences for learners globally.",
    quote: "Dream, Believe, Achieve.",
    number: "''",
    profileImage: ceoImage,
    signatureImage: ceoSign
  };

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Sharath Bhairaraju",
      position: "Director – Product and Learning",
      image: sharath,
      about: "With 8+ years in corporate training and software development, I've delivered industry-focused programs to over 1.2 lakh students, driving career growth and real-world skill enhancement "
    },
    {
      id: 2,
      name: "Mr. Karthik",
      position: "Software Architect & Placement Head",
      image: kart,
      about: "Oracle-certified Java Programmer and Full Stack Developer with 13 years' experience in development and training, specializing in practical, industry-focused learning."
    },
    {
      id: 3,
      name: "Mr. Harish",
      position: "Branch Head - Vijayanagar Branch",
      image: harish,
      about: "Dedicated education professional with a focus on student development and academic excellence at the Vijayanagar branch."
    },
    {
      id: 4,
      name: "Mr. Prathviraj Shetty",
      position: "Program Head - Java",
      image: prathvi,
      about: "5 years of IT training experience with expertise in Java, Python, DSA, and problem-solving, focused on building strong foundations and industry-ready skills through practical learning."
    },
    {
      id: 5,
      name:  "Mr. Pavan Prakash",
      position: "Head Of Placements: BTM Branch ",
      image: pavanprakash,
      about: "M.Tech in IT from University of Hyderabad (GATE 2019) with strong skills in Aptitude, Programming, and DSA. Passionate mentor and Head of Placements at BTM branch, guiding students to excel in careers and campus placements."
    },
    {
      id: 6,
      name: "Mr. Nagaraj",
      position: "Program Head - Mern Stack",
      image: nagaraj,
      about: "With 6+ years of experience in web development and a passion for teaching, I specialize in MERN stack development, helping students build real-world applications."
    },
    {
      id: 7,
      name: "Mr. Kiran Kumar",
      position: "Senior Technical Trainer-Java",
      image: kiran,
      about: "Expert in programming, DSA, and problem-solving with a strong background in impactful technical training. Committed to fostering analytical thinking and aligning learning with industry demands."
    },
    {
      id: 8,
      name: "Mr. Punith",
      position: "Senior Technical Trainer-Devops",
      image:punith,
      about: "Expert in Java backend, SQL, DevOps, and multi-cloud technologies with experience in delivering industry-aligned training. Focused on building strong foundations for creating robust, real-world applications."
    },
    {
      id: 9,
      name: "Mr. Pavan S",
      position: "Senior Technical Trainer",
      image: pavan,
      about: "Expert in front-end and MERN stack development with a strong focus on modern web technologies and user-centric design. Experienced in delivering hands-on training to build industry-ready skills aligned with evolving trends."
    },
    // {
    //   id: 10,
    //   name: "Mr. Shiva Kumar M G",
    //   position: "Senior Technical Trainer-Software Testing",
    //   image: nagaraj, // Note: Using nagaraj image as placeholder
    //   about: "With 4+ years of experience in software testing and a passion for teaching, I specialize in creating effective testing strategies and helping students build real-world applications."
    // },
    {
      id:11,
      name: "Mr. Shashank Talawar",
      position: "Senior Technical Trainer-Python",
      image: shashank,
      about: "With expertise in Python and a passion for teaching, I specialize in helping students build real-world applications."
    }
  ];

  const [hoveredTrainer, setHoveredTrainer] = useState(null);

  return (
    <div className="font-sans bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Leadership Spotlight Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">Leadership Spotlight</h1>
      </div>

      {/* CEO Profile Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - CEO Image Card */}
          <div className="w-full md:w-2/5 bg-gray-100 flex items-center justify-center p-6 md:p-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow">
              <img 
                src={leadership.profileImage} 
                alt={leadership.name}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder-ceo.png";
                }}
              />
            </div>
          </div>

          {/* Right Side - Content Card */}
          <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-rose-600">{leadership.name}</h2>
              <p className="text-lg text-gray-600 mt-1">
                <strong>CEO - <span className="text-rose-600">Pentagon Space</span></strong>
              </p>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{leadership.description}</p>

            <div className="flex flex-col items-end mt-2">
              <p className="text-4xl text-gray-300 mb-1">"</p>
              <p className="text-lg italic text-gray-600 font-medium text-right">
                {leadership.quote}
              </p>
              <div className="flex items-center mt-4">
                <img 
                  src={leadership.signatureImage} 
                  alt="Signature"
                  className="h-10 w-auto mr-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet The Team</h1>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="w-full flex gap-2 justify-end items-center mb-4 px-2">
            <FaArrowCircleLeft
              size={25}
              className="cursor-pointer team-members-prev duration-500 hover:text-rose-600"
            />
            <FaArrowCircleRight
              size={25}
              className="cursor-pointer team-members-next duration-500 hover:text-rose-600"
            />
          </div>

          {/* Swiper Carousel */}
          <div className="team-members-carousal">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                nextEl: ".team-members-next",
                prevEl: ".team-members-prev",
              }}
              pagination={{
                el: ".team-members-pagination",
                clickable: true,
                dynamicBullets: true,
              }}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1600: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id} className="p-2">
                  <div 
                    className="team-card bg-white rounded-xl shadow overflow-hidden flex flex-col w-full max-w-xs h-[400px] transition-transform duration-200 hover:shadow-md mx-auto"
                    onMouseEnter={() => setHoveredTrainer(member.id)}
                    onMouseLeave={() => setHoveredTrainer(null)}
                  >
                    {/* Image container */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder-trainer.png";
                        }}
                      />
                      
                      {/* Hover overlay with info */}
                      {hoveredTrainer === member.id && (
                        <div className="absolute inset-0 bg-black/70 flex items-end p-4 transition-opacity duration-200">
                          <p className="text-white text-sm">{member.about}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Trainer Info */}
                    <div className="p-4 flex flex-col justify-center items-center text-center border-t border-gray-100 flex-grow">
                      <h3 className="text-lg font-bold text-rose-600 mb-1">{member.name}</h3>
                      <span className="text-black text-sm">{member.position}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Pagination */}
          <div className="team-members-pagination flex justify-center mt-6 space-x-2"></div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;