import React from "react";
import brochureImage from "../assets/brochure.png"; // Adjust path if needed

const BrochureSection = () => {
  return (
    <div className="w-full bg-[#0F0F13] py-10 px-4 sm:px-6 lg:px-10">
      <div
        className="w-full max-w-[1300px] mx-auto rounded-[30px] p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 border border-solid border-transparent"
        style={{
          borderImageSource: "linear-gradient(93.42deg, #666666 0%, #000000 100%)",
          borderImageSlice: 1,
        }}
      >
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <div>
            <h2 className="text-white font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight">
              Download the
            </h2>
            <h2 className="text-[#FFD966] font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight">
              Expert Emirates Brochure
            </h2>
          </div>
          <button className="bg-gradient-to-r from-[#FFD966] to-[#C29B2F] text-black rounded-full px-4 py-3 text-base font-semibold shadow-md hover:scale-105 transition-all duration-300">
            Download Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
          <img
            src={brochureImage}
            alt="Brochure"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;
