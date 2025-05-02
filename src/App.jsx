// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="relative font-sans min-h-screen text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
