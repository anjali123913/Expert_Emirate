// src/components/ComexFeatures.jsx
import React from "react";
import volatilityIcon from "../assets/gold/comex-trading/image1.png";
import goldSilverIcon from "../assets/gold/comex-trading/image2.png";
import leverageIcon from "../assets/gold/comex-trading/image3.png";

const features = [
  {
    icon: volatilityIcon,
    title: "Hedge Against Market Volatility",
    desc: "Protect your portfolio from price fluctuations in the commodities market.",
  },
  {
    icon: goldSilverIcon,
    title: "Trade Gold & Silver with Tight Spreads",
    desc: "Enjoy minimal spreads and maximum liquidity for smooth execution.",
  },
  {
    icon: leverageIcon,
    title: "Leverage Up to 500:1",
    desc: "Amplify your trading potential with high leverage and low margin requirements.",
  },
];

const ComexFeatures = () => {
  return (
    <div className="bg-black text-white font-poppins py-12 px-4">
      {/* Gradient Heading */}
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 leading-snug"
        style={{
          background:
            "linear-gradient(180deg, #281000 0%, #C0971C 27.62%, #FFE976 53.63%, #C0971C 80.71%, #281000 108.33%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        With COMEX trading, you can:
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#121117] rounded-xl px-6 py-8 text-center relative overflow-hidden min-h-[280px] flex flex-col justify-start"
          >
            {/* Top thin gold border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#C0971C] via-[#FFE976] to-[#C0971C]" />

            {/* Bottom thin gold border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#C0971C] via-[#FFE976] to-[#C0971C]" />

            <img
              src={icon}
              alt={title}
              className="mx-auto mb-4 w-16 h-16 object-contain relative z-10"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 relative z-10">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 relative z-10">
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-6 py-2 rounded-full font-semibold text-black shadow-lg hover:scale-105 transition"
          style={{
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 27.62%, #FFE976 53.63%, #C0971C 80.71%, #281000 108.33%)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Join Expert Emirates
        </button>
      </div>
    </div>
  );
};

export default ComexFeatures;
