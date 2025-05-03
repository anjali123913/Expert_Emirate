import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
// import bgImage from "../../assets/star-bg.png"; // Same starry background

const SocialIconsCard = () => {
  const icons = [
    { icon: <FaInstagram size={24} />, name: "Instagram" },
    { icon: <FaFacebookF size={24} />, name: "Facebook" },
    { icon: <FaYoutube size={24} />, name: "YouTube" },
    { icon: <FaXTwitter size={24} />, name: "X" },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div
        className="group w-72 h-72 md:w-80 md:h-72 bg-black rounded-2xl p-6 grid grid-cols-2 gap-6 
        border border-gray-700 hover:border-yellow-400 shadow-md hover:shadow-yellow-500 
        transition-all duration-500 relative overflow-hidden"
        style={{
          backgroundImage: `url(${"bgImage"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {icons.map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 
            bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg 
            hover:scale-105 transition-all duration-300"
          >
            <div className="text-black">{item.icon}</div>
          </div>
        ))}

        {/* Smooth upward float on hover */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-yellow-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </div>
    </div>
  );
};

export default SocialIconsCard;
