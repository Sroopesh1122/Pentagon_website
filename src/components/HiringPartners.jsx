import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = import.meta.glob(
  "..//assets/imgs/hiringPartners/*.{jpg,jpeg,png,svg}",
  { eager: true }
);


const imageUrls = Object.values(images).map((mod) => mod.default);

const HiringPartners = () => {
  const HIRING_COMPANIES = [...imageUrls];


  const partSize = Math.ceil(HIRING_COMPANIES.length / 3);

  return (
    <section className="w-full p-2 md:mt-[100px] min-h-[60vh]  flex justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-extrabold">Our Hiring Partners</h1>

        <div className="w-full max-w-[1100px]">
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
              768: { slidesPerView: 4 },
              600: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 2 },
            }}
          >
            {HIRING_COMPANIES.slice(0, partSize).map(
              (partner, id) => (
                <SwiperSlide key={id} className="py-[25px]  ">
                  <div className=" h-[80px] w-full shadow-md  rounded-2xl flex justify-center items-center duration-500 hover:-translate-y-5">
                    <img
                      src={partner}
                      className="w-full h-full rounded-2xl "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1100,
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
              768: { slidesPerView: 4 },
              600: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 2 },
            }}
          >
            {HIRING_COMPANIES.slice(partSize, partSize*2).map(
              (partner, id) => (
                <SwiperSlide key={id} className="py-[25px]  ">
                  <div className=" h-[80px] w-full shadow-md  rounded-2xl flex justify-center items-center duration-500 hover:-translate-y-5">
                    <img
                      src={partner}
                      className="w-full h-full rounded-2xl "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1200,
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
              768: { slidesPerView: 4 },
              600: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 2 },
            }}
          >
            {HIRING_COMPANIES.slice(partSize* 2).map(
              (partner, id) => (
                <SwiperSlide key={id} className="py-[25px]  ">
                  <div className=" h-[80px] w-full shadow-md  rounded-2xl flex justify-center items-center duration-500 hover:-translate-y-5">
                    <img
                      src={partner}
                      className="w-full h-full rounded-2xl "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
