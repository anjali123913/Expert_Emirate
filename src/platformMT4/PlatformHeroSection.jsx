import React, { useState } from 'react';
import mt4Icon from '../assets/platformMT4/image1.png';
import mt5Icon from '../assets/platformMT4/image2.png';
import phonesImage from '../assets/platformMT4/mobile.png';

const PlatformHeroSection = () => {
  const [hovered, setHovered] = useState(null);

  const mt4DefaultStyle = {
    background: "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
    border: "1px solid #C0971C",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "black",
    borderRadius: "9999px"
  };

  const mt4HoverStyle = {
    background: "rgba(0, 0, 0, 1)",
    border: "1px solid #FFE976",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "white",
    borderRadius: "9999px"
  };

  const mt5DefaultStyle = {
    background: "rgba(0, 0, 0, 1)",
    border: "1px solid #FFE976",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "white",
    borderRadius: "9999px"
  };

  const mt5HoverStyle = {
    background: "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
    border: "1px solid #C0971C",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18.63px",
    color: "black",
    borderRadius: "9999px"
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-20 py-14 flex flex-col-reverse md:flex-row items-center justify-between gap-10 font-[Poppins]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2
          className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[52px] font-semibold leading-[110%] font-poppins "
          style={{
            background: "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trade with Confidence <br />on MT4 & MT5
        </h2>

        <p className="text-white text-[16px] sm:text-[18px] font-normal leading-[150%] font-poppins">
          At Expert Emirates, we empower our clients with access to two of the most
          advanced trading platforms in the industry: MetaTrader 4 (MT4) and MetaTrader 5 (MT5).
          These platforms are designed to enhance your trading experience, providing a comprehensive
          suite of tools and features to help you succeed in the financial markets.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 transition-all duration-300"
            style={hovered === 'mt4' ? mt4HoverStyle : mt4DefaultStyle}
            onMouseEnter={() => setHovered('mt4')}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={mt4Icon} alt="MT4" className="w-5 h-5" />
            MT4 Platform
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 transition-all duration-300"
            style={hovered === 'mt5' ? mt5HoverStyle : mt5DefaultStyle}
            onMouseEnter={() => setHovered('mt5')}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={mt5Icon} alt="MT5" className="w-5 h-5" />
            MT5 Platform
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={phonesImage}
          alt="Mobile Trading View"
          className="w-[80%] max-w-[320px] md:max-w-[400px] lg:max-w-[450px] animate-smoothBounce"
        />
      </div>
    </div>
  );
};

export default PlatformHeroSection;