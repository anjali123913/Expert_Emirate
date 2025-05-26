import React from "react";
import brochureImage from "../assets/brochure.png"; // Adjust path if needed

const BrochureSection = () => {
  return (
    <div className="group w-full bg-[#0F0F13] px-4 sm:px-6 lg:px-10 ">
      {/* // <div className="w-full bg-[#0F0F13]  px-4 sm:px-6 lg:px-10 relative ">
      // <div className="group py-10"> */}
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden  ">
          <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-[#FFD966]/5 blur-3xl animate-pulseSlow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#C29B2F]/5 blur-3xl animate-pulseSlow delay-300"></div>
        </div> */}

      <div
        className="border-[1px]  w-full max-w-[1300px] mx-auto rounded-[30px] px-10 lg:px-10 flex flex-col md:flex-row items-center justify-between  
        border-transparent 
        bg-gradient-to-br from-[#1A1A1F] to-[#0F0F13] 
        hover:shadow-xl hover:shadow-[#FFD966]/10
        transition-all duration-500 
        group-hover:border-t-[#eba439] group-hover:border-b-[#eba439] group-hover:border-l-[#9f4c04] group-hover:border-r-[#be5a03]  "
      >
        {/* Text Section */}
        <div className="flex-1 lg:w-1/2 pb-10 flex flex-col gap-8 text-center lg:text-left w-full py-5">
          <div
            className="space-y-2 font-medium "
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <h2 className="text-white font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight animate-fadeIn">
              Download the
            </h2>
            <h2 className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-semibold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[45px] leading-tight w-full ">
              Expert Emirates Brochure
            </h2>
          </div>
          {/* <p className="text-gray-400 text-lg max-w-[600px] mx-auto lg:mx-0 animate-fadeIn delay-200">
            Get comprehensive insights into our trading solutions, market
            strategies, and exclusive offerings.
          </p> */}
          <div className="flex items-center justify-center lg:justify-start gap-4 animate-fadeIn delay-400 mx-auto lg:mx-0">
            <button className="relative max-w-[220px] rounded-full group transition-all duration-300 bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] hover:bg-black">
              <div className="w-full h-full border border-transparent hover:border-t-yellow-500  hover:border-b-yellow-500 hover:border-l-yellow-700 hover:border-r-yellow-700 rounded-full py-3 px-4 text-black text-lg font-poppins font-bold flex items-center justify-center gap-2 tracking-wider leading-3 hover:bg-black hover:text-white transition-all duration-300">
                Download Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Image Section */}

        <div className="w-full  md:w-1/2 z-50 flex items-center justify-center overflow-visiblew-full h-full overflow-visible pb-10 lg:pb-0">
          <img
            src={brochureImage}
            alt="Brochure"
            className="w-full md:w-[120%] max-w-none h-full md:h-[130%] transform transition-all duration-500"
          />
        </div>
      </div>
      {/* // </div>
    // </div> */}
    </div>
  );
};

export default BrochureSection;
