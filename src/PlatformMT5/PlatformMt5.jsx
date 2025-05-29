import React from "react";
import PlatfromMt5HeroSection from "./PlatfromMt5HeroSection";
import MTPlatformsSection from "../platformMT4/MTPlatformsSection";
// import EliteTradingTeamSection from "../about/EliteTradingTeamSection ";
import DownloadMT4Section from "../platformMT4/DownloadMT4Section";
import FeatureSection from "../homepage/FeatureSection";
import FAQSection from "./FAQSection";
import TradingSections from "./TradingSections";
import MT5FeaturesSection from "./MT5FeaturesSection";


export default function PlatformMt5() {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <PlatfromMt5HeroSection/>
        <MTPlatformsSection/>
        <MT5FeaturesSection/>
        <TradingSections/>
        {/* <EliteTradingTeamSection/> */}
        <DownloadMT4Section/>
        <FAQSection/>
        <FeatureSection/>
      </div>
    </div>
  );
}
