import React from "react";
import mt5Image from "../assets/platformMT4/image6.png"; // Update with your actual path

const TradingSections = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-[Poppins]">
      {/* ========== What is MT5? (Updated Text) ========== */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <div className="w-full md:w-[%]">
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[40px] "
            style={{ color: "#FFD700" }}
          >
            What is MT5?
          </h2>

          <div
            className="mt-6 space-y-6 text-[16px] sm:text-[18px] leading-[28px] flex items-center justify-between"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <div className="w-1/2">
              <p>
                MetaTrader 5 (MT5) is a powerful, multi-asset trading platform
                designed for Forex, stocks, commodities, indices, and
                cryptocurrency trading. Developed by MetaQuotes, it offers
                advanced features, making it a superior choice for both beginner
                and professional traders.
              </p>

              <p>
                MT5 provides enhanced charting tools, over 80 built-in technical
                indicators, multiple timeframes, and a depth-of-market (DOM)
                feature for better price transparency. It supports algorithmic
                trading through the MQL5 programming language, allowing traders
                to automate strategies using Expert Advisors (EAs).
              </p>
            </div>
            {/* Image */}
            <div className="w-1/3">
              <img
                src={mt5Image}
                alt="MT5"
                className="w-full  h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <p>
        Unlike its predecessor MT4, MT5 includes an economic calendar,
        integrated news, and improved order execution speeds. It also allows
        hedging and netting, giving traders more flexibility in risk management.
      </p>

      <p>
        With VPS hosting, one-click trading, and a user-friendly interface, MT5
        is a top choice for modern traders seeking efficiency, automation, and
        real-time market insights. Whether you're a scalper or long-term
        investor, MT5 delivers a seamless trading experience.
      </p>
      {/* ========== Expert Emirates Section (unchanged) ========== */}
      {/* You can include the second section here just like before if needed */}
    </section>
  );
};

export default TradingSections;
