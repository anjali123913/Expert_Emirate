import React from "react";
import SupportHeroSection from "./SupportHeroSection";
import SupportOptions from "./SupportOptions";
import ContactForm from "./ContactForm";
import FollowUsSection from "./FollowUsSection";
import FeatureSection from "../homepage/FeatureSection";
export default function Support() {
  return (
    <div>
    <SupportHeroSection/>
    <SupportOptions/>
    <ContactForm/>
    <FollowUsSection/>
    <FeatureSection/>
    </div>
  );
}
