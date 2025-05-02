import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HiringPartners = () => {


    const HIRING_COMPANIES=[
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mGmxOSPz-go_5LC-fGmATg.png",
    ]


  return (
    <section className="w-full p-2 mt-[30px] min-h-[50vh] flex justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-extrabold">Our Hiring Partners</h1>

        <div className="w-full max-w-[1000px] mt-[90px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".three-item_carousel-next",
              prevEl: ".three-item_carousel-prev",
            }}
            pagination={{
              el: ".three-item_carousel-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            speed={500}
            breakpoints={{
              1600: { slidesPerView: 5 },
              1200: { slidesPerView: 5 },
              992: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              600: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {HIRING_COMPANIES.map((partner, id) => (
              <SwiperSlide key={id} className="py-[20px]">
                <div className="w-[150px] h-[50px]  shadow-lg rounded-2xl flex justify-center items-center">
                    <img src={partner} className="w-full h-[100px]" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
