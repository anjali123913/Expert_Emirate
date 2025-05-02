
import React from "react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 flex justify-between items-center p-4 md:px-16 px-4 bg-transparent">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8 w-8" />
        <span className="text-yellow-400 font-bold text-lg">EXPERT EMIRATES</span>
      </div>
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="text-yellow-400">Home</li>
        <li>Services</li>
        <li>Forecasts</li>
        <li>Education</li>
        <li>FAQ</li>
        <li>Careers</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;
