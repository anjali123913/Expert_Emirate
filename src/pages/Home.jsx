import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MobileTradingSection from "../homepage/MobileTradingSection";
import SecondHero from "../components/SecondHero";
import MarketSection from "../homepage/MarketSection";
import TrustSection from "../homepage/TrustSection";
import PricingSection from "../homepage/PricingSection";
import ScrollingCards from "../homepage/ScrollingCards";
import BrochureSection from "../homepage/BrochureSection";
import WhyExpertSection from "../homepage/WhyExpertSection";
import InsightSection from "../homepage/InsightSection";
import ExpertMotion from "../homepage/ExpertMotion";
import ButtonTabs from "../homepage/ButtonTabs";
import ForexSection from "../homepage/ForexSection";
import AwardsSection from "../homepage/awardsSections/AwardsSection";
import TradersFeedbackSection from "../homepage/TradersFeedbackSection";
import WorldMapWithMarkers from "../homepage/WorldMapWithMarkers";
import WorldMapLabels from "../homepage/WorldMapWithMarkers";
import Reviews from "../homepage/Reviews";
import FeatureSection from "../homepage/FeatureSection";
const HomePage = () => {
  return (
    <div className="bg-dark text-white font-sans">
      <HeroSection />
      <SecondHero />
      <MarketSection />
      <ButtonTabs/>
      <ForexSection/>
      <ScrollingCards/>
      <TrustSection />
      <PricingSection />
      <BrochureSection/>
      <MobileTradingSection />
      <WhyExpertSection/>
      <InsightSection/>
      <ExpertMotion/>
      <WorldMapLabels/>
      <AwardsSection/>
      <TradersFeedbackSection/>
      <Reviews/>
      <FeatureSection/>
    </div>
  );
};

export default HomePage;
