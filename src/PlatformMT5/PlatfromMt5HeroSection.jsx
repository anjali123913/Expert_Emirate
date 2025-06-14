import React from 'react';
import mt4Icon from '../assets/platformMT4/image1.png';
import mt5Icon from '../assets/platformMT4/image2.png';
import phonesImage from '../assets/platformMT4/mobile.png';

const PlatfromMt5HeroSection = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-16 py-12 sm:py-20 font-[Poppins]">
      <div className="max-w-[1300px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-semibold leading-tight bg-gradient-to-b from-[#281000] via-[#C0971C] via-30% to-[#FFE976] bg-clip-text text-transparent">
            Trade with Confidence<br />
            on <span className="text-[#FFE976]">MT4 & MT5</span>
          </h2>

          <p className="text-sm sm:text-base text-white leading-relaxed max-w-xl mx-auto md:mx-0">
            At Expert Emirates, we empower our clients with access to two of the most
            advanced trading platforms in the industry: MetaTrader 4 (MT4) and MetaTrader 5 (MT5).
            These platforms are designed to enhance your trading experience, providing a comprehensive
            suite of tools and features to help you succeed in the financial markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="flex items-center gap-2 px-5 py-3 rounded-full text-black font-semibold text-sm sm:text-base"
              style={{
                background: 'linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)',
              }}
            >
              <img src={mt4Icon} alt="MT4" className="w-5 h-5" />
              MT4 Platform
            </button>

            <button
              className="flex items-center gap-2 px-5 py-3 rounded-full text-black font-semibold text-sm sm:text-base"
              style={{
                background: 'linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)',
              }}
            >
              <img src={mt5Icon} alt="MT5" className="w-5 h-5" />
              MT5 Platform
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={phonesImage}
            alt="Mobile Trading View"
            className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] animate-smoothBounce"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatfromMt5HeroSection;
