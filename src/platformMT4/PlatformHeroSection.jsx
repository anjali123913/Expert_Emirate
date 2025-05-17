import React from 'react';
import mt4Icon from '../assets/platformMT4/image1.png';
import mt5Icon from '../assets/platformMT4/image2.png';
import phonesImage from '../assets/platformMT4/mobile.png';

const PlatformHeroSection = () => {
  const buttonGradient = {
    background: 'linear-gradient(180deg, #FFE976 0%, #C0971C 100%)',
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-20 py-14 flex flex-col-reverse md:flex-row items-center justify-between gap-10 font-[Poppins]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        {/* ✅ Proper Visible Gradient Heading */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-semibold leading-[110%] bg-gradient-to-b from-[#FFE976] via-[#C0971C] to-[#281000] text-transparent bg-clip-text">
          Trade with Confidence<br />on MT4 & MT5
        </h2>

        {/* ✅ Description */}
        <p className="text-white text-[16px] sm:text-[18px] font-normal leading-[150%]">
          At Expert Emirates, we empower our clients with access to two of the most
          advanced trading platforms in the industry: MetaTrader 4 (MT4) and MetaTrader 5 (MT5).
          These platforms are designed to enhance your trading experience, providing a comprehensive
          suite of tools and features to help you succeed in the financial markets.
        </p>

        {/* ✅ Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-semibold text-sm"
            style={buttonGradient}
          >
            <img src={mt4Icon} alt="MT4" className="w-5 h-5" />
            MT4 Platform
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-semibold text-sm"
            style={buttonGradient}
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
          className="w-[80%] max-w-[320px] md:max-w-[400px] lg:max-w-[450px]"
        />
      </div>
    </div>
  );
};

export default PlatformHeroSection;
