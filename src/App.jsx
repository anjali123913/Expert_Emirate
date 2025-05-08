import React from "react";
import Navbar from "./components/Navbar";
import SecondHero from "./components/SecondHero";
import HeroSection from "./components/HeroSection";
import PlansSection from "./homepage/PlansSection";
import MarketSection from "./homepage/MarketSection";
import TrustSection from "./homepage/TrustSection";
import PricingSection from "./homepage/PricingSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
