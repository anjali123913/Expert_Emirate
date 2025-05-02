// src/components/SecondHero.jsx
import React from "react";
import { motion } from "framer-motion";

const SecondHero = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 px-4 md:px-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Top Video */}
      <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-lg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[300px] md:h-[500px] object-cover"
        >
          <source src="/assets/second-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Why Choose <span className="text-yellow-400">Expert Emirates</span>?
        </h2>
        <p className="text-gray-300 mb-10">
          We provide industry-leading insights, personalized strategies, and 24/7 expert support to help you dominate the forex market with confidence.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full font-semibold transition duration-300">
            JOIN NOW
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition duration-300">
            LEARN MORE
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SecondHero;
