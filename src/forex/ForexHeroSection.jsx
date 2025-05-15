import React from "react";
import bg from "../assets/forex/image1.png"; // blurred chart background
// OR directly use the image you uploaded: import bg from "../assets/forex/b85b0763-106a-4761-a534-71b8d894bada.png";

const ForexHeroSection = () => {
  return (
    <div className="relative max-w-[1300px] mx-auto px-4 py-20 mt-12">
      <div className="relative w-full h-[290px] md:h-[280px] rounded-[20px] overflow-hidden border-2 border-[#00aaff]">
        {/* Background image */}
        <img
          src={bg}
          alt="Background"
          className="absolute w-full h-full object-center "
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Centered Text */}
        <div className="absolute font-sans inset-0 flex items-center justify-center bg-gray-800 w-5/6 mx-auto opacity-85 my-5 rounded-3xl">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold">Forex</h2>
=======
import bg from "../assets/forex/image1.png";
import overlay from "../assets/forex/image2.png";

const ForexHeroSection = () => {
  return (
    <div className="w-full bg-black flex justify-center px-4 mt-8">
      <div className="relative w-full max-w-[1240px] h-[251px] rounded-[20px] overflow-hidden">
        {/* Background Image */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional semi-dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />

        {/* Centered Foreground Image (50% height of container) + Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-1/2 flex justify-center">
            {/* Overlay Image */}
            <img
              src={overlay}
              alt="Overlay"
              className="w-full h-auto max-h-[980%]" // 50% of container height
            />

            {/* Forex Text on Top */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-[28px] md:text-[40px] lg:text-[52px] font-poppins font-semibold leading-none text-center">
                Forex
              </h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ForexHeroSection;
