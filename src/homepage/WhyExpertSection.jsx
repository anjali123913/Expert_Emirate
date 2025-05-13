import React from "react";

const WhyExpertSection = () => {
  return (
    <section className="w-full bg-black text-white font-poppins py-20 px-4 flex flex-col items-center gap-10 mt-0">
      {/* Top Button */}
      <button className="bg-black text-white px-5 py-2 border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950 rounded-full tracking-wider">
        Why Expert Emirates?
      </button>

      {/* Headings */}
      <div className="text-center px-4">
        <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold leading-tight font-sans  tracking-wide">
          Signals Are Just the Start –
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-sans leading-tight  bg-gradient-to-t from-transparent via-yellow-400 to-transparent bg-clip-text text-transparent  tracking-wider mt-3">
          We Turn Trades Into Triumphs
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        {/* Reason One */}
        <button className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-10 py-3 font-bold transition tracking-tighter">
          Reason One
        </button>

        {/* Reason Two */}
        <button className="bg-black text-white hover:bg-yellow-600 hover:text-black rounded-full px-10 py-3 font-bold transition tracking-tighter border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950 ">
          Reason Two
        </button>
      </div>
    </section>
  );
};

export default WhyExpertSection;
