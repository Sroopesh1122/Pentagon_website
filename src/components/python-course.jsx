import React from "react";
import pythonLogo from "../assets/imgs/PYTHON.png";

const PythonCourse = () => {
  const handleDownload = () => {
    const pdfUrl = "/python-full-stack-syllabus.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Python-Full-Stack-Syllabus.pdf";
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
            backgroundImage:
              "url('https://pentagonspace.in/assets/images/banner/banner1.jpg')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-3 bg-white rounded-full shadow-lg">
              <img
                src={pythonLogo}
                alt="Python Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Python Full Stack Development
            </h1>
            <p className="text-xl text-red-400 font-medium mb-6">
              Code Your Way Up: Python Full Stack Developer Course
            </p>
            <p className="text-lg text-gray-300 max-w-3xl">
              Master Python Full Stack Development with our comprehensive training program featuring{" "}
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
            <a href="/" className="hover:text-red-500 hover:underline">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <a href="/courses" className="hover:text-red-500 hover:underline">
              Courses
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-red-500 font-medium">Python Full Stack</span>
          </div>
        </div>
      </nav>

      {/* Key Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Course Hours", icon: "⏱️" },
              { value: "Hybrid", label: "Training Mode", icon: "💻" },
              { value: "Beginner", label: "Skill Level", icon: "📈" },
              { value: "15K+", label: "Learners", icon: "👥" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition-all"
              >
                <span className="block text-2xl mb-2">{item.icon}</span>
                <span className="block text-3xl font-bold text-gray-900 mb-1">
                  {item.value}
                </span>
                <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {item.label}
                </span>
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
                  Advanced Python Full Stack Development
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  This course takes you from beginner to advanced Python developer, covering Django, Flask, React, SQL, and deployment strategies. Learn backend APIs, frontend integration, and data handling with Pandas and NumPy.
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-red-500 mr-3"></span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "500+ training hours",
                      "Certified trainers",
                      "Career guidance",
                      "8 real time projects",
                      "Mock interviews",
                      "Interview preparation",
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
                    "Python",
                    "Django",
                    "Flask",
                    "React",
                    "REST APIs",
                    "Frontend",
                    "Database Design",
                    "Pandas",
                    "NumPy",
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
                  {[
                    {
                      src: "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
                      alt: "Python",
                    },
                    {
                      src: "https://miro.medium.com/v2/resize:fit:400/1*3N0QfS0dJswEpVyelRXLsQ.png",
                      alt: "Django",
                    },
 
                    {
                      src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
                      alt: "React",
                    },
                    {
                      src: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png",
                      alt: "JavaScript",
                    },
                    {
                      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png",
                      alt: "Pandas",
                    },
                    {
                      src: "https://ih1.redbubble.net/image.1949505410.1830/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
                      alt: "NumPy",
                    },
                    {
                      src: "https://tse4.mm.bing.net/th/id/OIP.K0bK7OGYkF9YXIc608wZ0gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3ssss",
                      alt: "HTML & CSS",
                    },
                    {
                      src: "https://thafd.bing.com/th/id/OIP.dphNSJAWu3jIw0fmYbuOlAHaHa?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
                      alt: "Bootstrap",
                    },
                    {
                      src: "https://i.pinimg.com/originals/ac/b3/51/acb3513e5a2664ba59bec11222863a40.jpg",
                      alt: "Git & GitHub",
                    },
                    {
                      src: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
                      alt: "SQL",
                    },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:shadow-md transition"
                    >
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        className="w-12 h-12 object-contain mb-1"
                      />
                      <span className="text-xs text-center text-gray-600">
                        {tech.alt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to start your Python Full Stack journey?
                </h2>
                <p className="text-red-100 max-w-lg">
                  Join thousands of successful graduates who transformed their careers with our comprehensive Python Full Stack program.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#enroll"
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
      </section> */}
    </div>
  );
};

export default PythonCourse;
