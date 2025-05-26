import React from "react";

const WhyExpertSection = () => {
  return (
    <section className="w-full bg-black text-white  py-10 px-4 flex flex-col items-center gap-10 mt-0" style={{ fontFamily: "Poppins" }}>
      {/* Top Button */}
      <button className="bg-black text-white px-10 py-3 border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950 rounded-full tracking-wider">
        Why Expert Emirates?
      </button>

      {/* Headings */}
      <div className="text-center px-4">
        <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-semibold font-sans  tracking-widest leading-relaxed">
          Signals Are Just the Start –
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-sans leading-relaxed  bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mt-3 tracking-widest">
          We Turn Trades Into Triumphs
        </h2>
      </div>

      {/* Buttons */}
    
    </section>
  );
};

export default WhyExpertSection;
