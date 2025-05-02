import React from "react";
import qoute from "../assets/imgs/quote.png";
const Testimonial1 = () => {
  return (
    <section className="testimonial-one">
      <div className="auto-container">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-3xl font-semibold uppercase">Testimonials</h2>
        </div>
        <div className="three-item_carousel swiper-container mt-[40px]">
          <div className="swiper-wrapper">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div className="swiper-slide">
                <div className="testimonial-block_one">
                  <div className="testimonial-block_one-inner">
                    <div className="testimonial-block_one-content relative">
                      <img
                        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                        className="w-[100px] h-[80px] grayscale-100 "
                        alt=""
                      />

                      <h2 className="text-xl font-semibold mt-4">
                        Krinshna Naik
                      </h2>

                      <h2 className="text-[0.8rem] capitalize font-light mt-1">
                        software engineer
                      </h2>

                      <span className="absolute bottom-3 text-2xl right-[30px] font-extrabold">
                        4 LPA
                      </span>

                      <span className="testimonial-play cursor-pointer absolute bottom-[60px] flex justify-center items-center right-[30px] w-[70px] h-[70px] border-2 border-white rounded-full">
                        <span className="triangle"></span>
                      </span>
                    </div>
                    <div className="testimonial-block_one-lower flex justify-center items-start gap-2 p-2">
                      <span>
                        <img src={qoute} className="w-[60px] h-[40px]" alt="" />
                      </span>
                      Exceptional work, exceptional team. Montek consistently
                      delivers top-notch results.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
