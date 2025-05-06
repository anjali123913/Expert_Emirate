// MarqueeFull.jsx
import React from 'react';
import { FaCloud, FaCogs, FaIndustry, FaRegBuilding, FaBuilding } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa6';

const items = [
  { icon: <FaCloud />, label: "application" },
  { icon: <FaBriefcase />, label: "business" },
  { icon: <FaCogs />, label: "enterprise" },
  { icon: <FaRegBuilding />, label: "agency" },
  { icon: <FaBuilding />, label: "company" },
];

export default function MarqueeSlider() {
  const scrollingItems = [...items, ...items]; // Duplicate for infinite scroll effect

  return (
    <div className="w-full mt-10 border border-gray-700 rounded-md bg-gradient-to-r from-black via-[#0f0f0f] to-black overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-[#e5e5e5] text-base sm:text-lg font-bold opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-lg sm:text-xl">{item.icon}</span>
            <span className="tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
