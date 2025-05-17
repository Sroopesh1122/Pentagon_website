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
          link: "https://online.pentagonspace.in/#contact-us",
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
      header: "Other Links",
      links: [
        {
          key: 1,
          label: "Treams & conditions",
          link: "https://online.pentagonspace.in/terms-and-conditions",
        },
        {
          key: 2,
          label: "Privacy Policy",
          link: "https://online.pentagonspace.in/privacy-policy",
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
          link: "https://x.com/pentagon_space",
        },
        {
          key: 2,
          label: "Facebook",
          link: "https://www.facebook.com/PentagonSpace",
        },
        {
          key: 3,
          label: "LinkedIn",
          link: "https://www.linkedin.com/company/pentagonspace/",
        },
        {
          key: 2,
          label: "Youtube",
          link: "https://www.youtube.com/c/PentagonSpaceBlr/featured",
        },
        {
          key: 2,
          label: "Instagram",
          link: "https://www.instagram.com/accounts/login/?next=%2Fpentagon_space%2F",
        },
      ],
    }
  ];



  const handleLinkClick=(link)=>{
   window.open(link, "_blank");
  }

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
                onClick={()=>handleLinkClick(links.link)}
              >
              
                {links.label } 
              </h1>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
};

export default PageFooter;
