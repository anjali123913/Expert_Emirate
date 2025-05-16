import React from 'react';
import mt4Icon from '../assets/platformMT4/image1.png'; // Replace with your actual icon
import mt5Icon from '../assets/platformMT4/image2.png'; // Replace with your actual icon
import phonesImage from '../assets/platformMT4/mobile.png'; // Your uploaded image

const PlatfromMt5HeroSection = () => {
  return (
    <div className="bg-black text-white px-6 py-16 md:flex items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-[52px] font-semibold leading-none font-[Poppins] bg-gradient-to-b from-[#281000] via-[#C0971C] via-30% to-[#FFE976] bg-clip-text text-transparent">
          Trade with Confidence<br /> on <span className="text-[#FFE976]">MT4 & MT5</span>
        </h2>
        <p className="text-sm text-white leading-relaxed">
          At Expert Emirates, we empower our clients with access to two of the most
          advanced trading platforms in the industry: MetaTrader 4 (MT4) and MetaTrader 5 (MT5).
          These platforms are designed to enhance your trading experience, providing a comprehensive
          suite of tools and features to help you succeed in the financial markets.
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-5 py-3 rounded-full text-black font-semibold"
            style={{
              background: 'linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)'
            }}>
            <img src={mt4Icon} alt="MT4" className="w-5 h-5" />
            MT4 Platform
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-full text-black font-semibold"
            style={{
              background: 'linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)'
            }}>
            <img src={mt5Icon} alt="MT5" className="w-5 h-5" />
            MT5 Platform
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={phonesImage} alt="Mobile Trading View" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default PlatfromMt5HeroSection;
