import React from "react";
import BgImage from "../assets/portfolio/herosection.png"; // Change this to your actual image name

const HeroSection = () => {
  return (
    <div
      className="w-full flex items-center justify-center px-4 py-12"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div
        className="w-full max-w-5xl h-[200px] md:h-[250px] rounded-xl overflow-hidden relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

        {/* Center Text */}
        <h2
          className="relative z-10 text-white text-2xl md:text-4xl font-bold"
          style={{
            fontFamily: "Poppins",
          }}
        >
          Portfolio Management
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
