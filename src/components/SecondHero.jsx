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
        <div className="flex  justify-center gap-6">
          <ExpertCard />
          <PricingCard />
          <SocialIconsCard />
        </div>

        {/* Dashboard & Service Category */}
        <div className="flex  justify-between items-start gap-6">
          <CustomerDashboard />
          <ServiceCategories />
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
