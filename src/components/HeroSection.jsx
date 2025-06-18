import React, { useState } from "react";
import video from "../assets/Expert_Emirates.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null); // null or "btn1" or "btn2"

  const getButtonClass = (btn) => {
    const isHovered = hoveredBtn === btn;
    if (!hoveredBtn) {
      // Default state: btn1 is gradient, btn2 is black with golden border
      if (btn === "btn1")
        return `bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black border border-yellow-700`;
      else
        return `bg-black text-white border border-yellow-700`;
    } else {
      // Hover state: swap styles
      if (isHovered) {
        return btn === "btn1"
          ? `bg-black text-white border border-black shadow-lg`
          : `bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black border border-yellow-700 shadow-lg`;
      } else {
        return btn === "btn1"
          ? `bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black border border-yellow-700`
          : `bg-black text-white border border-yellow-700`;
      }
    }
  };

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
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-16 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
        <div className="inline-flex items-center justify-center my-9">
  <div className="pt-[1px] pr-[0px] pb-[1px] pl-[0px] rounded-b-full rounded-l-full rounded-r-full bg-gradient-to-b from-[#7C4B00] to-[#FFE9A0]">
    <button className="rounded-full bg-[#0F0F0F] px-6 py-[10px] text-white font-poppins font-medium text-base leading-[100%] tracking-[0.12em]">
      Turning Hopes Into Reality
    </button>
  </div>
</div>





          {/* Heading */}
          <h1 className="text-white font-poppins font-bold text-[32px] leading-[42px] tracking-wider my-3">
            Elevate Your{" "}
            <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
              Trading Game
            </span>{" "}
            with Our{" "}
            <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
              Forex Signals
            </span>{" "}
            and Services
          </h1>

          {/* Description */}
          <p className="text-white font-inter font-normal text-[16px] leading-[22px] tracking-[0.12em]">
            Join the worldwide network of profitable traders with the best in forex expertise!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <button
              // onMouseEnter={() => setHoveredBtn("btn1")}
              // onMouseLeave={() => setHoveredBtn(null)}
              className={`   // <div class="text-center justify-start text-black text-sm font-semibold font-[Poppins] uppercase leading-relaxed tracking-widest">Start Free Trial</div>
</div><div data-property-1="Frame 33" class="w-[165] h-[39px] px-9 py-2.5 bg-gradient-to-l from-stone-900 via-yellow-600 to-stone-900 rounded-[77.61px] shadow-[0px_0px_17.24637794494629px_1.724637746810913px_rgba(254,214,0,0.20)] shadow-[inset_0px_0px_21.557971954345703px_0px_rgba(255,215,0,0.20)] outline outline-[0.86px] outline-offset-[-0.86px] outline-yellow-600/50 inline-flex justify-center items-center gap-2.5">
 
              )}`}
            >
            
              START FREE TRIAL
            </button>

            <button
              onMouseEnter={() => setHoveredBtn("btn2")}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`min-w-[140px] md:min-w-[165px] h-[39px] px-[10px] py-[5px] rounded-full text-sm font-bold font-poppins transition duration-300 ${getButtonClass(
                "btn2"
              )}`}
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
