import React from "react";
import mtImage from "../assets/platformMT4/image3.png";
import platformIcon from "../assets/platformMT4/image1.png"; // Icon for the button

const MTPlatformsSection = () => {
  return (
    <section className="bg-black text-white font-[Poppins] py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      {/* ✅ Left: Bigger & Responsive Image */}
      <div className="w-full md:w-[45%] flex justify-center">
        <img
          src={mtImage}
          alt="MetaTrader Apps"
          className="w-[90%] max-w-[500px] sm:max-w-[450px] md:max-w-[480px]"
        />
      </div>

      {/* ✅ Right: Text Content */}
      <div className="w-full md:w-[55%] text-center md:text-left">
        <h2
          className="text-[28px] sm:text-[34px] md:text-[42px] leading-tight font-semibold"
          style={{
            background:
              "linear-gradient(180deg, #281000 -40.54%, #C0971C 15.28%, #FFE976 67.82%, #C0971C 122.55%, #281000 178.38%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trade with Confidence on MT4 & MT5
        </h2>

        <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
          At Expert Emirates, we empower our clients with access to two of the
          most advanced trading platforms in the industry: MetaTrader 4 (MT4) and
          MetaTrader 5 (MT5). These platforms are designed to enhance your trading
          experience, providing a comprehensive suite of tools and features to help
          you succeed in the financial markets.
        </p>

        {/* ✅ Single Button with Icon */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="flex items-center gap-2 bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] hover:opacity-90 active:scale-95 transition-all duration-200 text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
            <img src={platformIcon} alt="Platform Icon" className="w-5 h-5" />
            MT4 & MT5 Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default MTPlatformsSection;
