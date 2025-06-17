import React from "react";
import CompanyNewsBanner from "./CompanyNewsBanner";
import LatestNews from "./LatestNews";
import CommunitySection from "../forecastAwards/CommunitySection";
import FeatureSection from "../homepage/FeatureSection";
import BlogFilters from "./BlogFilters";
import BlogSection from "./BlogSection";

export default function CompanyNews() {
  return (
    <div>
     <CompanyNewsBanner/>
     <LatestNews/>
     <CommunitySection/>
     {/* <SearchSection/> */}
     <BlogFilters/>
     <BlogSection/>
     <FeatureSection/>
    </div>
  );
}
