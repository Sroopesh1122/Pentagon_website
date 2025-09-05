import React, { useState } from "react";
import RocketBurstAnimation from "../components/RocketBurstAnimation";
import javaImg from "../assets/imgs/java.png";
import pythonImg from "../assets/imgs/PYTHON.png";
import mernImg from "../assets/imgs/MERN.png";
import testingImg from "../assets/imgs/TESTING.png";
import corporateBuilding from "../assets/imgs/CORPORATE_BUILDING.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
      "Spring core, Spring Boot, MicroServices",
      "Spring AI",
      "Front End Technologies",
      "React JS",
      "SQL",
      "Git, GitHub, Maven, Jira",
      "JUnit5, JMeter, Docker, Jenkins",
      "PostMan, Swagger",
      "Real time Projects",
    ],
    badge: "",
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
    badge: "",
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
    badge: "",
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
    badge: "",
  },
];

const Courses = () => {
  const navigate = useNavigate();
  const initialShow =
    sessionStorage.getItem("showRocketAnimation") === "yes" ? true : false;
  const [showAnimation, setShowAnimation] = useState(initialShow);
  const [pendingNav, setPendingNav] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  React.useEffect(() => {
    if (showAnimation) {
      sessionStorage.removeItem("showRocketAnimation");
    }
  }, [showAnimation]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    if (pendingNav) {
      navigate(pendingNav);
    }
  };

  const handleCourseClick = (e, link) => {
    e.preventDefault();
    setPendingNav(link);
    sessionStorage.setItem("showRocketAnimation", "yes");
    setShowAnimation(true);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 relative overflow-x-hidden">
      {showAnimation && (
        <RocketBurstAnimation onComplete={handleAnimationComplete} />
      )}
      
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${corporateBuilding})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/40" />
        
        <div className="container mx-auto relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-red-500">Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
            Master in-demand technologies with our industry-aligned programs
          </p>
          <nav className="flex items-center text-sm text-gray-300">
            <a href="/" className="hover:text-white hover:underline transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-white">Courses</span>
          </nav>
        </div>
      </section>

      {/* Courses Section */}
      {!showAnimation && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 text-sm font-medium text-red-500 bg-red-50 rounded-full mb-3">
                LEARN WITH EXPERTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Career Path
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive courses are designed to transform beginners into industry-ready professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {COURSES.map((course) => (
                <div 
                  key={course.key}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(course.key)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {course.badge && (
                    <span className="absolute -top-3 -right-3 z-10 px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-lg">
                      {course.badge}
                    </span>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/30 rounded-xl transition-all duration-500 ${hoveredCard === course.key ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <a
                    href={course.link}
                    onClick={(e) => handleCourseClick(e, course.link)}
                    className={`block h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${hoveredCard === course.key ? 'transform -translate-y-2' : ''}`}
                  >
                    <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center p-6">
                      <img
                        src={course.img}
                        alt={course.label}
                        className={`object-contain w-full h-full transition-transform duration-500 ${hoveredCard === course.key ? 'scale-110' : 'scale-100'}`}
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {course.label}
                      </h3>
                      
                      <ul className="space-y-3 mb-6">
                        {course.topics.slice(0, 4).map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <IoMdCheckmarkCircleOutline className="flex-shrink-0 mt-1 mr-2 text-red-500" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                        {course.topics.length > 4 && (
                          <li className="text-sm text-gray-500">
                            + {course.topics.length - 4} more topics
                          </li>
                        )}
                      </ul>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center text-red-500 font-medium hover:underline">
                          Explore Course
                          <FiArrowRight className="ml-2" />
                        </span>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {course.topics.length} Modules
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
             {/* <p className="text-gray-600 mb-6">
                Not sure which course is right for you?
              </p>
               <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-md transition-colors duration-300">
                Talk to Our Counselor
              </button> */}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Courses;