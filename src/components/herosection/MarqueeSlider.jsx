// MarqueeFull.jsx
import React, { useEffect, useState } from 'react';
// import { FaCloud, FaCogs, FaIndustry, FaRegBuilding, FaBuilding } from 'react-icons/fa';
// import { FaBriefcase } from 'react-icons/fa6';
import companies from '../../assets/companies.png'; // Replace with your image path
// const items = [
//   { icon: <FaCloud />, label: "application" },
//   { icon: <FaBriefcase />, label: "business" },
//   { icon: <FaCogs />, label: "enterprise" },
//   { icon: <FaRegBuild
// ing />, label: "agency" },
//   { icon: <FaBuilding />, label: "company" },
// ];

export default function MarqueeSlider() {
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => (prev === 'left' ? 'right' : 'left'));
    }, 10000); // Change direction every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const marqueeClass = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="w-full mt-10 border bg-black overflow-hidden rounded-lg border-gray-700">
      <div className={`flex whitespace-nowrap ${marqueeClass}`}>
        {/* {[...items, ...items].map((item, index) => ( */}
          <div
            // key={index}
            className=" w-full h-full rounded-full transition-opacity duration-300"
          >
            {/* <span className="text-lg sm:text-xl">{item.icon}</span>
            <span className="tracking-wide">{item.label}</span> */}
            <img src={companies} alt="companies" className='w-full h-full object-cover rounded-full'/>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
}
