import React from "react";
import testingLogo from "../assets/imgs/TESTING.png"; // Local Software Testing logo import

const SoftwareTestingCourse = () => {
  const tools = [
    { name: "Manual Testing", url: "https://pentagonspace.in/assets/images/course_logo/software/Manual%20Testing.png" },
    { name: "Selenium", url: "https://pentagonspace.in/assets/images/course_logo/software/Selenium.png" },
    { name: "Java", url: "https://pentagonspace.in/assets/images/course_logo/java/Java.png" },
    { name: "JIRA", url: "https://www.wscubetech.com/blog/wp-content/uploads/2024/06/jira-1024x695.webp" },
    { name: "Maven", url: "https://pentagonspace.in/assets/images/course_logo/software/Maven%20Logo.png" },
    { name: "Jenkins", url: "https://images.seeklogo.com/logo-png/27/1/jenkins-logo-png_seeklogo-273560.png" },
    { name: "Git & GitHub", url: "https://pentagonspace.in/assets/images/course_logo/software/Git%20&%20Git%20Hub.png" },
    { name: "SQL", url: "https://pentagonspace.in/assets/images/course_logo/software/SQL.png" },
    { name: "Postman", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s" }
  ];

  const handleDownload = () => {
    const pdfUrl = "/software-testing-syllabus.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Software-Testing-Syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="software-testing-details" className="bg-white py-8">
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
            src={testingLogo}
            alt="Software Testing Logo"
            className="w-24 md:w-32 mb-3 md:mb-4 drop-shadow-lg"
          />
          <div className="w-full space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide px-2">
              Software Testing
            </h1>
            <p className="text-base md:text-xl font-semibold text-red-400">
              Code Your Way Up: Software Testing Course
            </p>
            <p className="text-xs md:text-base text-gray-200 px-2 md:px-0 leading-relaxed">
              Master Software Testing with our comprehensive training program featuring{" "}
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
            Software Testing
          </span>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {[
            { value: "400+", label: "Course Hours" },
            { value: "Hybrid", label: "Training Mode" },
            { value: "Beginner", label: "Skill Level" },
            { value: "10K+", label: "Learners" }
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
              Advanced Software Testing
            </h2>
            <p className="mb-4 md:mb-6 text-gray-700 leading-relaxed text-sm md:text-base">
              This comprehensive course takes you from beginner to advanced testing professional, 
              covering manual testing, automation with Selenium, Java programming, and industry-standard tools.
            </p>
            
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-red-500">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
              {[
                "400+ training hours",
                "Certified trainers",
                "Career guidance",
                "6 real projects",
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
                    "Manual Testing", "Automation", "Selenium", "Java", 
                    "Test Cases", "Bug Tracking", "API Testing", 
                    "Performance Testing", "CI/CD", "Agile Testing"
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
              Ready to start your Software Testing journey?
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://pentagonspace.in/software-testing-course"
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

export default SoftwareTestingCourse;