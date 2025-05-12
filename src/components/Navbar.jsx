import React, { useState } from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const menuItems = [
  {
    key: "courses",
    label: "COURSES",
    isLink: false,
    section: ".courses-section",
  },
  {
    key: "aboutUs",
    label: "ABOUT US",
    path: ".about-section",
  },
  {
    key: "verifyCertificate",
    label: "Verify Certificate",
    path: "/verifyCertificate",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
          {menuItems.map((item, idx) => (
            <Link className="underline-nav" key={item.key} to={item.path}>
              {item.label}
            </Link>
          ))}
          <button>DOWNLOAD APP</button>
          <button>LOGIN</button>
        </article>
      </section>

      <section
        className={`w-full fixed top-0 h-screen flex justify-end items-start bg-black/40 z-[1000] duration-400 ${
          navbarOpen ? "right-0" : "-right-full"
        }`}
        onClick={() => setNavbarOpen(false)}
      >
        <article
          className="w-fit h-full relative p-4 md:p-8 bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setNavbarOpen(false)}
          >
            <IoMdClose size={25} />
          </span>

          <div className="w-full flex justify-start items-start flex-col gap-3">
            {menuItems.map((item, idx) => (
              <Link
                className="underline-nav py-2 px-4 shadow rounded-2xl"
                key={item.key}
                to={item.path}
              >
                {item.label}
              </Link>
            ))}

            <button className="py-2 px-4 shadow rounded-2xl">
              DOWNLOAD APP
            </button>

            <button className="py-2 px-4 shadow rounded-2xl">LOGIN</button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Navbar;

const MobileNavbar = () => {};
