import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import qoute from "../assets/imgs/quote.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReactPlayer from "react-player";


const studentImagesObj = import.meta.glob('..//assets/imgs/testimonials/*.{jpg,jpeg,png,svg}', { eager: true });


const studentImages = Object.keys(studentImagesObj)

const Testimonial = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVedio, setSelectedVedio] = useState(null);

  const handleVedioSelect = (url) => {
    setSelectedVedio(url);
  };


  const getImageByName = (name) => {
    const imgUrl = studentImages.find((img)=>img.includes(name));
    return imgUrl ? studentImagesObj[imgUrl].default  : "https://cdn-icons-png.flaticon.com/512/4537/4537019.png";  
  };


  const TESTIMONIAL_DETAILS = [
    {
      key: 1,
      Name: "Vaishnavi",
      Designation: "FullStack Developer",
      Package: "4 LPA",
      Review: "Pentagon Space is one of the best training institute! The trainers are highly knowledgeable and provide excellent guidance.",
      VideoLink: "",
      Image: getImageByName("Vaishnavi"),
    },
    {
      key: 2,
      Name: "Mohan Shetty",
      Designation: "Software Trainee",
      Package: "3.75 LPA",
      Review: "It was very useful that I joined Pentagon Space. This education centre has helped create a base for my career. Thank you so much Pentagon Space.",
      VideoLink: "",
      Image: getImageByName("Mohan Shetty"),
    },
    {
      key: 3,
      Name: "Asrar Ahmed",
      Designation: "Software Trainee",
      Package: "3.75 LPA",
      Review: "Good place to improve your skills, communication & Placements.",
      VideoLink: "",
      Image: getImageByName("Asrar Ahmed"),
    },
    {
      key: 4,
      Name: "Virender Singh",
      Designation: "Software Developer",
      Package: "3.75 LPA",
      Review: "It is a very supportive organisation with good training faculty & provides great placement assistance and opportunities.",
      VideoLink: "",
      Image: getImageByName("Virender Singh"),
    },
    {
      key: 5,
      Name: "Pushkar D",
      Designation: "Software Trainee",
      Package: "3 LPA",
      Review: "Very good place to come and learn deeply about tech stack and the industry & good proficient trainers, who'll help candidates individually.",
      VideoLink: "",
      Image: getImageByName("Pushkar D"),
    },
    {
      key: 6,
      Name: "Manoj",
      Designation: "Associate Trainee",
      Package: "4 LPA",
      Review: "Pentagon Space is well-known for its team of highly skilled trainers who provide exceptional guidance & mentorship.",
      VideoLink: "",
      Image: getImageByName("Manoj"),
    },
    {
      key: 7,
      Name: "Jahnavi",
      Designation: "Backend Developer",
      Package: "3.5 LPA",
      Review: "It is the excellent & well-structured training centre. I have learned so many things from this institute.",
      VideoLink: "",
      Image: getImageByName("Jahnavi"),
    },
    {
      key: 8,
      Name: "Ananda Kedlaya",
      Designation: "Software Developer",
      Package: "3.5 LPA",
      Review: "Placement opportunities were good and good company drives were provided.",
      VideoLink: "",
      Image: getImageByName("Ananda Kedlaya"),
    },
    {
      key: 9,
      Name: "Darshan R M",
      Designation: "Graduate Trainee Intern",
      Package: "16 LPA",
      Review: "Pentagon Space is a leading training institute that provides industry-focused technical & soft skills training to help students bridge the gap between academics & corporate requirements.",
      VideoLink: "",
      Image: getImageByName("Darshan R M"),
    },
    {
      key: 10,
      Name: "Gaurav G Kini",
      Designation: "Mern Stack Developer",
      Package: "3.5 LPA",
      Review: "It is a very supportive organisation with good training faculty & provides great placement assistance and opportunities.",
      VideoLink: "",
      Image: getImageByName("Gaurav G Kini"),
    },
    {
      key: 11,
      Name: "P Dadapeer",
      Designation: "Software Engineer",
      Package: "4 LPA",
      Review: "Pentagon Space is one of the best training institute in Bengaluru, providing top-notch technical education & career support.",
      VideoLink: "",
      Image: getImageByName("P Dadapeer"),
    },
    {
      key: 12,
      Name: "Sneha Nagaraj",
      Designation: "Software Developer",
      Package: "3.75 LPA",
      Review: "Pentagon Space's strong industry connections & placement support led to exciting opportunities. Thank you, Pentagon Space for empowering me to succeed!",
      VideoLink: "",
      Image: getImageByName("Sneha Nagaraj"),
    },
    {
      key: 13,
      Name: "Akash Pandith",
      Designation: "Front End Developer",
      Package: "3 LPA",
      Review: "Pentagon Space is an excellent and well-structured institute. My overall experience was amazing.",
      VideoLink: "https://www.instagram.com/reel/DHGllEpR6ag/?hl=en",
      Image: getImageByName("Akash"),
    },
    {
      key: 14,
      Name: "Akshata Garagad",
      Designation: "Associate Software Engineer",
      Package: "3.75 LPA",
      Review: "Every student gets an amazing opportunity, and everyone can easily be placed through Pentagon Space.",
      VideoLink: "",
      Image: getImageByName("Akshata"),
    }
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
              className="absolute top-0 left-[50%] -translate-x-[50%] w-[95%] md:w-[500px] mx-auto  z-[10]  h-[400px] bg-black/20 rounded-2xl"
            >
              <div className="w-full h-[400px] rounded-2xl relative">
                
                 
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
