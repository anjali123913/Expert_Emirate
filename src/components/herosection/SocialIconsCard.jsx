import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import bgImage from "../../assets/Rectangle 83.png"; // ✅ Adjust this path as needed

const SocialIconsCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="group w-80 h-80 rounded-2xl p-10 border-2 border-gray-900
        transition-all duration-500 relative overflow-hidden flex flex-col justify-between items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ICONS ROW 1 */}
        <div className="flex items-center justify-center gap-16">
          {[FaInstagram, FaFacebookF].map((Icon, idx) => (
            <div
              key={idx}
              className="group/icon bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 rounded-full flex items-center justify-center 
              shadow-yellow-400 shadow-md hover:scale-110 transition-transform duration-500
              border border-gray-900 group/icon-hover:border-t-yellow-600 group/icon-hover:border-l-yellow-700 group/icon-hover:border-r-yellow-700 hover:border-b-yellow-600"
            >
              <div
                className="bg-black w-12 h-12 rounded-full flex items-center justify-center 
                shadow-gray-400 shadow-md group-hover:scale-110 transition-transform duration-500
                group-hover:border-yellow-400"
              >
                <Icon className="text-yellow-400 text-3xl group-hover/icon:scale-110 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* ICONS ROW 2 */}
        <div className="flex items-center justify-center gap-16">
          {[FaYoutube, FaXTwitter].map((Icon, idx) => (
            <div
              key={idx}
              className="group/icon bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 rounded-full flex items-center justify-center 
              shadow-yellow-400 shadow-md hover:scale-110 transition-transform duration-500
              group-hover:border-yellow-500"
            >
              <div
                className="bg-black w-12 h-12 rounded-full flex items-center justify-center 
                shadow-gray-400 shadow-md group-hover:scale-110 transition-transform duration-500
                group-hover:border-yellow-400"
              >
                <Icon className="text-yellow-400 text-3xl group-hover/icon:scale-110 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Border Highlight on Icon Hover */}
        <div className="absolute inset-0 border border-transparent group-hover:border-t-yellow-600 group-hover:border-l-yellow-700 group-hover:border-r-yellow-700 group-hover:border-b-yellow-600 rounded-2xl transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default SocialIconsCard;
