// MarqueeFull.jsx
import React from 'react';
import { FaCloud, FaCogs, FaIndustry, FaRegBuilding, FaBuilding } from 'react-icons/fa';

const items = [
  { icon: <FaCloud />, text: 'application' },
  { icon: <FaCogs />, text: 'business' },
  { icon: <FaIndustry />, text: 'enterprise' },
  { icon: <FaRegBuilding />, text: 'agency' },
  { icon: <FaBuilding />, text: 'company' },
  { icon: <FaCloud />, text: 'application' },
];

const MarqueeSlider = () => {
  return (
    <div className="w-full mt-10 border border-gray-700 rounded-md bg-gradient-to-r from-black via-[#0f0f0f] to-black overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center px-8 py-4 text-[#d3c17d] text-base font-semibold hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
          >
            <span className="mr-2 text-lg">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
