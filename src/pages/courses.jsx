import React, { useState } from "react";
import RocketBurstAnimation from "../components/RocketBurstAnimation";
import javaImg from "../assets/imgs/java.png";
import pythonImg from "../assets/imgs/PYTHON.png";
import mernImg from "../assets/imgs/MERN.png";
import testingImg from "../assets/imgs/TESTING.png";
import triangle from "../assets/imgs/triangle.jpg";
import corporateBuilding from "../assets/imgs/CORPORATE_BUILDING.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const COURSES = [
  {
    key: "java-full-stack",
    label: "Java Full Stack with AI",
    img: javaImg,
    link: "/java-full-stack",
    topics: [
      "Core Java",
      "Advanced Java",
      "DSA",
      "Spring core,Spring Boot,MicroServices",
      "Spring Ai",
      "Front End Technologies",
      "React JS",
      "SQL",
      "Git, GitHub, Maven, Jira",
      "JUnit5, JMeter, Docker, Jenkins",
      "PostMan, Swagger",
      "Real time Projects",
    ],
  },
  {
    key: "python-full-stack",
    label: "Python Full Stack with AI",
    img: pythonImg,
    link: "/python-full-stack",
    topics: [
      "Core Python",
      "Advance Python",
      "Django",
      "Rest API",
      "Front End Technologies",
      "React JS",
      "SQL",
      "Projects",
    ],
  },
  {
    key: "mern-stack",
    label: "MERN Stack with AI",
    img: mernImg,
    link: "/mern-full-stack",
    topics: [
      "MongoDB",
      "Express JS",
      "React JS",
      "Node JS",
      "Front End Technologies",
      "Git & GitHub, Figma, & Mongoose",
      "Projects",
    ],
  },
  {
    key: "software-testing",
    label: "Software Testing",
    img: testingImg,
    link: "/software-testing",
    topics: [
      "Manual Testing",
      "Automation Testing with selenium",
      "Agile methodology",
      "Maven and Jenkins",
      "Core Java",
      "HTML, CSS, and JavaScript",
      "Database",
      "Projects",
    ],
  },
];

const Courses = () => {
  const initialShow =
    sessionStorage.getItem("showRocketAnimation") === "yes" ? true : false;
  const [showAnimation, setShowAnimation] = useState(initialShow);
  const [pendingNav, setPendingNav] = useState(null);

  React.useEffect(() => {
    if (showAnimation) {
      sessionStorage.removeItem("showRocketAnimation");
    }
  }, [showAnimation]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    if (pendingNav) {
      window.location.href = pendingNav;
    }
  };

  const handleCourseClick = (e, link) => {
    e.preventDefault();
    setPendingNav(link);
    sessionStorage.setItem("showRocketAnimation", "yes");
    setShowAnimation(true);
  };

  return (
    <main className="w-full min-h-[100vh] bg-white relative overflow-x-hidden">
      {showAnimation && (
        <RocketBurstAnimation onComplete={handleAnimationComplete} />
      )}
      
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center flex items-center justify-center min-h-[220px] md:min-h-[280px] relative"
        style={{ backgroundImage: `url(${corporateBuilding})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="container mx-auto z-10 relative flex flex-col items-center justify-center py-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center">
            Our Courses
          </h1>
          <ul className="flex gap-2 mt-4 text-white/80 text-sm md:text-base">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>Courses</li>
          </ul>
        </div>
      </section>

      {/* Courses Section */}
      {!showAnimation && (
        <section className="w-full py-10 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COURSES.map((course) => (
                <div 
                  key={course.key} 
                  className="group transition-all duration-200 hover:-translate-y-1"
                >
                  <a
                    href={course.link}
                    target="_top"
                    rel="noopener noreferrer"
                    onClick={(e) => handleCourseClick(e, course.link)}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-xl flex flex-col h-full border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg">
                      <div className="relative w-full h-40 flex items-center justify-center bg-white p-4">
                        <img
                          src={course.img}
                          alt={course.label}
                          className="object-contain w-full h-full transition-transform duration-200 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex-1 flex flex-col p-5">
                        <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">
                          {course.label}
                        </h3>
                        <ul className="list-none space-y-2 mb-4 text-sm text-gray-600">
                          {course.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start">
                              <IoMdCheckmarkCircleOutline className="flex-shrink-0 mt-0.5 mr-2 text-red-500" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-3 flex justify-end">
                          <span className="inline-flex items-center text-red-500 font-semibold hover:underline">
                            Explore Course
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Courses;