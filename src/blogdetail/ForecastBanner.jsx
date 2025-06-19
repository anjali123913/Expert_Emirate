import React from "react";
import chartBg from "../assets/blog/chartbg.png"; // use your chart background
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const ForecastBanner = () => {
  return (
    <div className="w-full bg-black py-10 px-4 flex justify-center items-center">
      <div
        className="w-full max-w-[1100px] h-[320px] rounded-2xl bg-cover bg-center relative overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: `url(${chartBg})`,
        }}
      >
        {/* Overlay Text */}
        <h2 className="text-white text-center text-xl md:text-2xl font-semibold px-4 z-10">
          <span className="font-bold">PENDLEUSDT →</span> Resistance retest. One
          step away from distribution
        </h2>

        {/* Bottom Left: Social Icons */}
        <div className="absolute bottom-5 left-5 flex gap-4 z-10">
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-[#3b5998]">
            <FaFacebookF size={14} />
          </div>
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-[#e1306c]">
            <FaInstagram size={14} />
          </div>
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-[#0077b5]">
            <FaLinkedinIn size={14} />
          </div>
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
            <FaXTwitter size={14} />
          </div>
        </div>

        {/* Bottom Right: Button */}
        <div className="absolute bottom-5 right-5 z-10">
          <button className="px-5 py-2 rounded-full font-medium text-sm text-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 shadow-md hover:scale-105 transition-transform">
            Forex Forecast
          </button>
        </div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      </div>
    </div>
  );
};

export default ForecastBanner;
