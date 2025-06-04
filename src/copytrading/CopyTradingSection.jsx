import React from "react";

const CopyTradingSection = () => {
  return (
    <section className="bg-black text-white w-full px-4 md:px-0 py-16">
      {/* Container Centered */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Invest in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-700 drop-shadow-lg">
              Copy Trading
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
          We specialize in clearing clients' funded accounts from partnered
          firms, allowing you to trade with confidence and minimal risk.
        </p>

        {/* Toggle Block */}
        <div className="flex items-center justify-center space-x-6 pt-8">
          <span className="text-white text-lg font-bold">
            What is Copy Trading ?
          </span>

          {/* Toggle Switch */}
          <div className="w-16 h-8 bg-[#1a1a1a] rounded-full flex items-center px-1 shadow-inner">
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-700 shadow-md"></div>
          </div>

          <span className="text-white text-lg font-bold">
            What is Copy Trading ?
          </span>
        </div>
      </div>
    </section>
  );
};

export default CopyTradingSection;
