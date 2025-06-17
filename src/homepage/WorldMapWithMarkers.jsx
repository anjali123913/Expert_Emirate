// components/WorldMapLabels.jsx
import React from "react";
import worldMap from "../assets/map.png"; // Your map image path

const WorldMapLabels = () => {
  return (
<<<<<<< HEAD
    <div className="bg-black p-2 md:p-8 lg:p-12 flex flex-col items-center justify-center">

<h1
          className="text-center text-3xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent"
        >
         {/* Over 25+ Offices Worldwide */}
        </h1>
        <p className="w-full sm:w-5/6 text-center my-3 font-poppins font-medium text-[16px]  tracking-[0.12em] mb-6 ">
        {/* Expert Emirates operates more than 25+ offices across the globe. This extensive network not only serves a diverse international clientelebut also collaborates with affiliates situated in key financial centers worldwide. */}
        </p>
      <div className="relative w-full max-w-[1200px] mx-auto py-12 bg-black">
=======
    <div className="bg-black px-4 sm:px-8 md:px-8 lg:px-16 py-10 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-4">
        {/* Over 25+ Offices Worldwide */}
      </h1>

      {/* Paragraph */}
      <p className="w-full sm:w-5/6 md:w-3/4 text-center text-base md:text-lg font-medium text-white tracking-wide leading-relaxed mb-10">
        {/* Expert Emirates operates more than 25+ offices across the globe. This extensive network not only serves a diverse international clientele but also collaborates with affiliates situated in key financial centers worldwide. */}
      </p>

      {/* Map Container */}
      <div className="relative w-full max-w-[1200px] mx-auto">
>>>>>>> 490ebb7 (map,statscard)
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-auto object-contain"
        />

        {/* You can add label positions like dots or tooltips here later */}
      </div>
    </div>
  );
};

export default WorldMapLabels;
