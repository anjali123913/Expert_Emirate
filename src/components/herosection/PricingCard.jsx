import React from "react";
import icon3 from "../../assets/heroSectionImages/image 10.png";
import icon2 from "../../assets/heroSectionImages/image 11.png";
import icon1 from "../../assets/heroSectionImages/image 12.png";

const PricingCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="group relative w-full h-auto md:h-80 lg:h-80 sm:w-[500px] md:w-[500px] lg:w-[550px] rounded-2xl overflow-hidden px-4 py-6 sm:p-5 transition-all duration-500 border border-gray-900 hover:border-t-yellow-600 hover:border-l-yellow-700 hover:border-r-yellow-700 hover:border-b-yellow-600 flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(283.02deg, rgba(243, 205, 1, 0.07) 0.62%, rgba(13, 12, 19, 0.2) 99.27%)",
        }}
      >
        {/* Overlapping glowing icons in horizontal row */}
        <div className="absolute top-4 right-4 flex flex-row z-10">
          {[icon1, icon2, icon3].map((icon, i) => (
            <div
              key={i}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-yellow-400 shadow-md ${
                i > 0 ? "-ml-3" : ""
              }`}
            >
              <img
                src={icon}
                alt={`icon-${i}`}
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:scale-150"
              />
            </div>
          ))}
        </div>

        {/* Card content */}
        <div className="relative z-10 text-white text-left transition-all duration-1000 transform">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-start group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-yellow-400 group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent mb-4">
            GET TO KNOW OUR <br />
            PLANS AND PRICING
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 tracking-wider uppercase mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-40 py-2 tracking-wider rounded-full border-t-[1px] border-b-[1px] border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500 bg-black text-white transition-all duration-500 hover:text-black hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 font-medium">
              Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
