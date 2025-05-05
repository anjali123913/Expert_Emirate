import React from "react";
import image from "../assets/abstract-glow.png"; // existing image
import chartImage from "../assets/gold-chart.png"; // new image (Screenshot 195)

const ForexSection = () => {
  return (
    <section className="bg-black text-white mt-8 px-4 sm:px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        
        {/* Text Left */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Invest in <br />
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Forex Signals
            </span>
          </h2>
          <p className="text-gray-300 mt-6 text-base md:text-lg max-w-md">
            Discover the power of our Forex signals, which boast an 85% accuracy rate.
            Our expert analysis and market insights help you make informed trading decisions.
          </p>
          
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-end relative">
          <img
            src={image}
            alt="Forex Visual"
            className="w-full max-w-md object-contain"
          />

          {/* Top Card */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg w-40 sm:w-48">
            {/* <p className="text-yellow-400 font-semibold text-md">Up to 500:1</p> */}
            {/* <p className="text-gray-300 text-sm">Highest levels of leverage</p> */}
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg w-40 sm:w-48">
            {/* <p className="text-yellow-400 font-semibold text-md">0.0* Pips</p> */}
            {/* <p className="text-gray-300 text-sm">Tightest spreads in the industry</p> */}
          </div>
        </div>
      </div>

      {/* Gold Chart Image Section */}
      <div className="w-full   my-10">
        <img
          src={chartImage}
          alt="Gold Chart"
          className="w-full h-full object-cente rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
};

export default ForexSection;
