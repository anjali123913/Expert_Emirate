import React from "react";
import arrowImg from "../../assets/arrow.png";
import bgImg from "../../assets/Rectanglecutomer.png";

export default function CustomerDashboard() {
  return (
    <div
      className="group flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 md:px-12 lg:px-20 py-10 border border-gray-900 rounded-3xl transition-all duration-500 hover:border-yellow-500 max-w-[95vw] md:max-w-[1300px] mx-auto"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[60%] text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FFE976] group-hover:via-[#C0971C] group-hover:to-[#FFE976] group-hover:bg-clip-text group-hover:text-transparent">
          ABOUT US
        </h1>

        <p className="text-sm md:text-base mt-4 text-white leading-relaxed">
          AT EXPERT EMIRATES, WE DON’T JUST PROVIDE FOREX AND CRYPTO SIGNALS — WE UNLOCK PROFITABLE OPPORTUNITIES TAILORED FOR EVERY TRADER. BACKED BY CUTTING-EDGE AI, EXPERT ANALYSIS, AND MARKET PRECISION, OUR SIGNALS TURN UNCERTAINTY INTO CALCULATED SUCCESS.
        </p>

        <button className="mt-6 w-40 py-2 text-sm tracking-wide rounded-full text-black font-semibold bg-gradient-to-r from-[#FFE976] via-[#C0971C] to-[#FFE976] transition-all duration-500 hover:scale-105 hover:shadow-lg border-2 border-transparent group-hover:border-yellow-400">
          About Us
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-[35%] max-w-[320px] mt-6 md:mt-0">
        <img
          src={arrowImg}
          alt="Arrow"
          className="w-full h-auto transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}
