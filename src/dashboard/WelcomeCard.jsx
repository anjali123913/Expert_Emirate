import React from "react";
import chartImage from "../assets/dashboardhome/cardimage.png"; // Replace with your actual image path

const WelcomeCard = () => {
  return (
    <div className="w-full bg-[#1A1A1F] text-white rounded-2xl px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left Side Content */}
      <div className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">
          WELCOME TO <span className="text-yellow-400">EXPERT EMIRATES</span>
        </h2>
        <p className="text-sm text-gray-300 max-w-md">
          The welcome mail has been sent to you. Please check the mail for your account credentials and start your trading journey.
        </p>
        <div className="flex items-center gap-3 text-sm mt-1">
          <span className="text-[#ffcc00]">• Plan Active</span>
          <span className="bg-gradient-to-br from-[#FFD700] to-[#a67c00] text-black font-semibold px-3 py-1 rounded-full text-xs shadow-md">
            Expire: 25-06-2025
          </span>
        </div>
      </div>

      {/* Right Side Image */}
      <img
        src={chartImage}
        alt="chart"
        className="h-20 sm:h-24 object-contain"
      />
    </div>
  );
};

export default WelcomeCard;
