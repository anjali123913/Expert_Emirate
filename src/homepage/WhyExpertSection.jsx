import React from "react";

const WhyExpertSection = () => {
  return (
    <section className="w-full bg-black text-white font-poppins py-20 px-4 flex flex-col items-center gap-10 mt-0">
      {/* Top Button */}
      <div
        className="text-white px-6 py-2 text-lg font-medium rounded-full border border-solid border-transparent"
        style={{
          width: "fit-content",
          borderImage: "linear-gradient(93.42deg, #666666 0%, #000000 100%)",
          borderImageSlice: 1,
        }}
      >
        Why Expert Emirates?
      </div>

      {/* Headings */}
      <div className="text-center px-4">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Signals Are Just the Start –
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mt-2 bg-gradient-to-r from-[#FFD966] via-[#C29B2F] to-[#A8831B] text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">
          We Turn Trades Into Triumphs
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        {/* Reason One */}
        <button
          className="px-8 sm:px-10 py-3 text-lg font-semibold rounded-full text-white bg-black border transition-all duration-300 hover:bg-gradient-to-r from-[#FFD966] via-[#C29B2F] to-[#A8831B] hover:text-black"
          style={{
            borderImage: "linear-gradient(93.42deg, #FFD966 0%, #A8831B 100%)",
            borderImageSlice: 1,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          Reason One
        </button>

        {/* Reason Two */}
        <button className="px-8 sm:px-10 py-3 text-lg font-semibold rounded-full text-black bg-gradient-to-r from-[#A8831B] via-[#FFD966] to-[#A8831B] border border-[#FFD966] shadow-xl transition-all duration-300 hover:scale-105">
          Reason Two
        </button>
      </div>
    </section>
  );
};

export default WhyExpertSection;
