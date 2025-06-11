import React from "react";

import FeatureSection from "../homepage/FeatureSection";
import BlogHerosection from "./BlogHerosection";
import SearchSection from "./SearchSection";
import BlogGrid from "./BlogGrid";

export default function Blog() {
  return (
    <div>
    <BlogHerosection/>
    <SearchSection/>
    <BlogGrid/>
      <FeatureSection/>
    </div>
  );
}
