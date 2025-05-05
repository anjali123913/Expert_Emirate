import React from 'react';
import wave from "../../assets/wave.png";

const ServiceCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden w-[500px] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={wave}
          alt="wave background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center space-y-3 min-h-[400px] justify-end">
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition">
            FOREX + GOLD
          </button>
          <button className="bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition">
            CRYPTOCURRENCY
          </button>
          <button className="bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition">
            FNDED ACCOUNTS
          </button>
          <button className="bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition">
            ROBOT TRADING
          </button>
          <button className="bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black transition">
            PORTFOLIO MANAGEMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
