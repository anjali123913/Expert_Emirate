import { useState } from "react";
import { FiBell, FiSettings, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import profilePic from "../../assets/dashboard/stack.png"
// ... existing imports

export default function DashboardHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Optional: auto hide search when clicked outside (add later if needed)

  return (
    <>
      {/* Header */}
      <header className="w-full bg-[#0d0c11] flex items-center justify-between px-4 py-2 shadow-md relative z-50">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Logo */}

          {/* Go to Website */}
          <Link
            to={"/"}
            className="hidden sm:inline-block bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black  px-6 py-2 text-sm sm:text-base font-bold  rounded-full shadow-md hover:brightness-110 transition-all duration-300"
          >
            GO TO WEBSITE
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search Icon + Bar */}
          <div className="relative hidden sm:flex items-center">
            {showSearch ? (
              <>
                <input
                  type="text"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="bg-[#1a1921] text-white text-sm px-3 py-1.5 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all w-48"
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute right-1 text-gray-400 hover:text-white"
                >
                  <FiX size={16} />
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-white hover:text-yellow-500 transition"
              >
                <FiSearch size={20} />
              </button>
            )}
          </div>

          {/* Notification */}
          <div className="relative">
            <FiBell className="text-white w-5 h-5 cursor-pointer" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </div>

          {/* Settings */}
          <FiSettings className="text-white w-5 h-5 cursor-pointer" />

          {/* Avatar */}
          <img
            src={profilePic}
            alt="Profile"
            className="h-8 w-8 rounded-full border-2 border-green-400 object-cover"
          />

          {/* Hamburger Icon (mobile only) */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu className="text-white w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#121117] text-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 font-bold text-lg border-b border-gray-700">
          Sidebar Menu
        </div>
        <ul className="p-4 space-y-4">
          <li className="hover:text-yellow-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-yellow-400 cursor-pointer">Analytics</li>
          <li className="hover:text-yellow-400 cursor-pointer">Settings</li>
          <li className="hover:text-yellow-400 cursor-pointer">Logout</li>
        </ul>
      </div>
    </>
  );
}
