import React from "react";
import SocialIcons from "../assets/social-icons.png"; // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 relative font-poppins text-[18px] leading-4 font-normal">
      {/* Top Section: Border + Go to Top */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <div className="text-transparent">invisible</div>
        <a
          href="#top"
          className="bg-gradient-to-r from-[#281000] via-[#C0971C] via-50% to-[#281000] text-black rounded-full px-12 py-6 font-bold transition"
        >
          Go to Top
        </a>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5   gap-6">
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
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#281000] via-[#C0971C] via-50% to-[#281000] font-poppins font-semibold text-[18px] leading-[100%] mb-2">
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

      {/* Bottom Section: Email left + Social icons right */}
      <div className="flex justify-between items-center mt-8">
        <div className="text-sm font-medium flex items-center gap-2">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#281000] via-[#C0971C] via-50% to-[#281000]"
          >
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
    </footer>
  );
};

export default Footer;
