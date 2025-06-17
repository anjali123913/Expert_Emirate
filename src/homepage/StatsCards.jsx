import React from "react";
import activeClientsIcon from "../assets/mapcard/Layer1.png";
import servedClientsIcon from "../assets/mapcard/Layer2.png";
import copyTradingIcon from "../assets/mapcard/Layer3.png";

const stats = [
  {
    icon: activeClientsIcon,
    number: "7000+",
    label: "Active Clients",
    isLarge: false,
  },
  {
    icon: servedClientsIcon,
    number: "12000+",
    label: "Served Clients",
    isLarge: true, // Middle card icon bigger
  },
  {
    icon: copyTradingIcon,
    number: "60+",
    label: "Copy Trading",
    isLarge: false,
  },
];

const StatsCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-4 py-10 bg-black">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center bg-[#141217] rounded-xl px-6 py-5 w-[280px] sm:w-[300px] md:w-[320px] shadow-md transition-all duration-300"
        >
          {/* Image size adjusted for middle card */}
          <img
            src={item.icon}
            alt={item.label}
            className={`object-contain ${
              item.isLarge ? "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px]" : "w-14 h-14 sm:w-16 sm:h-16"
            }`}
          />

          {/* Text Section */}
          <div className="pl-4">
            <h3 className="text-white text-xl sm:text-2xl font-bold">{item.number}</h3>
            <p className="text-white text-sm sm:text-base">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
