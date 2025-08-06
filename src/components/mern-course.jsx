import React from "react";
import mernLogo from "../assets/imgs/MERN.png"; // Local MERN logo import

const MernCourse = () => {
  const tools = [
    { name: "MongoDB", url: "https://pentagonspace.in/assets/images/course_logo/mern/Mongo%20DB.png" },
    { name: "Express JS", url: "https://pentagonspace.in/assets/images/course_logo/mern/Express%20JS.png" },
    { name: "React JS", url: "https://pentagonspace.in/assets/images/course_logo/mern/React%20JS.png" },
    { name: "Node JS", url: "https://pentagonspace.in/assets/images/course_logo/mern/Node%20JS.png" },
    { name: "Mongoose", url: "https://pentagonspace.in/assets/images/course_logo/mern/Mongoose%20Logo.png" },
    { name: "Figma", url: "https://pentagonspace.in/assets/images/course_logo/mern/Figma%20Logo.png" },
    { name: "HTML", url: "https://pentagonspace.in/assets/images/course_logo/mern/HTML.png" },
    { name: "HTML & CSS", url: "https://pentagonspace.in/assets/images/course_logo/mern/HTML%20&%20CSS.png" },
    { name: "Bootstrap", url: "https://pentagonspace.in/assets/images/course_logo/mern/Bootsrap.png" },
    { name: "JavaScript", url: "https://pentagonspace.in/assets/images/course_logo/mern/JavaScript.png" },
    { name: "Git & GitHub", url: "https://pentagonspace.in/assets/images/course_logo/mern/Git%20&%20Git%20Hub.png" }
  ];

  const handleDownload = () => {
    const pdfUrl = "/mern-full-stack-syllabus.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MERN-Full-Stack-Syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="mern-full-stack-details" className="bg-white py-8">
      {/* Hero Banner with Local Logo */}
      <div
        className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://pentagonspace.in/assets/images/banner/banner1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 w-full max-w-[95%] md:max-w-4xl">
          <img
            src={mernLogo}
            alt="MERN Logo"
            className="w-24 md:w-32 mb-3 md:mb-4 drop-shadow-lg"
          />
          <div className="w-full space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide px-2">
              MERN Full Stack Development
            </h1>
            <p className="text-base md:text-xl font-semibold text-red-400">
              Code Your Way Up: MERN Full Stack Developer Course
            </p>
            <p className="text-xs md:text-base text-gray-200 px-2 md:px-0 leading-relaxed">
              Master MERN Stack Development with our comprehensive training program featuring{" "}
              <span className="text-red-400 font-semibold">
                100% placement assistance
              </span>.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mt-6">
        <div className="text-sm text-gray-600 flex gap-2 items-center">
          <a href="/" className="hover:underline hover:text-black">
            Home
          </a>
          <span>/</span>
          <a href="/courses" className="hover:underline hover:text-black">
            Courses
          </a>
          <span>/</span>
          <span className="text-red-500 font-medium">
            MERN Full Stack
          </span>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {[
            { value: "500+", label: "Course Hours" },
            { value: "Hybrid", label: "Training Mode" },
            { value: "Beginner", label: "Skill Level" },
            { value: "15K+", label: "Learners" }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-3 md:p-4 flex flex-col items-center border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-lg md:text-xl font-bold text-gray-800">{item.value}</span>
              <span className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview & Features */}
      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
              Advanced MERN Full Stack Development
            </h2>
            <p className="mb-4 md:mb-6 text-gray-700 leading-relaxed text-sm md:text-base">
              This comprehensive course takes you from beginner to advanced JavaScript developer, 
              covering MongoDB, Express, React, Node.js, and modern full-stack technologies.
            </p>
            
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-red-500">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
              {[
                "500+ training hours",
                "Certified trainers",
                "Career guidance",
                "8 real projects",
                "Mock interviews",
                "Interview prep",
                "100% placement",
                "Technical grooming",
                "Modern infrastructure"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Technologies */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-5 border border-gray-200">
            <div className="space-y-4 md:space-y-5">
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-red-500">
                  Skills Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB", "Express.js", "React", "Node.js", 
                    "REST APIs", "Frontend", "State Management", 
                    "Authentication", "Deployment", "Performance"
                  ].map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 px-2.5 py-1 rounded-full text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-base md:text-lg mb-3 text-red-500">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-3 items-center">
                  {tools.map((tool) => (
                    <img
                      key={tool.name}
                      src={tool.url}
                      alt={tool.name}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform hover:scale-110"
                      title={tool.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-lg md:text-xl font-semibold text-gray-800 text-center md:text-left">
              Ready to start your MERN Full Stack journey?
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://pentagonspace.in/mern-full-stack-developer-course"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow hover:bg-red-600 transition text-center text-sm md:text-base"
              >
                Enroll Now
              </a>
              <button
                onClick={handleDownload}
                className="bg-white text-red-500 font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow border border-red-500 hover:bg-red-50 transition text-center text-sm md:text-base"
              >
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MernCourse;