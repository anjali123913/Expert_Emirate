import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogHeader() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeForecast, setActiveForecast] = useState("Forex Forecast");
  const navigate = useNavigate();

  const tabs = [
    { key: "all", label: "All", count: 80 },
    { key: "published", label: "Published", count: 18 },
    { key: "draft", label: "Draft", count: 32 },
  ];

  const forecasts = [
    { label: "Forex Forecast", path: "/forex" },
    { label: "Gold Forecast", path: "/gold" },
    { label: "Crypto Forecast", path: "/cryptocurrency" },
  ];

  const gradientStyle = {
    backgroundImage:
      "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
  };

  const handleForecastClick = (forecast) => {
    setActiveForecast(forecast.label);
    navigate(forecast.path);
  };

  return (
    <div className="w-full bg-black px-6 py-8">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Blog Heading + Tabs */}
        <div>
          <h2
            className="text-3xl font-bold mb-3 bg-clip-text text-transparent"
            style={gradientStyle}
          >
            Blog
          </h2>
          <div className="flex items-center gap-6 flex-wrap">
            {tabs.map((tab) => (
              <div key={tab.key} className="relative">
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm font-medium ${
                    activeTab === tab.key ? "text-yellow-300" : "text-white"
                  }`}
                >
                  {tab.label}
                </button>
                <span
                  className={`ml-2 px-2 py-0.5 text-xs rounded-full font-semibold ${
                    activeTab === tab.key
                      ? "text-black"
                      : "bg-[#2b2b2b] text-white"
                  }`}
                  style={activeTab === tab.key ? gradientStyle : {}}
                >
                  {tab.count}
                </span>
                {activeTab === tab.key && (
                  <div
                    className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full"
                    style={gradientStyle}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Search + Sort + Forecast Buttons */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-4 w-full justify-end">
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border border-[#444] text-white text-sm px-10 py-2 rounded-md placeholder-white focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-white">🔍</span>
            </div>
            <div className="text-white text-sm flex items-center gap-1 whitespace-nowrap">
              <span className="opacity-70">Sort By:</span>
              <span className="font-semibold">Featured</span>
              <span className="text-white text-base -mt-[2px]">▾</span>
            </div>
          </div>

          {/* Forecast Buttons */}
          <div className="flex gap-3 flex-wrap justify-end">
            {forecasts.map((forecast) => (
              <button
                key={forecast.label}
                onClick={() => handleForecastClick(forecast)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeForecast === forecast.label
                    ? "text-black shadow-md"
                    : "bg-[#1c1c1f] text-white hover:bg-[#2c2c30]"
                }`}
                style={
                  activeForecast === forecast.label ? gradientStyle : {}
                }
              >
                {forecast.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
