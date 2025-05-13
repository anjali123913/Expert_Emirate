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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
