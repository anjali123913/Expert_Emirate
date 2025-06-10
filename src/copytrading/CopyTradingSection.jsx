import React from 'react';
import copyTradingImg from '../assets/copyimage/dollar.png';
import toggleImg from '../assets/copyimage/toggle.png';

const CopyTradingSection = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-28 font-sans overflow-hidden">
      {/* Left Text Section */}
      <div className="text-white max-w-2xl z-10 text-left">
        <h1 className="text-5xl md:text-7xl font-bold leading-snug">
          Invest in{' '}
          <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
            Copy Trading
          </span>
        </h1>
        <p className="mt-8 text-base md:text-xl text-gray-300 max-w-lg">
          We specialize in clearing clients' funded accounts from partnered firms, allowing you to trade with confidence and minimal risk.
        </p>

        {/* Toggle Section */}
        <div className="w-full flex flex-col md:flex-row justify-start items-center gap-6 mt-10 z-10">
          <h3 className="text-white text-lg md:text-xl font-bold text-center md:text-left">
            What is Copy Trading ?
          </h3>

          <img
            src={toggleImg}
            alt="Toggle Switch"
            className="w-20 md:w-28"
          />

          <h3 className="text-white text-lg md:text-xl font-bold text-center md:text-left">
            What is Copy Trading ?
          </h3>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-end items-end mt-10 md:mt-0">
        <img
          src={copyTradingImg}
          alt="Copy Trading 3D Illustration"
          className="w-[250px] md:w-[350px] lg:w-[450px] xl:w-[500px]"
        />
      </div>
    </div>
  );
};

export default CopyTradingSection;
