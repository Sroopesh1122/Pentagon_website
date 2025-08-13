import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PageFooter = () => {
  const navigate = useNavigate();

  const FOOTER_LINKS = [
    {
      key: 1,
      header: "Useful Links",
      links: [
        {
          key: 1,
          label: "Contact Us",
          link: "/contact",
        },
        {
          key: 2,
          label: "LMS Portal",
          link: "https://online.pentagonspace.in",
        },
      ],
    },
    {
      key: 2,
      header: "Connect With Us",
      links: [
        {
          key: 1,
          label: "Twitter",
          link: "https://x.com/pentagon_space",
          icon: <FaTwitter className="mr-2" />,
        },
        {
          key: 2,
          label: "Facebook",
          link: "https://www.facebook.com/PentagonSpace",
          icon: <FaFacebook className="mr-2" />,
        },
        {
          key: 3,
          label: "LinkedIn",
          link: "https://www.linkedin.com/company/pentagonspace/",
          icon: <FaLinkedin className="mr-2" />,
        },
        {
          key: 4,
          label: "YouTube",
          link: "https://www.youtube.com/c/PentagonSpaceBlr/featured",
          icon: <FaYoutube className="mr-2" />,
        },
        {
          key: 5,
          label: "Instagram",
          link: "https://www.instagram.com/pentagon_space/?hl=en",
          icon: <FaInstagram className="mr-2" />,
        },
      ],
    },
  ];

  const BRANCHES = [
    {
      key: 1,
      name: "Head Office (Vijaynagar)",
      address:
        "765, 8th Cross Rd, Govindaraja Nagar Ward, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040",
      phone: "+91 9901066669",
      email: "info@pentagonspace.in",
    },
    {
      key: 2,
      name: "BTM Layout",
      address: "Site No 24, Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076",
      phone: "+91 82962 22234",
      email: "info@pentagonspace.in",
    }
  ];

  const handleLinkClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };

  return (
    <footer className="w-full bg-[#1e1f21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section - Reduced gap between columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"> {/* Changed gap-6 to gap-4 */}
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">PS</span>
              </div>
              <h2 className="text-2xl font-bold">Pentagon Space</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of tech professionals with
              industry-relevant skills and training.
            </p>
            <div className="flex space-x-4">
              {FOOTER_LINKS[1].links.map((social) => (
                <a
                  key={social.key}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300"
                  aria-label={social.label}
                >
                  {React.cloneElement(social.icon, { size: 20 })}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links - Adjusted to be closer to Branches */}
          <div className="md:col-span-1 pr-4"> {/* Added right padding */}
            <h3 className="text-lg font-semibold mb-3 border-b border-red-600 pb-2 inline-block">
              {FOOTER_LINKS[0].header}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS[0].links.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleLinkClick(link.link)}
                    className="text-gray-400 hover:text-white cursor-pointer hover:underline transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches - Moved closer to Useful Links */}
          <div className="md:col-span-2 pl-4"> {/* Added left padding */}
            <h3 className="text-lg font-semibold mb-3 border-b border-red-600 pb-2 inline-block">
              Our Branches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {BRANCHES.map((branch) => (
                <div key={branch.key} className="text-gray-400">
                  <h4 className="font-medium text-white mb-1">{branch.name}</h4>
                  <div className="flex items-start mb-1">
                    <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                    <p>{branch.address}</p>
                  </div>
                  <div className="flex items-center mb-1">
                    <FaPhone className="mr-2" />
                    <a href={`tel:${branch.phone}`} className="hover:underline">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="hover:underline"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-xl border-2 border-red-600">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4206.874074200479!2d77.542394!3d12.975601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de62ed4132b%3A0x635bb954e1ba07ff!2s765%2C%208th%20Cross%20Rd%2C%20Govindaraja%20Nagar%20Ward%2C%20MC%20Layout%2C%20Vijayanagar%2C%20Bengaluru%2C%20Karnataka%20560040!5e1!3m2!1sen!2sin!4v1754895135500!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Pentagon Space pvt ltd. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => handleLinkClick("/terms")}
              className="text-gray-400 hover:text-red-500 cursor-pointer text-sm transition-colors duration-300"
            >
              Terms of Service
            </button>
            <button
              onClick={() => handleLinkClick("/privacy")}
              className="text-gray-400 hover:text-red-500 cursor-pointer text-sm transition-colors duration-300"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;