import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import SurajSir from "../assets/imgs/teamMembers/SurajSir.png";
import SharathSir from "../assets/imgs/teamMembers/Sharath sir.png";
import JohnSir from "../assets/imgs/teamMembers/John Milton.jpg";
import KarthikSir from "../assets/imgs/teamMembers/karthik.jpg";
import NihalSir from "../assets/imgs/teamMembers/Nihal.jpg";
import PunithSir from "../assets/imgs/teamMembers/Punith.jpg";
import ShivKumarSir from "../assets/imgs/teamMembers/Shivakumar.jpg";
import HarishSir from "../assets/imgs/teamMembers/Harish.jpg";
import KiranSir from "../assets/imgs/teamMembers/Kiran.jpg";
import PavanSir from "../assets/imgs/teamMembers/Pavan.jpg";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamMembers = () => {
  const TEAM_DETAILS = [
    {
      key: 1,
      img: SurajSir,
      name: "Mr. Suraj Vijay Shetty",
      desc: "CEO & Managing Director",
      info: "Suraj Vijay Shetty is the CEO of Pentagon Space and a seasoned edtech leader with 8+ years of experience. He has upskilled over 50,000 job aspirants and helped 2,500+ software companies find the right talent through customized hiring plans. Suraj has built and led high-performing teams across Sales, Training, and Operations. He specializes in creating effective upskilling programs and strategic recruitment solutions. His strong industry network enables him to bridge the gap between talent and opportunity.",
    },
    {
      key: 2,
      img: SharathSir,
      name: "Mr. Sharath Basavaraju",
      desc: "Head-Product & Engineering",
      info: "Over 9 years of experience specializing in Java Full Stack Development, with deep expertise across front-end and back-end technologies.",
    },
    {
      key: 3,
      img: KarthikSir,
      name: "Mr. Karthik",
      desc: "Software Architect & Placement Head",
      info: "Over 13 years of experience with strong expertise in Java Full Stack Development and a proven track record as a Placement Executive, bridging technology and talent.",
    },
    {
      key: 4,
      img: HarishSir,
      name: "Mr. Harish",
      desc: "Senior Product Specialist - Python",
      info: "8+ Years of experience with expertise in Python and Java Full Stack Development, passionate about building robust applications and mentoring developers.",
    },
    {
      key: 5,
      img: PunithSir,
      name: "Mr. Punith B",
      desc: "Technical Trainer - DevOps",
      info: "4+ Years of experience with deep knowledge in DevOps practices, Advanced Java, and SQL, delivering practical and industry-relevant training.",
    },
    {
      key: 6,
      img: KiranSir,
      name: "Mr. Kiran",
      desc: "Technical Trainer",
      info: "Dedicated to empowering students through hands-on training in software development and industry best practices.",
    },
    {
      key: 7,
      img: PavanSir,
      name: "Mr. Pavan S",
      desc: "Technical Trainer",
      info: "4+ Years of experience with deep knowledge in Web Technologies, MERN, delivering practical and industry-relevant training.",
    },
    {
      key: 8,
      img: JohnSir,
      name: "Mr. John Milton M",
      desc: "Technical Trainer - Cyber Security",
      info: "Bringing 5+ years of experience in software development and a passion for teaching the next generation of developers.",
    },
    {
      key: 9,
      img: NihalSir,
      name: "Mr. Nihal",
      desc: "Technical Trainer",
      info: "Committed to delivering quality technical education and supporting learners in mastering modern development tools and techniques.",
    },
    {
      key: 10,
      img: ShivKumarSir,
      name: "Mr. Shiva Kumar Sir",
      desc: "Technical Trainer",
      info: "Focused on bridging the gap between academic knowledge and industry requirements through practical and impactful training sessions.",
    },
  ];

  return (
    <>
      <section
        id="team-members-section"
        className="w-full h-fit team-section pt-[30px]"
      >
        <article className="w-full flex justify-center items-center">
          <h1 className="text-3xl font-semibold">Our Team Members</h1>
        </article>
        <article className="w-full  max-w-[1200px] mx-auto px-8 flex  gap-2 justify-between items-center mt-[40px]">
          <FaArrowCircleLeft
            size={25}
            className="cursor-pointer team-members-prev duration-500 hover:text-red-500"
          />
          <FaArrowCircleRight
            size={25}
            className="cursor-pointer team-members-next duration-500 hover:text-red-500"
          />
        </article>
        <article className="w-full max-w-[1200px] mx-auto  team-members-carousal">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: ".team-members-next",
              prevEl: ".team-members-prev",
            }}
            pagination={{
              el: ".team-members-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            speed={500}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            onReachEnd={(swiper) => {
              swiper.params.autoplay.reverseDirection = true;
              swiper.autoplay.start();
            }}
            onReachBeginning={(swiper) => {
              swiper.params.autoplay.reverseDirection = false;
              swiper.autoplay.start();
            }}
            breakpoints={{
              1600: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              600: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {TEAM_DETAILS.map((details, id) => (
              <SwiperSlide key={id} className="p-3">
                <div className="team-card">
                  <div className="image">
                    <img src={details.img} alt="people" />
                    <div className="info-icon bg-red-500">
                      <div className="info-icon-wrapper cursor-pointer">
                        <GoArrowUpRight size={20} />
                      </div>
                    </div>
                    <div className="bg-black/70  text-white absolute bottom-0 left-0 w-full h-full z-[2] p-4 member-info">
                      {details.info}
                    </div>
                  </div>
                  <div className="contact ">
                    <a href="javascript:void(0)">{details.name}</a>
                    <span className="text-[0.9rem] text-center">
                      {details.desc}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>
    </>
  );
};

export default TeamMembers;
