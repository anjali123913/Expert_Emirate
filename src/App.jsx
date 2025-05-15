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

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Career />} />
           <Route path="/FAQ" element={<FaqSection/>} />
            <Route path="/Education" element={<EducationData/>} />
             <Route path="/Forecasts" element={<AwardsSection/>} />
              <Route path="/Support" element={<Support/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                 <Route path="/profile-management" element={<Portfolio/>} />
               <Route path="/company-news" element={<CompanyNews/>} />
<<<<<<< HEAD
                <Route path="/Forex + Gold" element={<Forex/>} />
=======
                <Route path="/forex" element={<Forex/>} />
                 <Route path="/gold" element={<Gold/>} />
                  <Route path="/cryptocurrency" element={<CryptoCurrency/>} />

>>>>>>> cec572a (CryptoCurrency,gold)

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
