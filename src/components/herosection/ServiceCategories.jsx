import React from 'react';

const ServicesCard = () => {
  return (
    <div className="bg-black rounded-xl p-6 w-full max-w-sm text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/wave-bg.png" // use the wave-style image you uploaded
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Button container */}
      <div className="z-10 relative flex flex-wrap justify-center gap-3 pt-24">
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
  );
};

export default ServicesCard;
