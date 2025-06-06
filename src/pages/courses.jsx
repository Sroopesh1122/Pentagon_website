import React from "react";
import JavaCourse from "../components/java-course";
import javaImg from "../assets/imgs/java.png";
import pythonImg from "../assets/imgs/PYTHON.png";
import mernImg from "../assets/imgs/MERN.png";
import testingImg from "../assets/imgs/TESTING.png";
import triangle from "../assets/imgs/triangle.jpg";
import corporateBuilding from "../assets/imgs/CORPORATE_BUILDING.png";

const COURSES = [
  {
    key: "java-full-stack",
    label: "Java Full Stack",
    img: javaImg,
    link: "/java-full-stack",
    topics: [
      "Core Java",
      "Advanced Java",
      "Spring Boot",
      "Hibernate",
      "Front End Technologies",
      "React JS",
      "SQL",
      "Projects",
    ],
  },
  {
    key: "python-full-stack",
    label: "Python Full Stack",
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
    label: "MERN Stack Development",
    img: mernImg,
    link: "/mern-full-stack",
    topics: [
      "MongoDB",
      "Express JS",
      "React JS",
      "Node JS",
      "HTML, CSS, and JavaScript",
      "Git & GitHub, Figma, & Mongoose",
      "MVC and Flux Architecture",
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
  return (
    <main className="w-full min-h-[100vh] bg-[#f7f7fa]">
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center flex items-center justify-center min-h-[220px] md:min-h-[300px] relative"
        style={{
          backgroundImage: `url(${corporateBuilding})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="container mx-auto z-10 relative flex flex-col items-center justify-center py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Courses
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
      <section className="w-full py-16 px-2 md:px-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-10">
            <button className="flex gap-2 items-center px-6 py-2 rounded-full border border-black bg-white shadow hover:bg-black hover:text-white duration-200 text-xl font-bold">
              <span>COURSES</span>
              <span className="w-8 h-8 flex items-center justify-center bg-black rounded-full rotate-[-90deg]">
                <img src={triangle} alt="triangle" className="w-5 h-5 p-1" />
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course) =>
              course.customComponent ? (
                
                <div
                  key={course.key}
                  className="col-span-1 md:col-span-2 lg:col-span-4"
                >
                  {course.customComponent}
                </div>
              ) : (
                <a
                  key={course.key}
                  href={course.link}
                  target="_top"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 duration-200"
                >
                  <div
                    className="bg-white rounded-2xl flex flex-col h-full hover:scale-[1.03] duration-200 border border-gray-200 shadow-sm hover:shadow-lg shadow-gray-600"
                  >
                    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-t-2xl bg-gray-100">
                      <img
                        src={course.img}
                        alt={course.label}
                        className="object-contain w-full h-full p-6"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-5">
                      <h3 className="text-xl font-bold mb-3 text-black/90">
                        {course.label}
                      </h3>
                      <ul className="list-disc pl-5 mb-4 text-[0.98rem] text-gray-700 space-y-1">
                        {course.topics &&
                          course.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                      </ul>
                      <div className="flex items-center justify-between border-t pt-3 mt-auto">
                        <div className="flex gap-1 text-yellow-400 text-lg">
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star text-gray-300" />
                        </div>
                        <span className="text-red-500 font-semibold hover:underline">
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
