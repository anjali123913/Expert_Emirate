import React from "react";
import CompanyNewsBanner from "./CompanyNewsBanner";
import LatestNews from "./LatestNews";
import CommunitySection from "../forecastAwards/CommunitySection";
import FeatureSection from "../homepage/FeatureSection";
import SearchSection from "../blog/SearchSection";
import BlogGrid from "../blog/BlogGrid";

export default function CompanyNews() {
  return (
    <div>
     <CompanyNewsBanner/>
     <LatestNews/>
     <CommunitySection/>
     <SearchSection/>
     <BlogGrid/>
     <FeatureSection/>
    </div>
  );
}
