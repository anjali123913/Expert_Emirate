import React from "react";
import arrowImg from "../../assets/arrow.png";
import bgImg from "../../assets/Rectanglecutomer.png";

export default function CustomerDashboard() {
  return (
    <div
      className="group flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 border border-gray-900 rounded-3xl transition-all duration-500 hover:border-yellow-500
        max-w-[90vw] md:max-w-[3300px] mx-auto"
      style={{
        height: "388px",
        marginLeft: "-40px",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[60%]">
        <h1 className="text-2xl md:text-3xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FFE976] group-hover:via-[#C0971C] group-hover:to-[#FFE976] group-hover:bg-clip-text group-hover:text-transparent">
          ABOUT US
        </h1>

        <p className="text-sm md:text-base mt-4 text-white leading-relaxed">
          AT EXPERT EMIRATES, WE DON’T JUST PROVIDE FOREX AND CRYPTO SIGNALS— 
          WE UNLOCK PROFITABLE OPPORTUNITIES TAILORED FOR EVERY TRADER. BACKED 
          BY CUTTING-EDGE AI, EXPERT ANALYSIS, AND MARKET PRECISION, OUR SIGNALS 
          TURN UNCERTAINTY INTO CALCULATED SUCCESS.
        </p>

        {/* GOLDEN BUTTON */}
        <div className="mt-6 inline-block p-[2px] rounded-full bg-[linear-gradient(270deg,#281000_-4.65%,#C0971C_23.29%,#FFE976_49.59%,#C0971C_76.98%,#281000_104.92%)] shadow-[0_0_17px_rgba(254,214,0,0.3)]">
          <button className="w-40 h-11 rounded-full bg-[linear-gradient(270deg,#281000_-4.65%,#C0971C_23.29%,#FFE976_49.59%,#C0971C_76.98%,#281000_104.92%)] text-black text-sm font-semibold tracking-wide transition-all duration-500 hover:scale-105">
            About Us
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-[320px] mt-6 md:mt-0">
        <img
          src={arrowImg}
          alt="Arrow"
          className="w-full h-auto transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}
