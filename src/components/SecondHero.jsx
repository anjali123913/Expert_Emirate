// src/components/SecondHero.jsx
import React from "react";
import { motion } from "framer-motion";
import video from "../assets/Expert_Emirates.mp4"
import ExpertCard from "./herosection/ExpertCard";
import PricingCard from "./herosection/PricingCard";
import SocialIconsCard from "./herosection/SocialIconsCard";
import ServiceCategories from "./herosection/ServiceCategories";
import CustomerDashboard from "./herosection/CustomerDashboard";
import MarqueeSlider from "./herosection/MarqueeSlider";
const SecondHero = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 px-4 md:px-16 bg-gradient-to-b from-[#000] via-[#000] to-[#000] text-white overflow-hidden ">
     

      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
        className=" mx-20 text-center"
      >
      

        <div className="flex items-center justify-center gap-5">
          <ExpertCard/>
          <PricingCard/>
          <SocialIconsCard/>
          
        </div>
       <div className="flex items-center justify-center gap-5">
         
       <CustomerDashboard/>
        <ServiceCategories/>
       </div>
<div>
<MarqueeSlider/>

</div>
      </motion.div>
    </section>
  );
};

export default SecondHero;
