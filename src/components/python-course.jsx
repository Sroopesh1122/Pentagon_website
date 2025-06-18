import React from "react";

const PythonCourse = () => (
  <section id="python-full-stack-details" className="bg-[#f7f7fa] py-0 md:py-8">
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
          src="https://pentagonspace.in/assets/images/course_logo/pythoni.png"
          alt="Python Logo"
          className="w-24 md:w-32 mb-4 drop-shadow-lg"
        />
        <h1 className="text-xl md:text-3xl font-extrabold mb-2 tracking-wider uppercase">
          Python Full Stack Development
        </h1>
        <p className="text-base md:text-lg font-bold mb-4 max-w-2xl text-red-500 uppercase tracking-wide">
          Code Your Way Up: Python Full Stack Developer Course
        </p>
        <p className="max-w-2xl text-sm md:text-base text-gray-200">
          Pentagon Space gives you a complete Python Full Stack Developers
          Certification & Training course. This course will educate you on the
          main basics of Python, Conditional Statements, Data Operations, Django
          & also Shell Scripting. Best Online Python Course will also give you
          real hand experience on live projects and prepare you for a fantastic
          career as a professional Python programmer.
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
        <a className="hover:underline font-bold text-black" href="#">
          courses
        </a>
        <span>/</span>
        <span className="font-semibold text-red-500">
          Full Stack Python Development
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
          Advanced Python Full Stack Development Course
        </h2>
        <p className="mb-6 text-gray-800">
          This Best Online Python Course covers the fundamentals of Python and
          gives guidance on how to apply it in real-world applications. Our
          programming course provides you with the basic concept of Python from
          Beginner, Intermediate & Advanced levels. Also, our Python training
          curriculum is considered to be the best in the industry.
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
          <li>State-of-art infrastructure</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow p-6 border-2 border-black">
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Skills Covered
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-6">
          <li>Core Python</li>
          <li>Advance Python</li>
          <li>Django</li>
          <li>Rest API</li>
          <li>Front End Technologies</li>
          <li>React JS</li>
          <li>SQL</li>
          <li>Projects</li>
        </ul>
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Languages & Tools Covered
        </h3>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://pentagonspace.in/assets/images/courses/python_icon.png"
            alt="Python"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/2.webp"
            alt="Angular FSD"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/5.webp"
            alt="Spring"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/bootstrap.jpg"
            alt="Bootstrap"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/Data%20analytics%20logo.png"
            alt="Data Analytics"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/Numpy%20Pandas.png"
            alt="Numpy Pandas"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/AWS%20Logo.png"
            alt="AWS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/DEVOPS%20AWS%20logo.png"
            alt="DevOps AWS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/React%20JS.png"
            alt="React JS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/4.png"
            alt="Spring Boot"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/7.webp"
            alt="Javascript"
            className="w-10 h-10"
          />
          <img
            src="https://www.simplilearn.com/ice9/tools_covered/GitHub.png"
            alt="Git Hub"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/1.webp"
            alt="HTML 5"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/2%20(1).webp"
            alt="CSS3"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/courses/django.jpg"
            alt="Django"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="container mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-black rounded-xl p-8 shadow-lg">
      <div className="text-white text-xl font-semibold uppercase tracking-wide">
        Ready to start your journey as a Python Full Stack Developer?
      </div>
      <div className="flex gap-4">
        <a
          href="#enroll"
          className="bg-white text-black font-bold px-6 py-3 rounded-full shadow hover:bg-red-500 hover:text-white transition border-2 border-black"
        >
          Enroll Now
        </a>
        <a
          href="#syllabus"
          className="bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-black hover:text-red-500 transition border-2 border-red-500"
        >
          Download Syllabus
        </a>
      </div>
    </div>
  </section>
);

export default PythonCourse;
