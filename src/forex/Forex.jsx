import React from "react";
import ForexHeroSection from "./ForexHeroSection";
import CategoryTabs from "./categories";
import ForexInfo from "./ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import FeatureSection from "../homepage/FeatureSection";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import ExpertTrade from "./ExpertTrade";
import CurrencyMarket from "./CurrencyMarket";
import PopularSharesTable from "./PopularSharesTable";
import MetalsTable from "./MetalsData";

export default function Forex() {
  return (
<<<<<<< HEAD
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <ForexHeroSection />
      </div>{" "}
=======
    <div>
      <ForexHeroSection/>
      <CategoryTabs/>
      <ForexInfo />
      <TutorialVideo/>
      <ExpertTrade/>
      <CurrencyMarket/>
      <PopularSharesTable/>
      <MetalsTable />
      <WhyTradersTrustUs/>
     <FeatureSection/>
>>>>>>> cec572a (CryptoCurrency,gold)
    </div>
  );
}
