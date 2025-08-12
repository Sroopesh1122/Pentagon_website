import axios from "axios";
import React, { useState } from "react";
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope, FaChevronDown, FaCheck, FaTimes, FaSpinner } from "react-icons/fa";
import { SERVER_URL } from "../utils/server";

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post(`${SERVER_URL}/enquiry/public/`, formData);
      if (response.data) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      const message = error?.response?.data?.error || "Something went wrong. Please try again later.";
      setStatus({ loading: false, success: false, error: message });
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a wide range of courses in cutting-edge technologies including Java Full Stack Development with Ai,Python Full Stack Development with Ai,Mern Full Stack Development with Ai,Software Testing and more. Visit our Courses page for detailed information."
    },
    {
      question: "How can I enroll in a course?",
      answer: "You can enroll directly through our website, visit our campus, or contact our admissions team at +91 9901066669 for assistance with the enrollment process."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we have a dedicated placement cell that works with top IT companies to help our students secure positions after course completion."
    },
    {
      question: "What are the payment options available?",
      answer: "We accept various payment methods including credit/debit cards, net banking, UPI, and EMI options. Campus payments can be made via cash or card."
    },
    {
      question: "Can I visit the campus before enrolling?",
      answer: "Absolutely! We encourage prospective students to visit our campus. Please call us to schedule a visit during our working hours."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Notification System */}
      <div className="fixed top-4 right-4 z-50 space-y-3 w-full max-w-md">
        {/* Success Notification */}
        {status.success && (
          <div className="animate-slideDown bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <FaCheck className="text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-green-800">Message Sent Successfully!</h3>
              <p className="text-sm text-green-600 mt-1">
                Thank you for contacting us. We'll get back to you soon.
              </p>
            </div>
            <button 
              onClick={() => setStatus(prev => ({ ...prev, success: false }))}
              className="text-green-400 hover:text-green-600"
            >
              <FaTimes />
            </button>
          </div>
        )}

        {/* Error Notification */}
        {status.error && (
          <div className="animate-slideDown bg-red-50 border border-red-200 rounded-lg shadow-lg p-4 flex items-start gap-3">
            <div className="bg-red-100 p-2 rounded-full">
              <FaTimes className="text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-red-800">Error Sending Message</h3>
              <p className="text-sm text-red-600 mt-1">
                {status.error}
              </p>
            </div>
            <button 
              onClick={() => setStatus(prev => ({ ...prev, error: null }))}
              className="text-red-400 hover:text-red-600"
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="w-full py-12 bg-gradient-to-r from-black to-gray-900 text-white animate-fadeIn">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideDown">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-slideUp">
            Have questions? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Column */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-black">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slideIn delay-100">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slideIn delay-150">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="animate-slideIn delay-200">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="animate-slideIn delay-250">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] animate-slideIn delay-300 ${
                    status.loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-rose-500 hover:bg-rose-600 text-white"
                  }`}
                >
                  {status.loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center cursor-pointer w-full text-left font-medium text-gray-800 hover:text-rose-500 focus:outline-none transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      <span>{faq.question}</span>
                      <span className={`transition-transform duration-200 ${activeIndex === index ? 'rotate-180 text-rose-500' : ''}`}>
                        <FaChevronDown className="text-rose-500" />
                      </span>
                    </button>

                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:w-1/2 animate-slideInRight">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-full">
                    <FaMapMarkerAlt className="text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">765, 8th Cross Rd, Govindaraja Nagar Ward, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040</p>
                    <a 
                      href="https://maps.google.com/?q=765, 8th Cross Rd, Govindaraja Nagar Ward, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-rose-500 hover:text-rose-600 text-sm font-medium"
                    >
                      View on Map →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-full">
                    <FaPhone className="text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">+91 9901066669</p>
                    <p className="text-gray-600">+91 82962 22234</p>
                    <a 
                      href="tel:+919901066669"
                      className="inline-block mt-2 bg-rose-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-rose-600 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-full">
                    <FaEnvelope className="text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">info@pentagonspace.in</p>
                    <a 
                      href="mailto:info@pentagonspace.in"
                      className="inline-block mt-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-3">Working Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  
                  <li className="flex justify-between py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-rose-500">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add these CSS animations to your global CSS file */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-250 {
          animation-delay: 0.25s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;