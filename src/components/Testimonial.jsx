import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import qoute from "../assets/imgs/quote.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";

import AkashImg from "../assets/imgs/testimonials/Akash Pandith.png";
import AkashataImg from "../assets/imgs/testimonials/Akshata Garagad.png";

const Testimonial = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVedio, setSelectedVedio] = useState(null);

  const handleVedioSelect = (url) => {
    setSelectedVedio(url);
  };

  const TESTIMONIAL_DETAILS = [
    {
      key: 1,
      Name: "Akash Pandith",
      Designation: "Front End Developer",
      Package: "3 LPA",
      Review:
        "Pentagon Space is an excellent and well-structured institute. My overall experience was amazing.",
      VideoLink: "https://www.instagram.com/reel/DHGllEpR6ag/?hl=en",
      Image: AkashImg,
    },
    {
      key: 2,
      Name: "Akshata Garagad",
      Designation: "Associate Software Engineer",
      Package: "3.75 LPA",
      Review:
        "Every student gets an amazing opportunity, and everyone can easily be placed through Pentagon Space.",
      VideoLink: "https://www.instagram.com/reel/DG3UuXIAg5h/?hl=en",
      Image: AkashataImg,
    },
    {
      key: 1,
      Name: "Akash Pandith",
      Designation: "Front End Developer",
      Package: "3 LPA",
      Review:
        "Pentagon Space is an excellent and well-structured institute. My overall experience was amazing.",
      VideoLink: "https://www.instagram.com/reel/DHGllEpR6ag/?hl=en",
      Image: AkashImg,
    },
    {
      key: 2,
      Name: "Akshata Garagad",
      Designation: "Associate Software Engineer",
      Package: "3.75 LPA",
      Review:
        "Every student gets an amazing opportunity, and everyone can easily be placed through Pentagon Space.",
      VideoLink: "https://www.instagram.com/reel/DG3UuXIAg5h/?hl=en",
      Image: AkashataImg,
    },
    {
      key: 1,
      Name: "Akash Pandith",
      Designation: "Front End Developer",
      Package: "3 LPA",
      Review:
        "Pentagon Space is an excellent and well-structured institute. My overall experience was amazing.",
      VideoLink: "https://www.instagram.com/reel/DHGllEpR6ag/?hl=en",
      Image: AkashImg,
    },
    {
      key: 2,
      Name: "Akshata Garagad",
      Designation: "Associate Software Engineer",
      Package: "3.75 LPA",
      Review:
        "Every student gets an amazing opportunity, and everyone can easily be placed through Pentagon Space.",
      VideoLink: "https://www.instagram.com/reel/DG3UuXIAg5h/?hl=en",
      Image: AkashataImg,
    },
    {
      key: 1,
      Name: "Akash Pandith",
      Designation: "Front End Developer",
      Package: "3 LPA",
      Review:
        "Pentagon Space is an excellent and well-structured institute. My overall experience was amazing.",
      VideoLink: "https://www.instagram.com/reel/DHGllEpR6ag/?hl=en",
      Image: AkashImg,
    },
    {
      key: 2,
      Name: "Akshata Garagad",
      Designation: "Associate Software Engineer",
      Package: "3.75 LPA",
      Review:
        "Every student gets an amazing opportunity, and everyone can easily be placed through Pentagon Space.",
      VideoLink: "https://www.instagram.com/reel/DG3UuXIAg5h/?hl=en",
      Image: AkashataImg,
    },
  ];

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenModal(false);
    });
  });

  return (
    <>
      <section className="testimonial-one">
        <div className="auto-container relative">
          {openModal && (
            <section
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="absolute top-0 left-[50%] -translate-x-[50%] w-[95%] md:w-[500px] mx-auto  z-[10]  h-[400px] bg-black/90 rounded-2xl"
            >
              <div className="w-full h-[400px] bg-red-600 rounded-2xl relative">
                
                 
                <span className="text-[1.3rem] text-white absolute right-2 top-2 cursor-pointer z-[10]">Close</span>
               
                <ReactPlayer
                  controls={false}
                  url={selectedVedio}
                  width={"100%"}
                  height={"100%"}
                  playing
                />
              </div>
            </section>
          )}

          <div className="w-full flex justify-center items-center">
            <h2 className="text-3xl font-semibold uppercase">Testimonials</h2>
          </div>
          <div className="three-item_carousel-container mt-[40px] relative p-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 6000,
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
                1600: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                600: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {TESTIMONIAL_DETAILS.map((testimonial, id) => (
                <SwiperSlide key={id}>
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-content relative">
                        <img
                          src={testimonial.Image}
                          className="w-[100px] h-[100px] rounded-full "
                          alt=""
                        />

                        <h2 className="text-xl font-semibold mt-4">
                          {testimonial.Name}
                        </h2>

                        <h2 className="text-[0.8rem] capitalize font-light mt-1">
                          {testimonial.Designation}
                        </h2>

                        <span className="absolute bottom-3 text-2xl right-[30px] font-extrabold">
                          {testimonial.Package}
                        </span>

                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenModal(true);
                            setSelectedVedio(testimonial.VideoLink)
                          }}
                          className="testimonial-play cursor-pointer absolute bottom-[60px] flex justify-center items-center right-[30px] w-[70px] h-[70px] border-2 border-white rounded-full"
                        >
                          <span className="triangle"></span>
                        </span>
                      </div>
                      <div className="testimonial-block_one-lower flex justify-center items-start gap-2 p-2">
                        <span>
                          <img
                            src={qoute}
                            className="w-[60px] h-[40px]"
                            alt=""
                          />
                        </span>
                        {testimonial.Review}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom nav + pagination */}

            <div className="w-full flex justify-center items-center">
              <div className="three-item_carousel-pagination ms-[100px]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
