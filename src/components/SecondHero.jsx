// src/components/SecondHero.jsx
import React from "react";
import { motion } from "framer-motion";
import video from "../assets/Expert_Emirates.mp4"
import ExpertCard from "./herosection/ExpertCard";
import PricingCard from "./herosection/PricingCard";
import SocialIconsCard from "./herosection/SocialIconsCard";
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
          <source src={video} type="video/mp4" />
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
      

        <div className="flex items-center justify-center gap-5">
          <ExpertCard/>
          <PricingCard/>
          <SocialIconsCard/>

        </div>
      </motion.div>
    </section>
  );
};

export default SecondHero;
