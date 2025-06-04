import React from "react";
import bitcoinImg from "../assets/buttonImage/Bitcoin.png"; // Replace with your actual image path

const CryptoSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Invest in <br />
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f7e48b] text-transparent bg-clip-text">
              Cryptocurrency Signals
            </span>
          </h2>
          <p className="mt-8 text-gray-300 text-base sm:text-lg leading-relaxed">
            Join the digital currency revolution with our cryptocurrency signals. Our team provides accurate insights to help you navigate this volatile market with 85% accuracy.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={bitcoinImg}
            alt="Bitcoin"
            className="w-[350px] sm:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
