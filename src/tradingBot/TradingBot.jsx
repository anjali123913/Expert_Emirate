import React from "react";
import TradHeroSection from "./TradHeroSection";
import CategoryTabs from "../forex/categories";
import ForexInfo from "../forex/ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import FeatureSection from "../homepage/FeatureSection";


export default function TradingBot() {
  return (
    <div className="mt-10">
     <TradHeroSection/>
     <CategoryTabs/>
     <ForexInfo/>
     <TutorialVideo/>
     <WhyTradersTrustUs/>
     <FeatureSection/>
    </div>
  );
}
