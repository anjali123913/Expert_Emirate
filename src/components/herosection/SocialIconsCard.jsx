import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const SocialIconsCard = () => {
  const icons = [
    { icon: <FaInstagram size={24} className="transition-transform duration-300 hover:scale-125"/>, name: "Instagram" },
    { icon: <FaFacebookF size={24} className="transition-transform duration-300 hover:scale-125"/>, name: "Facebook" },
    { icon: <FaYoutube size={24}   className="transition-transform duration-300 hover:scale-125"/>, name: "YouTube" },
    { icon: <FaXTwitter size={24}  className="transition-transform duration-300 hover:scale-125"/>, name: "X" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div
        className="group w-80 h-80 bg-black rounded-2xl p-6 grid grid-cols-2 gap-6 
        border border-gray-700 hover:border-yellow-400 shadow-md hover:shadow-yellow-500 
        transition-all duration-500 relative overflow-hidden"
      >
        {icons.map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 
            bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg 
            transition-transform duration-300 hover:scale-110"
          >
            <div className="text-black transition-transform duration-300 hover:scale-125">
              {item.icon}
            </div>
          </div>
        ))}

        {/* Smooth gradient overlay on hover */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-yellow-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </div>
    </div>
  );
};

export default SocialIconsCard;
