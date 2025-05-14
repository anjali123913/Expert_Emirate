import React from "react";
import bg from "../assets/forex/image1.png"; // your blurred background image
import overlay from "../assets/forex/image2.png"; // your centered "Forex" text or logo

const ForexHeroSection = () => {
  return (
    <div className="relative w-full h-[180px] md:h-[240px] rounded-[16px] overflow-hidden max-w-[1300px] mx-auto mb-10">
      {/* Background image */}
      <img
        src={bg}
        alt="Background"
        className="absolute w-full h-full object-cover blur-sm"
      />

      {/* Dark overlay (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Foreground image or text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={overlay}
          alt="Overlay Text"
          className="w-auto h-[50px] md:h-[70px]"
        />
      </div>
    </div>
  );
};

export default ForexHeroSection;
