// Navbar.jsx
import React, { useState } from "react";
import Brand from "./Brand";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const menuItems = [
  {
    key: "Home",
    label: "HOME",
    path: "/",
  },
  {
    key: "aboutUs",
    label: "ABOUT US",
    path: "/about",
  },
  {
    key: "meetTeam",
    label: "MEET THE TEAM",
    path: "/meet-the-team",
  },
  {
    key: "courses",
    label: "Our UNIFIED PROGRAMS",
    path: "/courses",
  },
  {
    key: "branches",
    label: "BRANCHES",
    path: "/",
    scrollTo: "development-centers"
  },
];

const menuItemsLink = [
  {
    key: "LMS",
    label: "LMS PORTAL",
    path: "https://online.pentagonspace.in",
  },
  {
    key: "Student",
    label: "STUDENT PORTAL",
    path: "https://students.pentagonspace.in",
  },
];

const handleMenuItemLinkClick = (link) => {
  window.open(link, "_blank");
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBranchesClick = () => {
    if (window.location.pathname === "/") {
      // Already on home page, scroll to branches
      const section = document.getElementById("development-centers");
      if (section) {
        const offsetTop = section.offsetTop - 80; // Adjust for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    } else {
      // Navigate to home with state to scroll to branches
      navigate("/", { state: { scrollTo: "development-centers" } });
    }
    setNavbarOpen(false);
  };

  const handleNavigation = (item) => {
    if (item.key === "courses") {
      sessionStorage.setItem("showRocketAnimation", "yes");
      navigate(item.path);
    } else if (item.key === "branches") {
      handleBranchesClick();
    } else {
      navigate(item.path);
    }
    setNavbarOpen(false);
  };

  return (
    <>
      <section className="w-full flex justify-between items-center p-3">
        <Brand />
        <FaBars
          size={25}
          className="flex lg:hidden cursor-pointer"
          onClick={() => setNavbarOpen(true)}
        />
        <article className="hidden lg:flex justify-center items-center gap-5 uppercase font-[500] text-[0.9rem]">
          {menuItems.map((item) => (
            <div
              className="underline-nav cursor-pointer"
              key={item.key}
              onClick={() => handleNavigation(item)}
            >
              {item.label}
            </div>
          ))}

          {menuItemsLink.map((item) => (
            <div
              className="underline-nav cursor-pointer"
              key={item.key}
              onClick={() => handleMenuItemLinkClick(item.path)}
            >
              {item.label}
            </div>
          ))}
        </article>
      </section>

      {/* Mobile Menu */}
      <section
        className={`w-full fixed top-0 h-screen flex justify-end items-start bg-black/40 z-[1000] duration-400 ${
          navbarOpen ? "right-0" : "-right-full"
        }`}
        onClick={() => setNavbarOpen(false)}
      >
        <article
          className="w-[80%] max-w-sm h-full relative p-4 md:p-8 bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setNavbarOpen(false)}
          >
            <IoMdClose size={25} />
          </span>

          <div className="w-full flex flex-col gap-6 mt-12">
            {menuItems.map((item) => (
              <div
                className="text-lg font-medium py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                key={item.key}
                onClick={() => handleNavigation(item)}
              >
                {item.label}
              </div>
            ))}

            {menuItemsLink.map((item) => (
              <div
                className="text-lg font-medium py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                key={item.key}
                onClick={() => {
                  setNavbarOpen(false);
                  handleMenuItemLinkClick(item.path);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Navbar;