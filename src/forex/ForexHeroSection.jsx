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
        </div>
      </div>
    </div>
  );
};

export default ForexHeroSection;
