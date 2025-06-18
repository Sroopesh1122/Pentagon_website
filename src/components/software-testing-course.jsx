import React from "react";

const SoftwareTestingCourse = () => (
  <section id="software-testing-details" className="bg-[#f7f7fa] py-0 md:py-8">
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
          src="https://pentagonspace.in/assets/images/course_logo/softwarei.png"
          alt="Software Testing Logo"
          className="w-24 md:w-32 mb-4 drop-shadow-lg"
        />
        <h1 className="text-xl md:text-3xl font-extrabold mb-2 tracking-wider uppercase">
          Software Testing
        </h1>
        <p className="text-base md:text-lg font-bold mb-4 max-w-2xl text-red-500 uppercase tracking-wide">
          Code Your Way Up: Software Testing Course
        </p>
        <p className="max-w-2xl text-sm md:text-base text-gray-200">
          This Software Testing Course is perfectly designed to provide you a
          complete knowledge of Software Testing Technologies such as Core Java,
          Web driver, Selenium, Framework, Automation frameworks, Testing, Page
          Object Model (POM), Jenkins, Jira Bugzilla, which help to build robust
          testing frameworks.
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
        <span className="font-semibold text-red-500">Software Testing</span>
      </div>
    </div>

    {/* Course Highlights */}
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 border-black">
        <span className="text-xl font-extrabold text-black mb-1">400+</span>
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
        <span className="text-xl font-extrabold text-black mb-1">10,000+</span>
        <span className="text-gray-800 font-semibold uppercase">Learners</span>
      </div>
    </div>

    {/* Overview & Features */}
    <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-extrabold mb-4 text-black uppercase tracking-wide">
          Advanced Software Testing Course
        </h2>
        <p className="mb-6 text-gray-800">
          This Advanced Software Testing Course is designed to take you from a
          beginner to an advanced level in software testing. The course covers
          essential concepts and skills, including Core Java, Selenium,
          Automation frameworks, Testing, Jenkins, Jira, Bugzilla, and more. You
          will gain hands-on experience with real-world projects and challenges.
        </p>
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          <li>Over 400 hours of intensive training</li>
          <li>Training by certified trainers</li>
          <li>Career Guidance by Industry experts</li>
          <li>Special programming classes</li>
          <li>6 technical projects</li>
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
          <li>Core Java</li>
          <li>Selenium</li>
          <li>Automation Frameworks</li>
          <li>Testing</li>
          <li>Jenkins</li>
          <li>Jira</li>
          <li>Bugzilla</li>
          <li>Projects</li>
        </ul>
        <h3 className="font-bold text-lg mb-2 text-red-500 uppercase">
          Languages & Tools Covered
        </h3>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/Testing%20Logo.png"
            alt="Testing Logo"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/Manual%20Testing.png"
            alt="Manual Testing"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/HTML%20&%20CSS.png"
            alt="HTML & CSS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/Selenium.png"
            alt="Selenium"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/Maven%20Logo.png"
            alt="Maven"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/HTML%20&%20CSS.png"
            alt="HTML & CSS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/mern/HTML.png"
            alt="HTML"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/SQL.png"
            alt="SQL"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/software/Git%20&%20Git%20Hub.png"
            alt="Git & GitHub"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="w-full flex justify-center py-8">
      <a
        href="https://pentagonspace.in/software-testing-course"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
      >
        Enroll Now
      </a>
    </div>
  </section>
);

export default SoftwareTestingCourse;
