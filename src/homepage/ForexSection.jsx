import React from "react";
import forexImg from "../assets/forex-box.png"; // Make sure the path is correct
import goldImg from "../assets/gold.png"; // Make sure the path is correct
import { Link } from "react-router-dom";

const ForexSection = () => {
  const [forex, setForex] = React.useState(true);
  const [gold, setGold] = React.useState(false);
  const handleForexClick = () => {
    // Handle Forex button click
    setForex(true);
    setGold(false);
    console.log("Forex button clicked");
  };
  const handleGoldClick = () => {
    // Handle Gold button click
    setGold(true);
    setForex(false);
    console.log("Gold button clicked");
  };

  return (
    <section className="w-full bg-black text-white py-12 px-6 ">
      {/* Left Side */}
      {forex ? (
        <div className="md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 font-[Poppins]">
          <div className="max-w-[463px] flex flex-col gap-[60px]">
            {/* Buttons */}
            <div className="flex gap-4">
              <div>
                <button
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black text-sm font-medium transition duration-300 
              hover:from-[#bfa207] hover:to-[#8c6b00] hover:text-black"
                  onClick={handleForexClick}
                >
                  Forex
                </button>
              </div>
              <div>
                <button
                  className="px-5 py-2 rounded-full bg-[#1C1B23] text-white text-sm font-medium transition duration-300
              hover:bg-gradient-to-r hover:from-[#bfa207] hover:to-[#8c6b00] hover:text-black"
                  onClick={handleGoldClick}
                >
                  GOLD
                </button>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[42px] leading-[50px] tracking-[0.12em] font-bold">
              Invest in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">
                Forex Signals
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm text-[#D1D1D1] leading-6">
              Discover the power of our Forex signals, which boast an 85%
              accuracy rate. Our expert analysis and market insights help you
              make informed trading decisions.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full max-w-[451px] h-auto">
            <img
              src={forexImg}
              alt="Forex Signals Box"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 font-[Poppins]">
          <div className="max-w-[463px] flex flex-col gap-[60px]">
            {/* Buttons */}
            <div className="flex gap-4">
              <div>
                <button
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black text-sm font-medium transition duration-300 
              hover:from-[#bfa207] hover:to-[#8c6b00] hover:text-black"
                  onClick={handleForexClick}
                >
                  Forex
                </button>
              </div>
              <div>
                <button
                  className="px-5 py-2 rounded-full bg-[#1C1B23] text-white text-sm font-medium transition duration-300
              hover:bg-gradient-to-r hover:from-[#bfa207] hover:to-[#8c6b00] hover:text-black"
                  onClick={handleGoldClick}
                >
                  GOLD
                </button>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[42px] leading-[50px] tracking-[0.12em] font-bold">
              Invest in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">
                Gold 
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm text-[#D1D1D1] leading-6">
             Gold (XAU/USD) offers top liquidity, tight spreads, and clear trends, attracting millions of traders daily. With $200B+ in daily volume, it’s a smart, strategic choice in any market.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full max-w-[451px] h-auto">
            <img
              src={goldImg}
              alt="Forex Signals Box"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ForexSection;
