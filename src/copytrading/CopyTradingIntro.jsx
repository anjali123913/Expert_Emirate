import React from "react";

const CopyTradingIntro = () => {
  return (
    <section className="bg-black text-white w-full px-6 md:px-16 py-16 text-center">
      {/* Button */}
      <div className="inline-block mb-6 px-6 py-2 rounded-full border border-gray-700 bg-[#18171C] shadow-md hover:scale-105 transition-all duration-300"
        style={{
          borderImage: 'linear-gradient(to right, #FFD700, #A26F00) 1',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}>
        <span className="text-sm text-white font-medium tracking-wide">
          Why Join the Market Nexus Party?
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
        Welcome to Expert Emirates{" "}
        <span className="bg-gradient-to-b from-yellow-300 to-yellow-700 text-transparent bg-clip-text drop-shadow-[0_1px_1px_rgba(255,215,0,0.6)]">
          Copy Trading
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed tracking-wide">
        Where trading becomes a breeze and making money feels like a fun game.
        Let our trading geniuses do the hard work while you sit back, relax,
        and watch your investments grow like magic beans.
      </p>
    </section>
  );
};

export default CopyTradingIntro;
