import React from "react";
import { CiTrophy } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";
import Ceo from "../assets/imgs/teamMembers/SurajSir.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

  const navigate = useNavigate();

  const handleCourseClick =()=>{
    navigate("/courses")
  } 


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pentagon Space</h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <CiTrophy size={24} className="text-rose-500" />
            <p className="text-lg md:text-xl font-medium">Best Training Institute In Bengaluru</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative inline-block">
              <FaQuoteLeft className="absolute -top-4 -left-6 text-gray-500 text-2xl" />
              <p className="text-lg italic text-gray-300">
                "Mastering the future through innovative education and cutting-edge technology"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-black">Our Mission</h2>
            <div className="space-y-4 text-gray-800">
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
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-black">
              <img
                src="https://pentagonspace.in/assets/images/about/cls2.jpeg"
                alt="Pentagon Space Classroom"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">State-of-the-Art Learning Environment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-5xl font-bold text-rose-500 mb-4">60,000+</div>
              <h3 className="text-xl font-semibold mb-2">Upskilled Professionals</h3>
              <p className="text-gray-600">Young job aspirants empowered with new skills</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-5xl font-bold text-rose-500 mb-4">4,800+</div>
              <h3 className="text-xl font-semibold mb-2">Partner Companies</h3>
              <p className="text-gray-600">Software companies connected with top talent</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-5xl font-bold text-rose-500 mb-4">15,000+</div>
              <h3 className="text-xl font-semibold mb-2">Career Transformations</h3>
              <p className="text-gray-600">Individuals who've advanced their careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <img
                src={Ceo}
                alt="Suraj Vijay Shetty - CEO"
                className="w-full max-w-md rounded-xl shadow-xl border-2 border-black"
              />
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-6 py-2 rounded-lg shadow-lg border border-rose-500">
                <p className="font-bold">CEO </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-black">
              <span className="text-rose-500">Suraj Vijay Shetty</span> - CEO, Pentagon Space
            </h2>
            <div className="space-y-4 text-gray-800">
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
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Master the Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join thousands of successful professionals who transformed their careers with Pentagon Space
          </p>
          <button onClick={handleCourseClick} className="bg-rose-500 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors shadow-lg border border-rose-600">
            Explore Our Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;