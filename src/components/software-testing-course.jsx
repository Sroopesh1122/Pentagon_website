import React from "react";
import testingLogo from "../assets/imgs/TESTING.png";

const SoftwareTestingCourse = () => {
  const tools = [
    { name: "Manual Testing", url: "https://pentagonspace.in/assets/images/course_logo/software/Manual%20Testing.png" },
    { name: "Selenium", url: "https://pentagonspace.in/assets/images/course_logo/software/Selenium.png" },
    { name: "Java", url: "https://pentagonspace.in/assets/images/course_logo/java/Java.png" },
    { name: "JIRA", url: "https://www.wscubetech.com/blog/wp-content/uploads/2024/06/jira-1024x695.webp" },
    { name: "Maven", url: "https://pentagonspace.in/assets/images/course_logo/software/Maven%20Logo.png" },
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://pentagonspace.in/assets/images/banner/banner1.jpg')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-3 bg-white rounded-full shadow-lg">
              <img
                src={testingLogo}
                alt="Software Testing Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Software Testing
            </h1>
            <p className="text-xl text-red-400 font-medium mb-6">
              Code Your Way Up: Software Testing Course
            </p>
            <p className="text-lg text-gray-300 max-w-3xl">
              Master Software Testing with our comprehensive training program featuring{" "}
              <span className="text-red-400 font-semibold">
                100% placement assistance
              </span>.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-500 hover:underline">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/courses" className="hover:text-red-500 hover:underline">Courses</a>
            <span className="text-gray-400">/</span>
            <span className="text-red-500 font-medium">Software Testing</span>
          </div>
        </div>
      </nav>

      {/* Key Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "400+", label: "Course Hours", icon: "⏱️" },
              { value: "Hybrid", label: "Training Mode", icon: "💻" },
              { value: "Beginner", label: "Skill Level", icon: "📈" },
              { value: "10K+", label: "Learners", icon: "👥" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition-all"
              >
                <span className="block text-2xl mb-2">{item.icon}</span>
                <span className="block text-3xl font-bold text-gray-900 mb-1">{item.value}</span>
                <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced Software Testing
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  This comprehensive course takes you from beginner to advanced testing professional,
                  covering manual testing, automation with Selenium, Java programming, and industry-standard tools.
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-red-500 mr-3"></span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "400+ training hours",
                      "Certified trainers",
                      "Career guidance",
                      "6 real projects",
                      "Mock interviews",
                      "Interview prep",
                      "100% placement",
                      "Technical grooming",
                      "Modern infrastructure",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-red-500 mr-3"></span>
                  Skills Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Manual Testing", "Automation", "Selenium", "Java",
                    "Test Cases", "Bug Tracking", "API Testing",
                    "Performance Testing", "Agile Testing"
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-red-500 mr-3"></span>
                  Technologies
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:shadow-md transition"
                    >
                      <img
                        src={tool.url}
                        alt={tool.name}
                        className="w-12 h-12 object-contain mb-1"
                      />
                      <span className="text-xs text-center text-gray-600">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to start your Software Testing journey?
                </h2>
                <p className="text-red-100 max-w-lg">
                  Join thousands of successful graduates who transformed their careers with our Software Testing program.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="https://pentagonspace.in/software-testing-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition text-center"
                >
                  Enroll Now
                </a>
                <button
                  onClick={handleDownload}
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition text-center"
                >
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareTestingCourse;
