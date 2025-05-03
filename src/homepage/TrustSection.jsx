import React from "react";

const TrustSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-left">
      {/* Tagline */}
      <div className="inline-block bg-[#1F1D26] text-sm text-white px-4 py-2 rounded-full mb-6">
        Forex Signal Packages
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1C644] to-[#A47E1B]">
          87,000+ Traders Trust Us
        </span>{" "}
        – Are You Ready to Level Up?
      </h2>

      {/* Subtext */}
      <p className="text-gray-300 max-w-2xl mt-4 text-base md:text-lg">
        Take control of the Forex market with Expert Emirates! No more guesswork—just expert insights, powerful signals, and strategies that put you ahead of the game!
      </p>
    </section>
  );
};

export default TrustSection;
