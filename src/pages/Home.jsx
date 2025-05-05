import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MobileTradingSection from "../homepage/MobileTradingSection";
import SecondHero from "../components/SecondHero";
import MarketSection from "../homepage/MarketSection";
import TrustSection from "../homepage/TrustSection";
import PricingSection from "../homepage/PricingSection";

const HomePage = () => {
  return (
    <div className="bg-dark text-white font-sans">
      <HeroSection />
      <SecondHero />
      <MarketSection />
      <TrustSection />
      <PricingSection />
      <MobileTradingSection />
    </div>
  );
};

export default HomePage;
