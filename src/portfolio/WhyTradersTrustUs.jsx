import React from "react";
import TrustedIcon from "../assets/portfolio/trust/trusted.png";
import GlobalIcon from "../assets/portfolio/trust/global.png";
import PerformanceIcon from "../assets/portfolio/trust/performance.png";

const WhyTradersTrustUs = () => {
  return (
    <div className="bg-black min-h-screen w-full py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-[1250px] bg-black rounded-[20px] px-4 md:px-10 py-10 ">
        {/* Heading */}
        <h2 className="text-center font-poppins font-semibold text-[32px] leading-[42px] tracking-[0.12em]">
          <span className="bg-gradient-to-b from-[#281000] via-[#C0971C] via-30% to-[#FFE976] bg-clip-text text-transparent">
            Why Thousands of Traders <br /> Trust Expert Emirates
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-white text-center text-[15px] leading-[24px] max-w-4xl mx-auto mt-4">
          We provide elite trading solutions with cutting-edge technology,
          professional strategies, and expert guidance. Our services empower
          traders with high-accuracy Forex, Commodities, and Crypto signals,
          advanced portfolio management, AI-driven trading bots, and funded
          account programs to help you trade with confidence.
        </p>

        {/* Cards */}
        <div className="mt-10 flex flex-col  gap-4">
          {[
            {
              icon: TrustedIcon,
              title: "Most Trusted & Regulated Trading Services",
              desc: "We ensure secure and transparent trading with top-tier regulated partners and the best funded account programs in the industry. Our team has extensive experience in market analysis, risk management, and trade execution, ensuring maximum profitability for our clients.",
            },
            {
              icon: GlobalIcon,
              title: "Global Reach & Expert Support",
              desc: "With a strong international presence, we assist traders worldwide in navigating the financial markets. Our services are tailored to meet the needs of both beginners and experienced traders, helping them achieve consistent profits through expert insights and AI-powered automation.",
            },
            {
              icon: PerformanceIcon,
              title: "Daily Trading Volume & Performance",
              desc: "We deliver high-performance trading solutions with exceptional accuracy and record-breaking profitability. By leveraging institutional-grade trading tools and strategies, we help our clients scale their trading accounts while managing risk efficiently.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-[#1E1D24] rounded-3xl px-6 py-3 border border-t-yellow-200 border-l-black border-r-black border-b-yellow-200 "
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-[80px] h-[80px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <div className="ml-5">
                <h3 className="text-white text-[16px] md:text-[18px] font-semibold leading-[24px] mb-2">
                  {item.title}
                </h3>
              </div>
              {/* Vertical Line */}
              <div className="w-[2px] h-[100px] bg-[#fff] mx-6" />

              {/* Content */}
              <div>
                <p className="text-[#CCCCCC] text-[14px] leading-[22px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTradersTrustUs;
