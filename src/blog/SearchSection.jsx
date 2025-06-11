import React, { useState } from "react";

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");
  const [activeCategory, setActiveCategory] = useState("Forex Forecast");

  const tabItems = [
    { key: "all", label: "All", count: 80 },
    { key: "published", label: "Published", count: 18 },
    { key: "draft", label: "Draft", count: 32 },
  ];

  const categories = ["Forex Forecast", "Gold Forecast", "Crypto Forecast"];
  const sortOptions = ["Featured", "Newest", "Oldest"];

  return (
    <div className="w-full px-6 py-6 bg-black text-white space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Side: Blog & Tabs */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Blog</h2>
          <div className="flex gap-4">
            {tabItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center gap-2 text-sm font-medium transition ${
                  activeTab === item.key
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-gray-300"
                }`}
              >
                {item.label}
                <span
                  className={`px-2 py-[2px] text-xs rounded font-semibold ${
                    activeTab === item.key
                      ? "bg-gradient-to-r from-[#FFD600] to-[#FFB800] text-black"
                      : "bg-[#2A2A2A] text-white"
                  }`}
                >
                  {item.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Search & Sort */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search bar */}
          <div className="relative w-full md:w-[280px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent border border-[#333] rounded-md py-2 pl-10 pr-4 text-sm placeholder-gray-400 text-white focus:outline-none"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 015.29 13.71l4 4a1 1 0 01-1.42 1.42l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
            </svg>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative text-sm font-medium text-white">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center"
            >
              Sort By: <span className="ml-1">{sortBy}</span>
              <svg
                className="w-4 h-4 ml-1 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Options */}
            {sortOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-[#333] rounded-md shadow-lg z-10">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setSortOpen(false);
                    }}
                    className={`px-4 py-2 text-sm hover:bg-[#2a2a2a] cursor-pointer ${
                      sortBy === option ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Forecast Category Buttons (Right aligned) */}
      <div className="flex justify-end">
        <div className="flex gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-l from-yellow-500 via-yellow-400 to-yellow-500 text-black shadow-[0_0_20px_2px_rgba(254,214,0,0.20)] shadow-[inset_0_0_25px_0_rgba(255,215,0,0.20)] outline outline-1 outline-offset-[-1px] outline-yellow-600/50"
                  : "bg-[#1a1a1a] text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
