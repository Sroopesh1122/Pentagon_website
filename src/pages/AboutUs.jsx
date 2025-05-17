import React from "react";
import { CiTrophy } from "react-icons/ci";
import Ceo from "../assets/imgs/teamMembers/SurajSir.png";

const AboutUs = () => {
  return (
    <section className="w-full min-h-[70vh] p-[5px] md:p-[20px]">
      <h1 className="text-3xl font-semibold text-center md:text-start">
        About Us
      </h1>

      <div className="w-full">
        <h1 className="text-center  text-[1.8rem]   md:text-[3rem] font-semibold text-red-500">
          Pentagon Space
        </h1>
        <h1 className="flex justify-center items-center">
          <CiTrophy size={20} /> Best Training Institute In Bengaluru{" "}
        </h1>
      </div>

      <article className="w-full flex justify-center items-center flex-col md:flex-row mt-[50px]">
        <article className="w-full p-3 md:w-[50%] md:ps-[20px] text-justify">
          At Pentagon Space, we address the technological drift by providing
          upskilling and reskilling opportunities for existing professionals.
          Our mission is to make high-end technology accessible to all knowledge
          seekers at an affordable price. In a data-driven future, our vision
          and mission are aligned with our tagline:
          <span className="text-red-500 whitespace-nowrap font-semibold">
            “Master the Future.”
          </span>
          Our trainers are renowned for their innovative teaching techniques,
          simplifying complex concepts for easy understanding. We embrace the
          challenge of delivering the most in-demand skills in the industry,
          ensuring our students are equipped for the future. With exceptional
          teaching and robust placement opportunities, we complete the cycle of
          knowledge acquisition and career advancement. Pentagon Space is the
          go-to hub for individuals aiming to master cutting-edge technologies
          and for clients seeking immediately deployable resources. Join us to
          master the future and stay ahead in the ever-evolving tech landscape.
          <div className="mt-[10px] w-full text-justify">
            We connect students with leading IT giants and successful
            product-based companies, offering a high-quality education through
            real-time applied learning. Our experienced tutors, who have held
            leadership roles in the industry, are committed to closing the
            quality gap in human resources. This dedication helps our learners
            reach their full potential and achieve excellence.
          </div>
        </article>

        <article className="w-full md:w-[50%] flex justify-center items-center">
          <img
            src="https://pentagonspace.in/assets/images/about/cls2.jpeg"
            className="w-[300px] md:w-[450px] rounded-2xl h-auto"
            alt=""
          />
        </article>
      </article>

      <article className="w-full flex flex-col md:flex-row justify-center items-center mt-[50px]">
        <article className="w-full md:w-[50%] flex justify-center items-center">
          <div>
            <img
              src={Ceo}
              className="w-[300px] md:w-[400px] rounded-md h-auto"
              alt=""
            />
          </div>
        </article>

        <article className="w-full md:w-[50%] flex  justify-center items-center p-5">
          <div>
            <h1 className="text-[1.1rem] md:text-[1.8rem] text-red-500 font-semibold">
              Suraj Vijay Shetty – CEO, Pentagon
            </h1>
            <div className="w-full text-justify mt-[30px]">
              <strong>Suraj Vijay Shetty</strong> is an experienced seasoned leader with a strong
              background in building and leading successful edtech companies.
              With over <strong>8+ years </strong> of experience, he has played a pivotal role in
              the growth and development of an edtech company, focusing on
              building effective teams and driving business operations.
              <div className="w-full text-justify mt-1">
                He has made significant contributions to the upskilling of over
                <strong> 50000</strong> young job aspirants and has facilitated the identification
                of the right talent for more than <strong>2,500 software companies </strong>
                through his expertise in customized hiring plans.
              </div>
              <div className="w-full text-justify mt-1">
                He has positively impacted the careers of over <strong>25,000 </strong>
                individuals. Suraj has built a strong network within the
                software industry, collaborating with software companies to
                connect them with suitable job candidates.
              </div>
            </div>
          </div>
        </article>
      </article>

      <article className="w-full lg:w-[90%] mx-auto"></article>
    </section>
  );
};

export default AboutUs;
