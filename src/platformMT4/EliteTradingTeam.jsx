import React from "react";
import mt5Image from "../assets/platformMT4/mt5Image.png"; // Your image path

const EliteTradingTeam = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-[Poppins]">
      {/* ========== What is MT5? ========== */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <div className="w-full md:w-[60%]">
          <h2 className="text-[28px] sm:text-[32px] font-bold leading-[40px]" style={{ color: "#FFD700" }}>
            What is MT5?
          </h2>

          <div
            className="mt-6 space-y-6 text-[16px] sm:text-[18px] leading-[28px]"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <p>
              <strong>MetaTrader 5 (MT5)</strong> is a powerful, multi-asset trading platform designed for Forex, stocks,
              commodities, indices, and cryptocurrency trading. <strong>Developed by MetaQuotes</strong>, it offers advanced
              features, making it a superior choice for both beginner and professional traders.
            </p>

            <p>
              MT5 provides enhanced charting tools, over <strong>80 built-in technical indicators</strong>, multiple
              timeframes, and a depth-of-market (DOM) feature for better price transparency. It supports algorithmic
              trading through the <strong>MQL5 programming language</strong>, allowing traders to automate strategies using
              <strong> Expert Advisors (EAs)</strong>.
            </p>

            <p>
              Unlike its predecessor MT4, MT5 includes an <strong>economic calendar, integrated news</strong>, and improved
              order execution speeds. It also allows hedging and netting, giving traders more flexibility in risk
              management.
            </p>

            <p>
              With <strong>VPS hosting, one-click trading</strong>, and a user-friendly interface, MT5 is a top choice for
              modern traders seeking efficiency, automation, and real-time market insights. Whether you're a scalper or
              long-term investor, MT5 delivers a seamless trading experience.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end">
          <img
            src={mt5Image}
            alt="MT5"
            className="w-full max-w-[400px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* ========== Expert Emirates ========== */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-[60%]">
          <h2 className="text-[28px] sm:text-[32px] font-semibold leading-[40px]" style={{ color: "#FFD700" }}>
            Expert Emirates: Your Elite Trading Team
          </h2>

          <div
            className="mt-6 space-y-6 text-[16px] sm:text-[18px] leading-[28px]"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <p>
              <strong>MetaTrader 4 (MT4)</strong> is a powerful and widely used trading platform designed for Forex,
              commodities, indices, and cryptocurrency trading. Launched in 2005 by MetaQuotes Software, it has become
              the industry standard for both beginner and professional traders.
            </p>

            <p>
              MT4 offers a user-friendly interface with advanced charting tools, technical indicators, and automated
              trading capabilities through <strong>Expert Advisors (EAs)</strong>. Traders can execute orders with
              one-click trading, set stop-loss and take-profit levels, and analyze market trends using over 80 built-in
              technical indicators.
            </p>

            <p>
              One of the key features of MT4 is its <strong>algorithmic trading capability</strong>, which allows users
              to create and run automated trading strategies. The platform also supports <strong>VPS hosting</strong> for
              uninterrupted trading and provides access to a vast library of custom indicators and scripts.
            </p>

            <p>
              Additionally, MT4 includes a <strong>multi-timeframe charting system, real-time price quotes</strong>, and
              an integrated economic calendar for fundamental analysis. Traders can use customizable alerts and push
              notifications to stay updated on market movements.
            </p>
          </div>
        </div>

        {/* Same Image Again */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end">
          <img
            src={mt5Image}
            alt="MT4"
            className="w-full max-w-[400px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default EliteTradingTeam;
