import React, { useState } from 'react';

const ButtonTabs = () => {
  const tabs = [
    'Forex + Gold',
    'Crypto',
    'Portfolio Management',
    'Copy Trading',
    'Bot Trading',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-black py-6 px-4">
      <div className="max-w-[1136px] mx-auto overflow-x-auto">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-[20px] w-max min-w-full">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap min-w-[140px] sm:min-w-[160px] px-5 py-2 rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-medium tracking-[0.12em] leading-[29px] text-center transition duration-300
              ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black shadow-lg'
                  : 'bg-[#1C1B23] text-white hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-black'
              }`}
              style={{ fontFamily: 'Inter' }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonTabs;
