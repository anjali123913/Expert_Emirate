import React from "react";
import mtImage from "../assets/platformMT4/image3.png";
import platformIcon from "../assets/platformMT4/image2.png"; // Icon for the button

const MTPlatformsSection1 = () => {
  const buttonStyle = {
    background:
      "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
    border: "1px solid",
    borderImageSource:
      "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)",
    borderRadius: "9999px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "black",
    padding: "0.75rem 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

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
          MT5 Trading Platform
        </h2>
    

        <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
          The growing demands of brokers and traders are met by the MetaTrader 5 (MT5) trading platform.
Next-Generation Trading: MT5 is the latest and most advanced version of the MetaTrader platform, designed to meet the needs of modern traders. It builds upon the success of MT4 with enhanced features and improved performance.

        </p>

        {/* ✅ Single Button with Icon */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button style={buttonStyle}>
            <img src={platformIcon} alt="Platform Icon" className="w-5 h-5" />
            MT5 Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default MTPlatformsSection1;
