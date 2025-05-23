import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import Career from "./carrier/Career";
import FaqSection from "./faq/FaqSection";
import EducationData from "./education/EducationData";
import AwardsSection from "./forecastAwards/AwardsSection";
import Support from "./support/Support";
import AboutUs from "./about/AboutUs";
import Portfolio from "./portfolio/Portfolio";
import CompanyNews from "./company-news/CompanyNews";
import Forex from "./forex/Forex";
import Gold from "./gold/Gold";
import CryptoCurrency from "./crypto-currency/CryptoCurrency";
import FundedAccounts from "./funded-accounts/FundedAccounts";
import TradingBot from "./tradingBot/TradingBot";
import Platform from "./platformMT4/Platform";
import PlatformMt5 from "./PlatformMT5/PlatformMt5";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Career />} />
           <Route path="/FAQ" element={<FaqSection/>} />
            <Route path="/Education" element={<EducationData/>} />
             <Route path="/Forecasts" element={<AwardsSection/>} />
              <Route path="/Support" element={<Support/>} />
                <Route path="/about" element={<AboutUs/>} />
                 <Route path="/portfolio-management" element={<Portfolio/>} />
               <Route path="/company-news" element={<CompanyNews/>} />
                <Route path="/forex" element={<Forex/>} />
                 <Route path="/gold" element={<Gold/>} />
                  <Route path="/cryptocurrency" element={<CryptoCurrency/>} />
                  <Route path="/funded-accounts" element={<FundedAccounts/>} />
                  <Route path="/trading-bot" element={<TradingBot/>} />
                  <Route path="/mt4-platform" element={<Platform/>} />
                  <Route path="/mt5-platform" element={<PlatformMt5/>} />
                  {/* <Route path="/Pro" element={<Pro/>} /> */}
                  {/* <Route path="/Ultra" element={<Ultra/>} /> */}
                  {/* <Route path="/Standard" element={<Standard/>} /> */}

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
