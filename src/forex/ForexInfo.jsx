import React, { useState } from "react";
import chartImg from "../assets/forex/chart-image.png"; // replace with actual path

const ForexInfo = () => {
  const [active, setActive] = useState("Forex");

  return (
    <div className="bg-black w-full px-4 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Left: Tabs + Text */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-6 mb-6">
            {["Forex", "GOLD"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`min-w-[100px] px-4 py-[5px] rounded-full text-sm font-semibold font-poppins transition border border-transparent
                  ${
                    active === tab
                      ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0px_0px_20px_2px_#FED60033] border border-[rgba(200,161,39,0.5)]"
                      : "text-white bg-[#1E1D24]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gradient Heading */}
          <h2
            className="text-[32px] font-semibold leading-[29px] mb-4 font-poppins bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
            }}
          >
            What is Forex?
          </h2>

          {/* Description */}
          <p className="text-[#CCCCCC] text-[18px] leading-[100%] font-poppins max-w-[674px]">
            Forex (Foreign Exchange) is the global marketplace where currencies are bought and sold.
            With a daily trading volume of over $7 trillion, it is the largest and most liquid financial market in the world.
            Traders profit by speculating on currency price movements, leveraging economic trends, and global events.
            Unlike stock markets, Forex operates 24 hours a day, 5 days a week, offering endless trading opportunities.
            Whether you're a beginner or a pro, mastering Forex can unlock financial growth and independence.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full max-w-[500px] mx-auto">
          <img
            src={chartImg}
            alt="Forex Chart"
            className="w-full rounded-[16px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForexInfo;
