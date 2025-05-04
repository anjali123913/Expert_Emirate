import React from "react";
import Navbar from "./components/Navbar";
import SecondHero from "./components/SecondHero";
import HeroSection from "./components/HeroSection";
import PlansSection from "./homepage/PlansSection";
import MarketSection from "./homepage/MarketSection";
import TrustSection from "./homepage/TrustSection";
import PricingSection from "./homepage/PricingSection";


function App() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection />
      <SecondHero />
      <MarketSection/>
      <TrustSection/>
      <PricingSection/>
     
    </div>
  );
}

export default App;
