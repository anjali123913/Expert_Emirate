import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Forecasts", path: "/forecasts" },
    { name: "Education", path: "/education" },
    { name: "FAQ", path: "/faq" },
    { name: "Careers", path: "/careers" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20  bg-black text-white font-poppins font-normal text-base leading-[100%] tracking-[0.12em]">
      <div className="flex justify-between items-center p-4 md:px-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                className="hover:text-yellow-400 transition text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-yellow-400 transition ${
                  link.name === "Home" ? "text-yellow-400" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
