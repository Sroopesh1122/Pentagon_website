import React from "react";

const JavaCourse = () => (
  <section id="java-full-stack-details" className="bg-[#f7f7fa] py-0 md:py-8">
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
          src="https://pentagonspace.in/assets/images/course_logo/java/pngwing.com%20(1).png"
          alt="Java Logo"
          className="w-24 md:w-32 mb-4 drop-shadow-lg"
        />
        <h1 className="text-xl md:text-3xl font-extrabold mb-2 tracking-wider uppercase">
          Java Full Stack Development
        </h1>
        <p className="text-base md:text-lg font-bold mb-4 max-w-2xl text-red-500 uppercase tracking-wide">
          Code Your Way Up: Java Full Stack Developer Course
        </p>
        <p className="max-w-2xl text-sm md:text-base text-gray-200">
          If you're looking for the best Java training program with{" "}
          <span className="text-red-500 font-bold">
            100% placement assistance
          </span>{" "}
          to become a master of Java Full Stack Development for any online
          computing platform, this course is perfect for you. This comprehensive
          training provides a strong foundation in the Java programming
          language, widely used in software development.
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
          Full Stack Java Development
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
          Advanced Java Full Stack Development Course
        </h2>
        <p className="mb-6 text-gray-800">
          This Advanced Java Full Stack Development Course is designed to take
          you from a beginner to an advanced level in Java. The course covers
          essential concepts and skills, including Core Java 8, loops,
          operators, arrays, constructors, and methods. Additionally, you will
          gain hands-on experience with JUNIT and JDBC frameworks, preparing you
          for real-world projects and challenges.
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
          <li>Core Java and Java 8</li>
          <li>J2EE</li>
          <li>Spring Boot</li>
          <li>Micro Services</li>
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
            src="https://pentagonspace.in/assets/images/course_logo/java/pngwing.com%20(1).png"
            alt="React"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/J2EE.png"
            alt="J2EE"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/HTML%20&%20CSS.png"
            alt="HTML & CSS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/JavaScript.png"
            alt="JavaScript"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/React%20JS.png"
            alt="React JS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/J%20Unit%20Logo.png"
            alt="JUNIT"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/AWS%20Logo.png"
            alt="AWS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/DEVOPS%20AWS%20logo.png"
            alt="DevOps AWS"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Dockers%20logo.png"
            alt="Docker"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Git%20&%20Git%20Hub.png"
            alt="Git & GitHub"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/apache_kafka_vertical_logo_icon_169585.webp"
            alt="Kafka"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/jenkins-logo.png"
            alt="Jenkins"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Jira_Logo.png"
            alt="Jira"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Kubernetes-Logo.png"
            alt="Kubernetes"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Log4j-png.webp"
            alt="Log4j"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Maven%20Logo.png"
            alt="Maven"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/PL-SQL-Commands1.png"
            alt="PL-SQL"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/sonarQube.png"
            alt="SonarQube"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Spring%20Boot.png"
            alt="Spring Boot"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/Spring.png"
            alt="Spring"
            className="w-10 h-10"
          />
          <img
            src="https://pentagonspace.in/assets/images/course_logo/java/SQL.png"
            alt="SQL"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="container mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-black rounded-xl p-8 shadow-lg">
      <div className="text-white text-xl font-semibold uppercase tracking-wide">
        Ready to start your journey as a Java Full Stack Developer?
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

export default JavaCourse;
