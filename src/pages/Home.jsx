import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div className="bg-dark text-white font-sans">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
