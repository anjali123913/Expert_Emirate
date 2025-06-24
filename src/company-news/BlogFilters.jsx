import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function BlogHeader({ setBlogType }) {
  const [activeTab, setActiveTab] = useState("all");
  const [activeForecast, setActiveForecast] = useState("Forex Forecast");
  const navigate = useNavigate();

  const tabs = [
    { key: "all", label: "All", count: 80 },
    { key: "published", label: "Published", count: 18 },
    { key: "draft", label: "Draft", count: 32 },
  ];

  const forecasts = [
    { label: "Forex Forecast", path: "/forex" },   // ➤ Just filters cards
    { label: "Gold Forecast", path: "/gold" },     // ➤ Redirects to /gold
    { label: "Crypto Forecast", path: "/crypto" }, // ➤ You can extend logic
  ];

  const gradientStyle = {
    background:
      "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
    border: "2px solid  #C0971C",
    borderImageSource:
      "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)",
    boxShadow:
      "0px 0px 17px 1.7px rgba(254,214,0,0.20), inset 0px 0px 21px 0px rgba(255,215,0,0.20)",
    outline: "0.86px solid rgba(202, 153, 2, 0.5)",
    outlineOffset: "-0.86px",
  };

  const handleForecastClick = (forecast) => {
    setActiveForecast(forecast.label);
    setBlogType(forecast.label);

    // ✅ Navigate only on Gold Forecast
    // if (forecast.label === "Gold Forecast") {
    //   navigate(forecast.path);
    // }
  };

  return (
    <div className="w-full bg-black px-6 py-8">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Blog title and tabs */}
        <div>
          <h2
            className="text-3xl font-bold mb-3 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
            }}
          >
            Blog
          </h2>

          {/* Tabs */}
          <div className="flex items-center gap-6 flex-wrap">
            {tabs.map((tab) => (
              <div key={tab.key} className="relative ">
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm font-medium  mb-3 ${
                    activeTab === tab.key ? "text-yellow-300" : "text-white"
                  }`}
                >
                  {tab.label}
                </button>
                <span
                  className={`ml-2  px-2 py-0.5 text-xs rounded font-semibold ${
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

        {/* Right: Search + Forecast buttons */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-4 w-full justify-end">
            {/* Search Input */}
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border border-[#444] text-white text-sm px-10 py-2 rounded-md placeholder-white focus:outline-none"
              />
              <FiSearch className="absolute left-3 top-2.5 text-white text-lg" />
            </div>

            {/* Sort By */}
            <div className="text-white text-sm flex items-center gap-1 whitespace-nowrap">
              <span className="opacity-70">Sort By:</span>
              <span className="font-semibold">Featured</span>
              <span className="text-white text-base -mt-[2px]">▾</span>
            </div>
          </div>

          {/* Forecast Buttons */}
          <div className="flex gap-3 flex-wrap justify-end">
            {forecasts.map((forecast) => {
              const isActive = activeForecast === forecast.label;
              return (
                <button
                  key={forecast.label}
                  onClick={() => handleForecastClick(forecast)}
                  className={`rounded-full px-6 py-2 text-sm sm:text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "text-black"
                      : "bg-[#1c1c1f] text-white hover:text-black"
                  }`}
                  style={{
                    ...(isActive ? gradientStyle : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      Object.assign(e.currentTarget.style, {
                        ...gradientStyle,
                        color: "#000",
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      Object.assign(e.currentTarget.style, {
                        background: "#1c1c1f",
                        color: "#fff",
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                      });
                    }
                  }}
                >
                  {forecast.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
