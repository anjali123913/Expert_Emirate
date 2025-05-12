import React from "react";
import SocialIcons from "../assets/social-icons.png"; // Update path if needed
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 relative font-poppins text-lg leading-4 font-normal">
      {/* Top Section: Border + Go to Top */}
      <div className="flex justify-between items-center mb-6  border-gray-700 pb-4">
        <div className="w-48 h-full">
          <img src={logo} alt="logo expert emirates" className="w-full h-full"/>
        </div>
        <a
          href="#top"
          className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-7 py-3 font-bold transition"
        >
          Go to Top
        </a>
      </div>
<div className="bg-gradient-to-r from-[#070707] via-[#474646] via-50% to-[#1f1e1e] w-5/6 mx-auto my-5 h-[0.5px] rounded-l-full rounded-r-full"/>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5   gap-6">
        {[
          { title: "Trade", items: ["Dashboard"] },
          {
            title: "Pages",
            items: [
              "Home",
              "Services",
              "Forecasts",
              "FAQ",
              "Careers",
              "About",
              "Support",
            ],
          },
          {
            title: "Products",
            items: [
              "Forex",
              "Comex",
              "Cryptocurrency",
              "Portfolio Management",
              "Trading Bot",
              "Funded Accounts",
            ],
          },
          {
            title: "Platform",
            items: ["MT4 Platform", "MT5 Platform"],
          },
          {
            title: "Accounts",
            items: ["Standard", "Pro", "Ultra"],
          },
        ].map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-lg font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent">
              {title}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

<div className=" bg-[#2a2929] w-5/6 mx-auto mt-5 h-[0.5px] rounded-l-full rounded-r-full"/>
      {/* Bottom Section: Email left + Social icons right */}
      <div className="flex justify-between items-center mt-8 ">
        <div className="text-sm font-medium flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#281000] via-[#C0971C] via-50% to-[#281000]">
            📧
          </span>
          <span className="text-gray-300">info@expertemirates.com</span>
        </div>
        <img
          src={SocialIcons}
          alt="Social Media Icons"
          className="h-12 w-auto"
        />
      </div>
      <div className="flex items-center justify-between text-xs py-5 ">
        <p className="font-medium text-[14px] leading-[100%] tracking-[0%] font-[Poppins]">
          Copyright © : 2005-2025 MEX Group Worldwide Limited. All rights
          reserved.
        </p>
        <div className="flex items-center justify-center gap-1 font-medium text-[14px] leading-[100%] tracking-[0%] font-[Poppins]">
          <Link to={"/privacy-policy"} className="">Privacy Policy</Link>
          <span>|</span>
          <Link to={"/terms-and-condition"}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
