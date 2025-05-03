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
    <div className="font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
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
