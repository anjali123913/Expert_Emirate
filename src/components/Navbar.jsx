import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      sublinks: [
        { name: "Forex + Gold ", path: "/forex" },
        { name: "Crypto", path: "/cryptocurrency" },
        { name: "Portfolio Management", path: "/portfolio-management" },
        { name: "Crpto Trading", path: "/cryptocurrency" },
        { name: "Bot Trading", path: "/trading-bot" },
      ],
    },
    {
      name: "Forecasts",
      sublinks: [
        { name: "Company News", path: "/company-news" },
        { name: "Award", path: "/Forecasts" },
      ],
    },
    { name: "Education", path: "/education" },
    { name: "FAQ", path: "/faq" },
    { name: "Careers", path: "/careers" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-black text-white font-poppins  text-base tracking-[0.12em]" style={{ fontFamily: 'Poppins' }}>
      <div className="flex justify-between items-center p-4 md:px-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden group hover:border-yellow-800 md:flex gap-6 text-md font-semibold relative">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative">
              {link.sublinks ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center gap-1 hover:text-yellow-400"
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  {activeDropdown === link.name && (
                    <ul className="absolute text-md py-3 rounded-xl font-normal left-0 mt-2 bg-[#000] border-2 border-black group-hover:border-l-yellow-600 z-30 w-56 group-hover:border-r-yellow-600 tracking-normal" 
                    style={{fontFamily: 'Poppins'}}>
                      {link.sublinks.map((sublink, subIdx) => (
                        <li
                          key={subIdx}
                          className="hover:border-yellow-800 transition"
                        >
                          <Link
                            to={sublink.path}
                            className="block px-4 py-2 hover:bg-[#121117] rounded-xl  hover:text-yellow-400"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              )}
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
              {link.sublinks ? (
                <details>
                  <summary className="cursor-pointer hover:text-yellow-400">
                    {link.name}
                  </summary>
                  <ul className="ml-4 mt-2 border-l-2 border-yellow-400 pl-2 space-y-2">
                    {link.sublinks.map((sublink, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                          className="block hover:text-yellow-400"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-yellow-400 transition ${
                    link.name === "Home" ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
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
