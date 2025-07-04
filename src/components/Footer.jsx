import React from "react";
import SocialIcons from "../assets/social-icons.png"; // Update path if needed
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";

const Footer = () => {
  const TopDefaultStyle = {
    background: "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
    border: "1px solid #C0971C",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "black",
    borderRadius: "9999px"
  };

  const TopHoverStyle = {
    background: "rgba(0, 0, 0, 1)",
    border: "1px solid #FFE976",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "white",
    borderRadius: "9999px"
  };
  return (
    <footer
      className="text-white px-4 sm:px-6 py-10 font-poppins text-base leading-4 font-normal"
      style={{ background: "rgba(10,9,13,1)" }}
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b border-gray-700 pb-4 gap-4 sm:gap-0">
        <div className="w-40 sm:w-48">
          <img src={logo} alt="logo expert emirates" className="w-full h-auto" />
        </div>
        {/* <a
          href="#top"
          className="text-black rounded-full px-6 py-2 text-sm sm:text-base font-bold transition"
          style={{
            background:
              "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
          }}
        >
          Go to Top
        </a> */}
        {/* <a
  href="#top"
  className="text-black rounded-full px-6 py-2 text-sm sm:text-base font-bold shadow-[0px_0px_17px_1.7px_rgba(254,214,0,0.20)] shadow-[inset_0px_0px_21px_0px_rgba(255,215,0,0.20)] outline outline-[0.86px] outline-offset-[-0.86px] outline-yellow-600/50"
  style={{
    background:
      "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
    border: "1px solid",
    borderImageSource:
      "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)",
  }}
>
  Go to Top */}

  <a
  href="#top"
  className="text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-[0px_0px_17px_1.7px_rgba(254,214,0,0.20)] shadow-[inset_0px_0px_21px_0px_rgba(255,215,0,0.20)] outline outline-[0.86px] outline-offset-[-0.86px] outline-yellow-600/50"
  style={{
    background:
      "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
    border: "1px solid",
    borderImageSource:
      "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)"
  }}
>
  Go to Top
</a>

      </div>

      {/* Divider */}
      {/* <div className="bg-gradient-to-r from-[#070707] via-[#474646] to-[#1f1e1e] w-full sm:w-5/6 mx-auto my-5 h-[1px] rounded-full" /> */}

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm sm:text-base">
        {[
          { title: "Trade", items: ["Dashboard"] },
          {
            title: "Pages",
            items: ["Home", "Services", "Forecasts", "FAQ", "Careers", "About", "Support"],
          },
          {
            title: "Products",
            items: [
              "Forex",
              "Comex",
              "Cryptocurrency",
              "Portfolio Management",
              "Trading Bot",
              "Copy Trading",
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
            <h3 className="text-lg font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent mb-1">
              {title}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item}>
                  {item === "Home" || item === "home" || item === "Comex" ? (
                    <Link to={`/`}>{item}</Link>
                  ) : (
                    <Link to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>{item}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Email and Social Icons moved here */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
        <div className="text-sm font-medium flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#281000] via-[#C0971C] to-[#281000]">
            📧
          </span>
          <span className="text-gray-300">info@expertemirates.com</span>
        </div>
        <img src={SocialIcons} alt="Social Media Icons" className="h-10 w-auto" />
      </div>

      {/* Divider */}
      <div className="bg-[#2a2929] w-full sm:w-5/6 mx-auto mt-6 h-[1px] rounded-full" />

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs pt-6 gap-2 sm:gap-0 text-gray-400 text-center sm:text-left">
        <p className="text-[13px]">
          © 2005-2025 MEX Group Worldwide Limited. All rights reserved.
        </p>
        <div className="flex gap-2 items-center text-[13px]">
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <span>|</span>
          <Link to={"/terms-and-condition"}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
