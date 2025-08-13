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
    <>
      <section className="w-full p-2 md:mt-[100px] min-h-[60vh] flex justify-center items-center">
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className="text-3xl font-extrabold">
            Our <span className="text-red-500">Hiring Partners</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide
          </p>
          <div className="w-full max-w-[1100px] mt-10">
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
              {HIRING_COMPANIES.slice(0, partSize).map((partner, id) => (
                <SwiperSlide key={id} className="py-[25px]">
                  <div className="h-[80px] w-full shadow-md rounded-2xl flex justify-center items-center duration-500  hover:-translate-y-5">
                    <img
                      src={partner}
                      className="w-full h-full rounded-2xl object-contain p-2"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
              {HIRING_COMPANIES.slice(partSize, partSize * 2).map(
                (partner, id) => (
                  <SwiperSlide key={id} className="py-[25px]">
                    <div className="h-[80px] w-full shadow-md rounded-2xl flex justify-center items-center duration-500 hover:-translate-y-5">
                      <img
                        src={partner}
                        className="w-full h-full rounded-2xl object-contain p-2"
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
              {HIRING_COMPANIES.slice(partSize * 2).map((partner, id) => (
                <SwiperSlide key={id} className="py-[25px]">
                  <div className="h-[80px] w-full shadow-md rounded-2xl flex justify-center items-center duration-500  hover:-translate-y-5">
                    <img
                      src={partner}
                      className="w-full h-full rounded-2xl object-contain p-2"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div className="mt-16 px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">4.8K+</div>
            <div className="text-sm md:text-base text-gray-600">Hiring Partners</div>
          </div>
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">15K+</div>
            <div className="text-sm md:text-base text-gray-600">Careers built</div>
          </div>
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">90%</div>
            <div className="text-sm md:text-base text-gray-600">
              <span className="md:hidden">Offline Placement Rate</span>
              <span className="hidden md:inline">Placement Rate in Offline Training</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">4.8/5</div>
            <div className="text-sm md:text-base text-gray-600">Company Satisfaction</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">60K+</div>
            <div className="text-sm md:text-base text-gray-600">Students Enrolled</div>
          </div>
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">3-5</div>
            <div className="text-sm md:text-base text-gray-600">Interviews Everyday</div>
          </div>
          <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-xl shadow-sm text-center h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-rose-500">6.5K+</div>
            <div className="text-sm md:text-base text-gray-600">Interviews Conducted</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringPartners;