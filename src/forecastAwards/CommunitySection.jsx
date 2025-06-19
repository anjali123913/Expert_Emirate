import React from "react";
import bgImage from "../assets/awards/lion.png"; // Replace with actual background path

const CommunitySection = () => {
  return (
    <div className="bg-black text-white font-poppins py-12 px-4 md:px-20">
      <section
        className="relative group overflow-hidden min-h-[350px] flex items-center justify-center px-4 md:px-10 rounded-2xl"
      >
        {/* Background Image with Zoom on Hover */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Overlay and Content */}
        <div className="relative z-10 bg-gray-700 bg-opacity-70 rounded-2xl p-10 md:p-12 max-w-4xl w-full text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Expert Emirates Community
          </h2>
          <p className="w-5/6 text-center font-normal text-[18px] leading-[140%] tracking-wide mx-auto mb-6">
            Be part of a vibrant community where smart investors turn their financial dreams into reality. With Expert Emirates, portfolio management isn't just smart—it's a blast!
          </p>
          <button className="hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] border border-t-yellow-500 border-b-yellow-500 border-l-yellow-700 border-r-yellow-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
            Join Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunitySection;
