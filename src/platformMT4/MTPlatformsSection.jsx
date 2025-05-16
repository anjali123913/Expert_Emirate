import React from "react";
import mtImage from "../assets/platformMT4/image3.png"; // Replace with your actual image

const MTPlatformsSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Left: Image (Top on mobile) */}
      <div className="w-full md:w-[45%]">
        <img
          src={mtImage}
          alt="MetaTrader Apps"
          className="w-full max-w-[400px] mx-auto"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-[55%] text-center md:text-left">
        <h2
          className="text-[32px] md:text-[42px] leading-[100%] font-semibold"
          style={{
            fontFamily: "Poppins, sans-serif",
            background:
              "linear-gradient(180deg, #281000 -40.54%, #C0971C 15.28%, #FFE976 67.82%, #C0971C 122.55%, #281000 178.38%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trade with Confidence on MT4 & MT5
        </h2>

        <p className="text-gray-300 mt-4 text-sm md:text-base">
          At Expert Emirates, we empower our clients with access to two of the
          most advanced trading platforms in the industry: MetaTrader 4 (MT4) and
          MetaTrader 5 (MT5). These platforms are designed to enhance your trading
          experience, providing a comprehensive suite of tools and features to help
          you succeed in the financial markets.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] hover:opacity-90 active:scale-95 transition-all duration-200 text-black px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            MT4 Platform
          </button>
          <button className="bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] hover:opacity-90 active:scale-95 transition-all duration-200 text-black px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            MT5 Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default MTPlatformsSection;
