import React from "react";
import brochureImage from "../assets/brochure.png"; // Adjust path if needed

const BrochureSection = () => {
  return (
    <div className="group w-full bg-[#0F0F13]  py-16 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden  ">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-[#FFD966]/5 blur-3xl animate-pulseSlow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#C29B2F]/5 blur-3xl animate-pulseSlow delay-300"></div>
      </div>

      <div
        className=" border hover:border-yellow-600 w-full max-w-[1300px] mx-auto rounded-[30px] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 
        border-transparent 
        bg-gradient-to-br from-[#1A1A1F] to-[#0F0F13] 
        hover:shadow-xl hover:shadow-[#FFD966]/10 
        transition-all duration-500 
        group-hover:border-[#FFD966]"
      >
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-white font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight animate-fadeIn">
              Download the
            </h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD966] via-[#C29B2F] to-[#A8831B] font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight animate-fadeIn delay-100">
              Expert Emirates Brochure
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-[600px] mx-auto lg:mx-0 animate-fadeIn delay-200">
            Get comprehensive insights into our trading solutions, market strategies, and exclusive offerings.
          </p>
          <button className="max-w-[220px] bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-6 py-3 text-lg font-poppins font-bold shadow-lg hover:scale-105 transition-all duration-300 animate-fadeIn delay-300 group-hover:from-[#6c550e] group-hover:to-[#D4AC3F] relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none animate-fadeInRight">
          <div className="relative">
            <img
              src={brochureImage}
              alt="Brochure"
              className="w-full h-auto object-contain transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F13]/30 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;

