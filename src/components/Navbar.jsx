import React, { useState } from "react";
import logo from "../assets/navlogo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <nav className=" absolute top-0 left-0 w-full z-20 bg-transparent text-white font-poppins font-normal text-base leading-[100%] tracking-[0.12em]" >
      <div className="flex justify-between items-center p-4 md:px-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li className="text-yellow-400 cursor-pointer hover:text-white transition">Home</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Services</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Forecasts</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Education</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">FAQ</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Careers</li>
          <li className="cursor-pointer hover:text-yellow-400 transition">Support</li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black bg-opacity-90 px-6 py-4 space-y-4 text-sm font-medium">
          <li className="text-yellow-400">Home</li>
          <li className="text-white">Services</li>
          <li className="text-white">Forecasts</li>
          <li className="text-white">Education</li>
          <li className="text-white">FAQ</li>
          <li className="text-white">Careers</li>
          <li className="text-white">Support</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
