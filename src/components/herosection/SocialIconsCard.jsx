import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const SocialIconsCard = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6 lg:px-8">
      <div
        className="group w-full max-w-sm aspect-square rounded-2xl p-4 sm:p-6 md:p-10 border-2 border-gray-900
        transition-all duration-500 relative overflow-hidden flex flex-col justify-between items-center"
        style={{
          background:
            "linear-gradient(283.02deg, rgba(243, 165, 1, 0.07) 0.62%, rgba(13, 12, 19, 0.2) 99.27%)",
        }}
      >
        {/* ICONS ROW 1 */}
        <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-16">
          {[FaInstagram, FaFacebookF].map((Icon, idx) => (
            <div
              key={idx}
              className="group/icon bg-gradient-to-br from-yellow-500 to-yellow-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center 
              shadow-yellow-400 shadow-md hover:scale-110 transition-transform duration-500
              border border-gray-900 hover:border-t-yellow-600 hover:border-l-yellow-700 hover:border-r-yellow-700 hover:border-b-yellow-600"
            >
              <div
                className="bg-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                shadow-gray-400 shadow-md group-hover:scale-110 transition-transform duration-500"
              >
                <Icon className="text-yellow-400 text-xl sm:text-2xl md:text-3xl group-hover/icon:scale-110 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* ICONS ROW 2 */}
        <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-16">
          {[FaYoutube, FaXTwitter].map((Icon, idx) => (
            <div
              key={idx}
              className="group/icon bg-gradient-to-br from-yellow-500 to-yellow-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center 
              shadow-yellow-400 shadow-md hover:scale-110 transition-transform duration-500
              hover:border-t-yellow-600 hover:border-l-yellow-700 hover:border-r-yellow-700 hover:border-b-yellow-600"
            >
              <div
                className="bg-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                shadow-gray-400 shadow-md group-hover:scale-110 transition-transform duration-500"
              >
                <Icon className="text-yellow-400 text-xl sm:text-2xl md:text-3xl group-hover/icon:scale-110 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Border Highlight */}
        <div className="absolute inset-0 border border-transparent group-hover:border-t-yellow-600 group-hover:border-l-yellow-700 group-hover:border-r-yellow-700 group-hover:border-b-yellow-600 rounded-2xl transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default SocialIconsCard;
