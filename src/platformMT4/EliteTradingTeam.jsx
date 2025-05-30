import React from "react";
import mt5Image from "../assets/platformMT4/image6.png"; // Update the path if needed

const EliteTradingTeam = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-[Poppins]">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Text Content */}
        <div className="md:w-2/3 space-y-6">
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[40px]"
            style={{ color: "#FFD700" }}
          >
            Expert Emirates: Your Elite Trading Team
          </h2>

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

        {/* Right Image */}
        <div className="md:w-1/3 w-full">
          <img
            src={mt5Image}
            alt="MT4 Platform"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EliteTradingTeam;
