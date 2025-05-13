import React from "react";
import AboutHerosction from "./AboutHerosction";
import SmartTradeSection from "./SmartTradeSection";
import EliteTradingTeamSection from "./EliteTradingTeamSection ";
import MissionVisionSection from "./MissionVisionSection ";
import FeatureSection from "../homepage/FeatureSection";


export default function  AboutUs() {
  return (
    <div>
        <AboutHerosction/>
        <SmartTradeSection/>
        <EliteTradingTeamSection/>
        <MissionVisionSection/>
        <FeatureSection/>
    </div>
  );
}
