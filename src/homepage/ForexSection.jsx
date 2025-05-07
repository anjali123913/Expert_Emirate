import React from 'react';
import forexImg from '../assets/forex-box.png'; // Make sure the path is correct

const ForexSection = () => {
  return (
    <section className="w-full bg-black text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 font-[Poppins]">
      
      {/* Left Side */}
      <div className="max-w-[463px] flex flex-col gap-[60px]">
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black text-sm font-medium transition duration-300 
            hover:from-[#bfa207] hover:to-[#8c6b00] hover:text-black">
            Forex
          </button>
          <button className="px-5 py-2 rounded-full bg-[#1C1B23] text-white text-sm font-medium transition duration-300
            hover:bg-gradient-to-r hover:from-[#bfa207] hover:to-[#8c6b00] hover:text-black">
            GOLD
          </button>
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
          Discover the power of our Forex signals, which boast an 85% accuracy rate.
          Our expert analysis and market insights help you make informed trading decisions.
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
    </section>
  );
};

export default ForexSection;
