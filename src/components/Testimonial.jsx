import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import qoute from "../assets/imgs/quote.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
 

const studentImagesObj = import.meta.glob('..//assets/imgs/testimonials/*.{jpg,jpeg,png,svg}', { eager: true });


const studentImages = Object.keys(studentImagesObj)

const Testimonial = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVedio, setSelectedVedio] = useState(null);

  const [vedioLoading,setVedioLoading] = useState(true)

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
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770552/Vaishnavi_hc7chm.mp4",
      Image: getImageByName("Vaishnavi"),
    },
    {
      key: 2,
      Name: "Mohan Shetty",
      Designation: "Software Trainee",
      Package: "3.75 LPA",
      Review: "It was very useful that i joined Pentagon Space. This education centre have helped create base for my career. Thank you so much Pentagon Space",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770273/Mohan_Shetty_osk7oi.mp4",
      Image: getImageByName("Mohan"),
    },
    {
      key: 3,
      Name: "Asrar Ahmed",
      Designation: "Software Trainee",
      Package: "3.75 LPA",
      Review: "Good place to improve your skills, communication & Placements.",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769579/Asrar_Ahmed_hiqpub.mp4",
      Image: getImageByName("Asrar"),
    },
    {
      key: 4,
      Name: "Virender Singh",
      Designation: "Software Developer",
      Package: "3.75 LPA",
      Review: "It is a very supportive organisation with good training faculty & provides great placement assistance and opportunities",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770583/Virender_Singh_ygwmty.mp4",
      Image: getImageByName("Virendar"),
    },
    {
      key: 5,
      Name: "Pushkar D",
      Designation: "Software Trainee",
      Package: "3 LPA",
      Review: "Very good place to come and learn deeply about tech stack and the industry & good proficient trainers, Who'II help candidates individually",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770353/Pushkar_gchfco.mp4",
      Image: getImageByName("Pushkar"),
    },
    {
      key: 6,
      Name: "Manoj",
      Designation: "Associate Trainee",
      Package: "4 LPA",
      Review: "Pentagon Space is well-known for its team of highly skilled trainers who provide exceptional guidance & mentorship",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770195/Manoj_Y_A_or1pz8.mp4",
      Image: getImageByName("Manoj"),
    },
    {
      key: 7,
      Name: "Jahnavi",
      Designation: "Backend Developer",
      Package: "3.5 LPA",
      Review: "It is the excellent & well structured training centre. I have learned so many things from this institute",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770119/Jahnavi_G_Shetty_uehl2v.mp4",
      Image: getImageByName("Jhanvi"),
    },
    {
      key: 8,
      Name: "Ananda Kedlaya",
      Designation: "Software Developer",
      Package: "3.5 LPA",
      Review: "Placement opportunities were good and good company drives were provided",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769548/Ananda_Kedlaya_qwdfu7.mp4",
      Image: getImageByName("Ananda"),
    },
    {
      key: 9,
      Name: "Darshan R M",
      Designation: "Graduate Trainee Intern",
      Package: "16 LPA",
      Review: "Pentagon Space is a leading training institute that provides industry-focused technical & soft skills training to help students bridge the gap between academics & corporate requirements.",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769671/Dharshan_tsi1aw.mp4",
      Image: getImageByName("Dharshan"),
    },
    {
      key: 10,
      Name: "Gaurav G Kini",
      Designation: "Mern Stack Developer",
      Package: "3.5 LPA",
      Review: "It is a very supportive organisation with good training faculty & provides great placement assistance and opportunities",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770085/Gaurav_osicbw.mp4",
      Image: getImageByName("Gaurav"),
    },
    {
      key: 11,
      Name: "P Dadapeer",
      Designation: "Software  Engineer",
      Package: "4 LPA",
      Review: "Pentagon Space is one of the best training institute in bengaluru, providing top-notch technical education & career support.",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769645/Dadapeer_P_dhv3nf.mp4",
      Image: getImageByName("Dadapeer"),
    },
    {
      key: 12,
      Name: "Sneha Nagaraj",
      Designation: "Software Developer",
      Package: "3.75 LPA",
      Review: "Pentagon Space's strong industry connections & placement support led to exciting opportunities. Thank you, Pentagon Space for empowering me to succeed!",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770456/Sneha_pzbume.mp4",
      Image: getImageByName("Sneha"),
    },
    {
      key: 13,
      Name: "Akash Pandith",
      Designation: "Front End Developer",
      Package: "3 LPA",
      Review: "Pentagon Space is an excellent and well-structured institute. My overall experience was amazing.",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769500/Akash_fbhqt1.mp4",
      Image: getImageByName("Akash"),
    },
    {
      key: 14,
      Name: "Akshata Garagad",
      Designation: "Associate Software Engineer",
      Package: "3.75 LPA",
      Review: "Every student gets an amazing opportunity, and everyone can easily be placed through Pentagon Space.",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769522/Akshata_eld8yc.mp4",
      Image: getImageByName("Akshata"),
    },
    {
      key: 15,
      Name: "Ujjwal Gupta",
      Designation: "Software Engineer",
      Package: "3.5 LPA",
      Review: "It is a very supportive organisation with good training faculty & provides great placement assistance and opportunities",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770519/Ujjwal_Gupta_w5ilsl.mp4",
      Image: getImageByName("Ujjwal"),
    },
    {
      key: 16,
      Name: "P Durga Prasad",
      Designation: "Software Engineer",
      Package: "4 LPA",
      Review: "Pentagon Space isn't just another training institute in Bangalore, it's launchpad for future tech professionals",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769700/Durgesh_fnmpnu.mp4",
      Image: getImageByName("Durgesh_Durgaprasad"),
    },
    {
      key: 17,
      Name: "Pranit Raheja",
      Designation: "Software Engineer",
      Package: "4.3 LPA",
      Review: "Best Place to upgrad your basics",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770328/Pranit_Raheja_cdrjbj.mp4",
      Image: getImageByName("Pranit"),
    },
    {
      key: 18,
      Name: "Monika B G",
      Designation: "Cloud Engineer",
      Package: "3.2 LPA",
      Review: "The Training was handeled by amazing experirnce!",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770302/Monika_B_G_gzbbf3.mp4",
      Image: getImageByName("Monika B G"),
    },
    {
      key: 19,
      Name: "Shama M P",
      Designation: "Supportive Engineer",
      Package: "3.5 LPA",
      Review: "The Training experirnce was very good and good training faculty & provides great placement assistance and opportunities",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770421/Shama_M_P_qaeseo.mp4",
      Image: getImageByName("Shama M P"),
    },
    {
      key: 20,
      Name: "Bhumika L",
      Designation: "Java Developer",
      Package: "4 LPA",
      Review: "Pentagon Space is a great option for anyone looking for a course center that emphasizes practical skills and provides a supportive learning environment",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746769612/Bhumika_gt1ksg.mp4",
      Image: getImageByName("Bhumika"),
    },
    {
      key: 21,
      Name: "Lakshmikanth M N",
      Designation: "Machine Learning Enginer",
      Package: "3 LPA",
      Review: "I had a great experirnce at Pentagon Space, BTM Layout. good training faculty & provides great placement assistance and opportunities",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770142/Lakshmikanth_M_N_tvk7ba.mp4",
      Image: getImageByName("Lakshmikanth"),
    },
    {
      key: 22,
      Name: "H D Ruthik",
      Designation: "Software Engineer",
      Package: "3.2 LPA",
      Review: "Itis a great place to learn new technologies, placements are good and had a great time at Pentagon Space",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770388/Ruthik_H_D_rkrgbc.mp4",
      Image: getImageByName("Ruthik H D"),
    },
    {
      key: 23,
      Name: "Mithun K R",
      Designation: "Web Development Intern",
      Package: "3 LPA",
      Review: "It is a very supportive organisation with good training faculty & provides great placement assistance and opportunities",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770232/Mithun_K_R_oiuvrs.mp4",
      Image: getImageByName("Mithun K R"),
    },
    {
      key: 24,
      Name: "Subahan",
      Designation: "Software Engineer",
      Package: "4 LPA",
      Review: "Pentagon Space is one of the best training institute in bengaluru, providing top-notch technical education & career support.",
      VideoLink: "https://res.cloudinary.com/dxk1tsrru/video/upload/v1746770486/Subahan_toxr5o.mp4",
      Image: getImageByName("Subahan"),
    }
  ];
  
  

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenModal(false);
      setSelectedVedio(null);
      setVedioLoading(true)
    });
  });


  const handleVedioClose = ()=>{
    setOpenModal(false)
    setSelectedVedio(null);
      setVedioLoading(true)
  }


  return (
    <>
      <section className="testimonial-one">
        <div className="auto-container relative">
          {openModal && (
            <section
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="absolute top-0 left-[50%] -translate-x-[50%] w-[95%] md:w-[500px] mx-auto  z-[10]   bg-black p-3 rounded-2xl"
            >
              <div className="w-full h-[400px] rounded-2xl relative">    
                <span className="text-[1.3rem] text-white absolute right-2 top-2 cursor-pointer z-[10]" onClick={handleVedioClose}><IoCloseSharp/></span>
                {
                  vedioLoading && <span className="absolute top-[50%] translate-y-[-50%] text-white left-[50%] -translate-x-[50%] z-[10]">
                        <AiOutlineLoading3Quarters size={25} className="text-white animate-spin duration-500 ease-in-out"/>
                  </span>
                }
               
                <ReactPlayer
                  controls={false}
                  url={selectedVedio}
                  width={"100%"}
                  height={"100%"}
                  playing
                  onStart={()=>setVedioLoading(false)}
                  onBufferEnd={()=>setVedioLoading(false)}
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
                          className="w-[100px] h-[100px] rounded-full shadow-sm  "
                          alt=""
                        />

                        <h2 className="text-xl font-semibold mt-4">
                          {testimonial.Name}
                        </h2>

                        <h2 className="text-[0.8rem] capitalize font-light mt-1">
                          {testimonial.Designation}
                        </h2>

                        <span className="absolute bottom-3 text-red-500 text-2xl right-[30px] font-extrabold">
                          {testimonial.Package}
                        </span>

                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenModal(true);
                            setSelectedVedio(testimonial.VideoLink)
                          }}
                          className="testimonial-play cursor-pointer absolute bottom-[60px] flex justify-center items-center right-[30px] w-[70px] h-[70px] shadow border-2 border-red-200 rounded-full"
                        >
                          <FaPlay size={20} className="text-red-500"/>
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
