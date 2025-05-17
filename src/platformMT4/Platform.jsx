import React from "react";
import PlatformHeroSection from "./PlatformHeroSection";
import MTPlatformsSection from "./MTPlatformsSection";
import MT4FeaturesSection from "./MT4FeaturesSection";
import EliteTradingTeamSection from "../about/EliteTradingTeamSection ";
import DownloadMT4Section from "./DownloadMT4Section";
import FeatureSection from "../homepage/FeatureSection";
import FAQSection from "./FAQSection";


export default function Platform() {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <PlatformHeroSection/>
        <MTPlatformsSection/>
        <MT4FeaturesSection/>
        <EliteTradingTeamSection/>
        <DownloadMT4Section/>
        <FAQSection/>
        <FeatureSection/>

      </div>
    </div>
  );
}
