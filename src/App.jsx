import React from "react";
import Navbar from "./components/Navbar";
import SecondHero from "./components/SecondHero";
import HeroSection from "./components/HeroSection";
import PlansSection from "./homepage/PlansSection";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navbar/>
      <HeroSection />
      <SecondHero />
      <PlansSection/>
    </div>
  );
}

export default App;
