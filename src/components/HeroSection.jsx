import React, { useState } from "react";
import video from "../assets/Expert_Emirates.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null); // null or "btn1" or "btn2"

  // Helper function to get classes based on button and hover state
  const getButtonClass = (btn) => {
    const isHovered = hoveredBtn === btn;
    if (!hoveredBtn) {
      // No hover: btn1 black, btn2 golden
      if (btn === "btn1")
        return `bg-black text-white border border-black`;
      else
        return `bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black border border-yellow-700`;
    } else {
      // Hovering one button: invert colors
      if (isHovered) {
        // hovered button inverted
        return btn === "btn1"
          ? `bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black border border-yellow-700 shadow-lg`
          : `bg-black text-white border border-black`;
      } else {
        // non-hovered button normal
        return btn === "btn1"
          ? `bg-black text-white border border-black`
          : `bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black border border-yellow-700`;
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
          {/* Gradient Badge */}
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-500 p-[2px] shadow-md my-2">
            <button className="rounded-full bg-[#0f0f0f] px-6 py-3 text-white font-medium w-full font-poppins text-base leading-[100%] tracking-[0.12em]">
              Turning Hopes Into Reality
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-white font-poppins font-extrabold text-[32px] leading-[42px] tracking-wider my-3">
            Elevate Your{" "}
            <span className="  bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
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
              onMouseEnter={() => setHoveredBtn("btn1")}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`min-w-[140px] md:min-w-[165px] h-[39px] px-[10px] py-[5px] rounded-full text-sm font-semibold font-poppins transition duration-300 ${getButtonClass(
                "btn1"
              )}`}
            >
              START FREE TRIAL
            </button>

            <button
              onMouseEnter={() => setHoveredBtn("btn2")}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`min-w-[140px] md:min-w-[165px] h-[39px] px-[10px] py-[5px] rounded-full text-sm font-semibold font-poppins transition duration-300 ${getButtonClass(
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
