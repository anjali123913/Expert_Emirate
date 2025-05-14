import React from "react";
import CompanyNewsBanner from "./CompanyNewsBanner";
import LatestNews from "./LatestNews";
import CommunitySection from "../forecastAwards/CommunitySection";
import FeatureSection from "../homepage/FeatureSection";

export default function CompanyNews() {
  return (
    <div>
     <CompanyNewsBanner/>
     <LatestNews/>
     <CommunitySection/>
     <FeatureSection/>
    </div>
  );
}
