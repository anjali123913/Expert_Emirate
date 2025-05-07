import React from "react";
import socialImage from "../../assets/socalmedia.png"; // You can rename Screenshot (223).png to socalmedia.png for consistency

const SocialIconsCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-80 h-80 bg-black rounded-2xl p-4 border border-gray-700 
        hover:border-yellow-400 shadow-md hover:shadow-yellow-500 
        transition-all duration-500 relative overflow-hidden flex justify-center items-center group"
      >
        <img
          src={socialImage}
          alt="Social Media Icons"
          className="w-100 h-100 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-yellow-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </div>
    </div>
  );
};

export default SocialIconsCard;
