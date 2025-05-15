import React from "react";
import GoldCard from "./GoldCard";
import CategoryTabs from "../forex/categories";
import ForexInfo from "../forex/ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import ExpertTrade from "../forex/ExpertTrade";
import CurrencyMarket from "../forex/CurrencyMarket";
import PopularSharesTable from "../forex/PopularSharesTable";
import MetalsTable from "../forex/MetalsData";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import FeatureSection from "../homepage/FeatureSection";
import ComexFeatures from "./ComexFeatures";

export default function Gold() {
  return (
    <div>
      <GoldCard/>
      <CategoryTabs/>
      <ForexInfo/>
      <ComexFeatures/>
      <TutorialVideo/>
      <ExpertTrade/>
      <CurrencyMarket/>
      <PopularSharesTable/>
      <MetalsTable/>
      <WhyTradersTrustUs/>
      <FeatureSection/>
    </div>
  );
}
