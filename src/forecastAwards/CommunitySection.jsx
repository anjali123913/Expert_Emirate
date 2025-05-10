import React from "react";
import lionImage from "../assets/awards/lion.png"; // 🦁 Image path in assets

const CommunitySection = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-10 bg-black">
      <div className="relative w-full max-w-[1300px] h-[323px] rounded-[20px] overflow-hidden">
        
        {/* 🔹 Background Image */}
        <img
          src={lionImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* 🔹 Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md z-10 rounded-[20px]" />

        {/* 🔹 Foreground Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full h-full px-4 md:px-8">
          <h2 className="text-white font-['Poppins'] text-[20px] md:text-[24px] font-semibold mb-4">
            Join the Expert Emirates Community
          </h2>
          <p className="text-white font-['Poppins'] text-[16px] md:text-[18px] leading-[100%] max-w-[900px]">
            Be part of a vibrant community where smart investors turn their financial dreams into reality. With <br className="hidden sm:block" />
            Expert Emirates, portfolio management isn’t just smart—it’s a blast!
          </p>

          {/* 🔹 Button with Rounded Border and Hover Gradient */}
          <button
            className="mt-6 px-6 py-2 text-white font-['Poppins'] text-sm transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#281000] hover:via-[#C0971C] hover:to-[#FFE976] rounded-full border-[1px]"
            style={{
              borderImage:
                "linear-gradient(80deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100% )",
              borderImageSlice: 1,
              borderRadius: "9999px",
            }}
          >
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
