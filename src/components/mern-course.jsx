import React from "react";

const tools = [
  {
    name: "MongoDB",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Mongo%20DB.png",
  },
  {
    name: "Express JS",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Express%20JS.png",
  },
  {
    name: "React JS",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/React%20JS.png",
  },
  {
    name: "Node JS",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Node%20JS.png",
  },
  {
    name: "Mongoose",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Mongoose%20Logo.png",
  },
  {
    name: "Figma",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Figma%20Logo.png",
  },
  {
    name: "HTML",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/HTML.png",
  },
  {
    name: "HTML & CSS",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/HTML%20&%20CSS.png",
  },
  {
    name: "Bootstrap",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Bootsrap.png",
  },
  {
    name: "JavaScript",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/JavaScript.png",
  },
  {
    name: "Git & GitHub",
    url: "https://pentagonspace.in/assets/images/course_logo/mern/Git%20&%20Git%20Hub.png",
  },
];

const MernCourse = () => (
  <section id="mern-full-stack-details" className="bg-[#f7f7fa] py-0 md:py-8">
    {/* Hero Banner */}
    <div
      className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://pentagonspace.in/assets/images/banner/banner1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <img
          src="https://pentagonspace.in/assets/images/course_logo/merni.png"
          alt="MERN Logo"
          className="w-24 md:w-32 mb-4 drop-shadow-lg"
        />
        <h1 className="text-xl md:text-3xl font-extrabold mb-2 tracking-wider uppercase">
          MERN Full Stack Development
        </h1>
        <p className="text-base md:text-lg font-bold mb-4 max-w-2xl text-red-500 uppercase tracking-wide">
          Code Your Way Up: MERN Full Stack Developer Course
        </p>
        <p className="max-w-2xl text-sm md:text-base text-gray-200">
          The MERN Full Stack Developer course at Pentagon Space is designed to
          equip you with in-depth knowledge and practical skills in MongoDB,
          Express.js, React.js, and Node.js. Build dynamic web applications,
          RESTful APIs, and scalable backend systems. This course is perfect for
          aspiring developers who want to become proficient in one of the most
          in-demand tech stacks in the industry.
        </p>
      </div>
    </div>

    {/* Breadcrumb */}
    <div className="container mx-auto mt-4">
      <div className="text-sm text-gray-700 flex gap-2 items-center">
        <a href="/" className="hover:underline font-bold text-black">
          Home
        </a>
        <span>/</span>
        <a className="hover:underline font-bold text-black" href="/courses">
          Courses
        </a>
        <span>/</span>
        <span className="font-semibold text-red-500">
          Full Stack MERN Development
        </span>
      </div>
    </div>

    {/* Course Highlights */}
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 border-black">
        <span className="text-xl font-extrabold text-black mb-1">500+</span>
        <span className="text-gray-800 font-semibold uppercase">
          Course Hours
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 border-black">
        <span className="text-xl font-extrabold text-black mb-1">
          Offline & Online
        </span>
        <span className="text-gray-800 font-semibold uppercase">
          Mode of Training
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 border-black">
        <span className="text-xl font-extrabold text-black mb-1">Beginner</span>
        <span className="text-gray-800 font-semibold uppercase">
          Skill Level
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 border-black">
        <span className="text-xl font-extrabold text-black mb-1">15,000+</span>
        <span className="text-gray-800 font-semibold uppercase">Learners</span>
      </div>
    </div>

    {/* Overview & Features */}
    <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-extrabold mb-4 text-black uppercase tracking-wide">
          Advanced MERN Full Stack Development Course
        </h2>
        <p className="mb-6 text-gray-800">
          This Advanced MERN Full Stack Development Course is designed to take
          you from a beginner to an advanced level in full stack JavaScript
          development. The course covers essential concepts and skills,
          including MongoDB, Express.js, React.js, Node.js, REST APIs, and
          deployment. You will gain hands-on experience with real-world projects
          and challenges.
        </p>
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          <li>Over 500 hours of intensive training</li>
          <li>Training by certified trainers</li>
          <li>Career Guidance by Industry experts</li>
          <li>Special programming classes</li>
          <li>8 technical projects</li>
          <li>Regular mock interviews/assessments</li>
          <li>Includes interview Preparation module</li>
          <li>100% Placement assistance</li>
          <li>Interview-specific grooming sessions</li>
          <li>World-class infrastructure</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow p-6 border-2 border-black">
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Skills Covered
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-6">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>REST APIs</li>
          <li>Front End Technologies</li>
          <li>Deployment</li>
          <li>Projects</li>
        </ul>
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Languages & Tools Covered
        </h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <img
              key={tool.name}
              src={tool.url}
              alt={tool.name}
              className="w-10 h-10"
            />
          ))}
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="w-full flex justify-center py-8">
      <a
        href="https://pentagonspace.in/mern-full-stack-developer-course"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
      >
        Enroll Now
      </a>
    </div>
  </section>
);

export default MernCourse;
