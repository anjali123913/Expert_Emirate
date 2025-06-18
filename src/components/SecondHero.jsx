import React from "react";
import { motion } from "framer-motion";
import ExpertCard from "./herosection/ExpertCard";
import PricingCard from "./herosection/PricingCard";
import SocialIconsCard from "./herosection/SocialIconsCard";
import ServiceCategories from "./herosection/ServiceCategories";
import CustomerDashboard from "./herosection/CustomerDashboard";
import MarqueeSlider from "./herosection/MarqueeSlider";

const SecondHero = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 px-4 md:px-12 lg:px-20 bg-black text-white overflow-hidden">
      {/* Main Motion Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-16"
      >
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-64 justify-items-center">
  <ExpertCard />
  <PricingCard />
  <SocialIconsCard />
</div>


        {/* Dashboard & Service Category */}
        {/* <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
          <CustomerDashboard />
          <ServiceCategories />
        </div> */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6">
  <div className="w-full lg:w-[60%] h-full">
    <CustomerDashboard />
  </div>
  <div className="w-full lg:w-[40%] h-full">
    <ServiceCategories />
  </div>
</div>


        {/* Marquee Slider */}
        <div>
          <MarqueeSlider />
        </div>
      </motion.div>
    </section>
  );
};

export default SecondHero;
