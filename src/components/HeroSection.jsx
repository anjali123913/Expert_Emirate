import React from "react";
import video from "../assets/Expert_Emirates.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={video}
          className="w-full h-full object-cover pointer-events-none" // Removed 'fixed' position, now it will scroll with the page
        />
      </div>

      {/* Semi-transparent overlay */}
      {/* <div className="absolute inset-0 bg-gray-950 bg-opacity-40 -z-10" /> Overlay with reduced opacity */}

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-16 lg:w-1/2 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
         <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-500 p-[2px]  shadow-md my-2">
      <button className="rounded-full bg-[#0f0f0f] px-6 py-3  text-white font-medium  w-full font-poppins  text-base leading-[100%] tracking-[0.12em]">
        Turning Hopes Into Reality
      </button>
    </div>
          <h1 className=" text-white font-poppins font-extrabold text-3xl text-[32px] leading-[42px] tracking-[0.05em] my-3">
            Elevate Your <span className="bg-gradient-to-b from-transparent via-yellow-400 to-transparent bg-clip-text text-transparent">Trading Game</span> with Our <span className="bg-gradient-to-b from-transparent via-yellow-400 to-transparent bg-clip-text text-transparent">Forex Signals</span> and Services
          </h1>
          <p className="text-white font-inter font-normal text-[16px] leading-[22px] tracking-[0.12em]">
            Join the worldwide network of profitable traders with the best in forex expertise!
          </p>
          <div className="flex gap-4 mt-10 flex-wrap">
          <div className="inline-block group rounded-full  p-[2px] transition-all duration-300">
          <button className="rounded-full border-2 border-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-700 px-6 py-2 text-sm font-black tracking-[0.05em] text-black transition-all duration-300 w-full h-full group hover:from-black hover:to-black hover:text-yellow-400 hover:border-yellow-400">
  START FREE TRIAL
</button>


      </div>
            <button className="bg-black text-white px-6 py-2 rounded-full border-2 border-yellow-900 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition duration-300">
              EXPLORE OUR SERVICES
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
