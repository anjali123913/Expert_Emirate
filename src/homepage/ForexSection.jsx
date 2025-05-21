import React from "react";
import forexImg from "../assets/forex-box.png";
import goldImg from "../assets/gold.png";

const ForexSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("forex");

  const categories = [
    { key: "forex", label: "Forex" },
    { key: "gold", label: "GOLD" },
  ];

  return (
    <section className="w-full bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 font-[Poppins]">
        {/* Left Content */}
        <div className="max-w-[500px] flex flex-col gap-10">
          {/* Toggle Buttons */}
          <div className="flex gap-4">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition duration-300
                  ${
                    activeCategory === key
                      ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]"
                      : "text-white bg-[var(--Dark-grey,#121117)]"
                  }
                  hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] hover:text-black
                `}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-[36px] sm:text-[42px] leading-[50px] font-bold tracking-wide">
            Invest in <br />
            <span
              className={`text-transparent bg-clip-text ${
                activeCategory === "forex"
                  ? "bg-[linear-gradient(177.83deg,#281000_50%,#C0971C_64.99%,#FFE976_79.09%,#C0971C_93.79%,#281000_108.77%)]"
                  : "bg-gradient-to-r from-[#FFD700] to-[#B8860B]"
              }`}
            >
              {activeCategory === "forex" ? "Forex Signals" : "Gold"}
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm text-[#C8C8C8] leading-6 max-w-[420px]">
            {activeCategory === "forex"
              ? "Discover the power of our Forex signals, which boast an 85% accuracy rate. Our expert analysis and market insights help you make informed trading decisions."
              : "Gold (XAU/USD) offers top liquidity, tight spreads, and clear trends, attracting millions of traders daily. With $200B+ in daily volume, it’s a smart, strategic choice in any market."}
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-[480px]">
          <img
            src={activeCategory === "forex" ? forexImg : goldImg}
            alt={activeCategory === "forex" ? "Forex Signals Box" : "Gold Box"}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ForexSection;
