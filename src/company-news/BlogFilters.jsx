import React, { useState } from "react";

export default function BlogHeader() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeForecast, setActiveForecast] = useState("Forex Forecast");

  const tabs = [
    { key: "all", label: "All", count: 80 },
    { key: "published", label: "Published", count: 18 },
    { key: "draft", label: "Draft", count: 32 },
  ];

  const forecasts = ["Forex Forecast", "Gold Forecast", "Crypto Forecast"];

  return (
    <div className="w-full bg-black px-6 py-8">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Blog Heading + Tabs */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-3">Blog</h2>
          <div className="flex items-center gap-6 flex-wrap">
            {tabs.map((tab) => (
              <div key={tab.key} className="relative">
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm font-medium ${
                    activeTab === tab.key ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {tab.label}
                </button>
                <span
                  className={`ml-2 px-2 py-0.5 text-xs rounded-full font-semibold ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-[#FFE976] via-[#C0971C] to-[#FFE976] text-black"
                      : "bg-[#2b2b2b] text-white"
                  }`}
                >
                  {tab.count}
                </span>
                {activeTab === tab.key && (
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFE976] via-[#C0971C] to-[#FFE976] rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Search Bar + Sort + Forecast Buttons */}
        <div className="flex flex-col items-end gap-4">
          {/* Search + Sort */}
          <div className="flex items-center gap-4 w-full justify-end">
            {/* Search */}
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border border-[#444] text-white text-sm px-10 py-2 rounded-md placeholder-white focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-white">🔍</span>
            </div>

            {/* Sort By: Featured */}
            <div className="text-white text-sm flex items-center gap-1 whitespace-nowrap">
              <span className="opacity-70">Sort By:</span>
              <span className="font-semibold">Featured</span>
              <span className="text-white text-base -mt-[2px]">▾</span>
            </div>
          </div>

          {/* Forecast Buttons */}
          <div className="flex gap-3 flex-wrap justify-end">
            {forecasts.map((item) => (
              <button
                key={item}
                onClick={() => setActiveForecast(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeForecast === item
                    ? "bg-gradient-to-r from-[#FFE976] via-[#C0971C] to-[#FFE976] text-black shadow-md"
                    : "bg-[#1c1c1f] text-white hover:bg-[#2c2c30]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
