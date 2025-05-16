import React from "react";
import FundedHeroSection from "./FundedHeroSection";
import CategoryTabs from "../forex/categories";
import ForexInfo from "../forex/ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import FeatureSection from "../homepage/FeatureSection";


export default function FundedAccounts() {
  return (
    <div>
        <FundedHeroSection/>
     <CategoryTabs/>
     <ForexInfo/>
     <TutorialVideo/>
     <FeatureSection/>
    </div>
  );
}
