// src/components/Hero.jsx
import React from "react";
import cityscape from "../assets/cityscape.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      {/* Cityscape Overlay Image */}
      <img
        src={cityscape}
        alt="City"
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
          <button className="border border-white rounded-full px-6 py-2 text-sm mb-6 hover:bg-yellow-400 hover:text-black transition">
            Turning Hopes Into Reality
          </button>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Elevate Your <span className="text-yellow-400">Trading Game</span> with Our <span className="text-yellow-400">Forex Signals</span> and Services
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl">
            Join the worldwide network of profitable traders with the best in forex expertise!
          </p>
          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full font-semibold transition duration-300">
              START FREE TRIAL
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
              EXPLORE OUR SERVICES
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
