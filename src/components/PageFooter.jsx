import React from "react";
import { FaTwitter } from "react-icons/fa";

const PageFooter = () => {
  const FOOTER_LINKS = [
    {
      key: 1,
      header: "Useful Links",
      links: [
        {
          key: 1,
          label: "Contact Us",
          link: "",
        },
        {
          key: 2,
          label: "Login",
          link: "",
        },
      ],
    },
    {
      key: 2,
      header: "Other Links",
      links: [
        {
          key: 1,
          label: "Treams & conditions",
          link: "",
        },
        {
          key: 2,
          label: "Privacy Policy",
          link: "",
        },
      ],
    },
    {
      key: 3,
      header: "Social Links",
      links: [
        {
          key: 1,
          label: "Twitter",
          link: "",
        },
        {
          key: 2,
          label: "Facebook",
          link: "",
        },
        {
          key: 3,
          label: "LinkedIn",
          link: "",
        },
        {
          key: 2,
          label: "Youtube",
          link: "",
        },
        {
          key: 2,
          label: "Instagram",
          link: "",
        },
      ],
    }
  ];

  return (
    <section className="w-full relative max-w-[1800px] mx-auto bg-[#1e1f21] pt-[30px]">
      <div className="w-full p-[20px] text-white grid grid-cols-2 md:grid-cols-3 gap-[10px]">
        {FOOTER_LINKS.map((footerLinks, idx) => (
          <div key={footerLinks.key} className="w-full flex flex-col justify-start items-center">
            <h1 className="mb-[20px] text-[1.4rem]">{footerLinks.header}</h1>
            {footerLinks.links.map((links, idx) => (
              <h1
                key={links.key}
                className="text-[0.9rem] cursor-pointer my-[10px] hover:underline underline-offset-2"
              >
              
                {links.label}
              </h1>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
};

export default PageFooter;
