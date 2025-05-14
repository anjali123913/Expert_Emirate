import React from "react";
import HeroSection from "./HeroSection";
import PortfolioInfoSection from "./PortfolioInfoSection";
import FeatureSection from "../homepage/FeatureSection";
import WhyTradersTrustUs from "./WhyTradersTrustUs";
import TutorialVideo from "./TutorialVideo";


export default function Portfolio() {
  return (
    <div>
     <HeroSection/>
     <PortfolioInfoSection/>
<TutorialVideo/>

     <WhyTradersTrustUs/>
     <FeatureSection/>
     

    </div>
  );
}
