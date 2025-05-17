import React from "react";
import eliteImage from "../assets/platformMT4/eliteImage.png"; // Update with your image path

const EliteTradingTeam = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-[Poppins]">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* ✅ Left Text Content */}
        <div className="w-full md:w-[60%]">
          {/* Heading */}
          <h2
            className="text-[32px] font-semibold leading-[55px] text-transparent bg-clip-text"
            style={{
              fontFamily: "Poppins, sans-serif",
              background:
                "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Expert Emirates: Your Elite Trading Team
          </h2>

          {/* Paragraph Text */}
          <div
            className="mt-6 space-y-6"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "30px",
              letterSpacing: "0px",
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <p>
              MetaTrader 4 (MT4) is a powerful and widely used trading platform
              designed for Forex, commodities, indices, and cryptocurrency trading.
              Launched in 2005 by MetaQuotes Software, it has become the industry
              standard for both beginner and professional traders.
            </p>
            <p>
              MT4 offers a user-friendly interface with advanced charting tools,
              technical indicators, and automated trading capabilities through
              Expert Advisors (EAs). Traders can execute orders with one-click
              trading, set stop-loss and take-profit levels, and analyze market
              trends using over 80 built-in technical indicators.
            </p>
            <p>
              One of the key features of MT4 is its algorithmic trading capability,
              which allows users to create and run automated trading strategies.
              The platform also supports VPS hosting for uninterrupted trading and
              provides access to a vast library of custom indicators and scripts.
            </p>
            <p>
              Additionally, MT4 includes a multi-timeframe charting system,
              real-time price quotes, and an integrated economic calendar for
              fundamental analysis. Traders can use customizable alerts and push
              notifications to stay updated on market movements.
            </p>
          </div>
        </div>

        {/* ✅ Right Image */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end">
          <img
            src={eliteImage}
            alt="Elite Trading"
            className="w-full max-w-[400px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default EliteTradingTeam;
