import React from "react";
import PlatfromMt5HeroSection from "./PlatfromMt5HeroSection";
import MTPlatformsSection from "../platformMT4/MTPlatformsSection";
import MT4FeaturesSection from "../platformMT4/MT4FeaturesSection";
import EliteTradingTeamSection from "../about/EliteTradingTeamSection ";
import DownloadMT4Section from "../platformMT4/DownloadMT4Section";
import FeatureSection from "../homepage/FeatureSection";
import FAQSection from "./FAQSection";


export default function PlatformMt5() {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <PlatfromMt5HeroSection/>
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
