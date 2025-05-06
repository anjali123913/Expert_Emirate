import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MobileTradingSection from "../homepage/MobileTradingSection";
import SecondHero from "../components/SecondHero";
import MarketSection from "../homepage/MarketSection";
import TrustSection from "../homepage/TrustSection";
import PricingSection from "../homepage/PricingSection";
import ScrollingCards from "../homepage/ScrollingCards";
// import ButtonTabs from "../homepage/ButtonTabs";
import BrochureSection from "../homepage/BrochureSection";
import WhyExpertSection from "../homepage/WhyExpertSection";
import InsightSection from "../homepage/InsightSection";
// import ExpertMotion from "../homepage/ExpertMotion";

const HomePage = () => {
  return (
    <div className="bg-dark text-white font-sans">
      <HeroSection />
      <SecondHero />
      <MarketSection />
      {/* <ButtonTabs/> */}
      <ScrollingCards/>
      <TrustSection />
      <PricingSection />
      <BrochureSection/>
      <MobileTradingSection />
      <WhyExpertSection/>
      <InsightSection/>
      {/* <ExpertMotion/> */}
    </div>
  );
};

export default HomePage;
