import React from "react";
import { CiTrophy } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";
import Ceo from "../assets/imgs/teamMembers/SurajSir.png";
import { useNavigate } from "react-router-dom";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import local images (update these paths according to your project structure)
import Classroom1 from "../assets/imgs/teamMembers/ONES.png";
import Classroom2 from "../assets/imgs/teamMembers/TWOS.png";
import Classroom3 from "../assets/imgs/teamMembers/THREES.png";
import Classroom4 from "../assets/imgs/teamMembers/FOURS.png";

const AboutUs = () => {

  const navigate = useNavigate();

  const handleCourseClick =()=>{
    navigate("/courses")
  } 

  // Array of local images for the swiper
  const classroomImages = [
    Classroom1,
    Classroom2,
    Classroom3,
    Classroom4
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Pentagon Space</h1>
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <CiTrophy size={24} className="text-rose-500" />
            <p className="text-base md:text-xl font-medium">Best Training Institute In Bengaluru</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative inline-block">
              <FaQuoteLeft className="absolute -top-4 -left-6 text-gray-500 text-2xl" />
              <p className="text-base md:text-lg italic text-gray-300">
                "Mastering the future through innovative education and cutting-edge technology"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">Our Mission</h2>
            <div className="space-y-3 md:space-y-4 text-gray-800 text-sm md:text-base">
              <p>
                At Pentagon Space, we address the technological drift by providing upskilling and 
                reskilling opportunities for existing professionals. Our mission is to make high-end 
                technology accessible to all knowledge seekers at an affordable price.
              </p>
              <p>
                In a data-driven future, our vision and mission are aligned with our tagline:
                <span className="text-rose-500 font-semibold ml-1">"Master the Future."</span>
              </p>
              <p>
                Our trainers are renowned for their innovative teaching techniques, simplifying complex 
                concepts for easy understanding. We embrace the challenge of delivering the most in-demand 
                skills in the industry, ensuring our students are equipped for the future.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-8 md:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-black">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {classroomImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <img
                        src={image}
                        alt={`Pentagon Space Classroom ${index + 1}`}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-black">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-3 md:mb-4">60,000+</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Upskilled Professionals</h3>
              <p className="text-gray-600 text-sm md:text-base">Young job aspirants empowered with new skills</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-3 md:mb-4">4,800+</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Partner Companies</h3>
              <p className="text-gray-600 text-sm md:text-base">Software companies connected with top talent</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-3 md:mb-4">15,000+</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Career Transformations</h3>
              <p className="text-gray-600 text-sm md:text-base">Individuals who've advanced their careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative flex justify-center lg:justify-start">
              <img
                src={Ceo}
                alt="Suraj Vijay Shetty - CEO"
                className="w-full max-w-sm md:max-w-md rounded-xl shadow-xl border-2 border-black"
              />
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-lg border border-rose-500">
                <p className="font-bold text-sm md:text-base">CEO</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
              <span className="text-rose-500">Suraj Vijay Shetty</span> - CEO, Pentagon Space
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-800 text-sm md:text-base">
              <p>
                <span className="font-semibold">Suraj Vijay Shetty</span> is an experienced 
                seasoned leader with a strong background in building and leading successful 
                edtech companies. With over <span className="font-semibold">8+ years</span> of 
                experience, he has played a pivotal role in the growth and development of an 
                edtech company, focusing on building effective teams and driving business operations.
              </p>
              <p>
                He has made significant contributions to the upskilling of over 
                <span className="font-semibold"> 50,000</span> young job aspirants and has 
                facilitated the identification of the right talent for more than 
                <span className="font-semibold"> 2,500 software companies</span> through his 
                expertise in customized hiring plans.
              </p>
              <p>
                Suraj has built a strong network within the software industry, collaborating 
                with software companies to connect them with suitable job candidates, positively 
                impacting the careers of over <span className="font-semibold">25,000 individuals</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Master the Future?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-gray-300">
            Join thousands of successful professionals who transformed their careers with Pentagon Space
          </p>
          <button 
            onClick={handleCourseClick} 
            className="bg-rose-500 cursor-pointer text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors shadow-lg border border-rose-600 text-base md:text-lg"
          >
            Explore Our Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;