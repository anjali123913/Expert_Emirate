import React from 'react';
import copyTradingImg from '../assets/copyimage/dollar.png';
import toggleImg from '../assets/copyimage/toggle.png';

const CopyTradingSection = () => {
  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 text-white text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Invest in <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)',
              }}
            >
              Copy Trading
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-md leading-relaxed">
            We specialize in clearing clients' funded accounts from partnered firms, allowing you to trade with confidence and minimal risk.
          </p>
        </div>

        {/* RIGHT IMAGE + TOGGLE TEXT BELOW */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <img
            src={copyTradingImg}
            alt="3D Copy Trading"
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px]"
          />

          <div className="flex items-center justify-start gap-6 mt-6 flex-wrap text-left ml-6 sm:ml-10 md:ml-14 lg:ml-20">
            <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
              What is Copy Trading ?
            </h3>
            <img
              src={toggleImg}
              alt="toggle"
              className="w-[60px] sm:w-[70px] md:w-[80px]"
            />
            <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
              What is Copy Trading ?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyTradingSection;
