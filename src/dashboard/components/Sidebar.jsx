import React, { useState } from "react";
import logo from "../../assets/dashboard/logo.png";
import {
  FiSettings,
  FiLogOut,
  FiArrowLeft,
  FiArrowRight,
  FiLayout,
  FiRepeat,
} from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Default: first item active

  const menuItems = [
    { icon: <FiLayout size={20} />, label: "Overview", url: "/dashboard" },
    {
      icon: <BiSolidDashboard size={20} />,
      label: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <FiRepeat size={20} />,
      label: "Sync",
      url: "/dashboard/transaction-history",
    },
    {
      icon: <FiSettings size={20} />,
      label: "Settings",
      url: "/dashboard/setting",
    },
    { icon: <FiLogOut size={20} />, label: "Logout", url: "/dashboard/logout" },
  ];

  return (
    <div
      className={`h-screen bg-[#0d0c11] text-white flex flex-col justify-start px-5 py-4 transition-all duration-300 ${
        isCollapsed ? "w-24" : "w-60"
      }`}
    >
      <div className="p-2 bg-[#121117] rounded-lg">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-20 w-28" />
        </Link>
      </div>

      {/* Toggle Button */}
      <div className="flex flex-col">
        <div className="flex justify-end px-2 mb-4">
          <button
            className="bg-[#1a1921] hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] text-white text-sm sm:text-base font-bold rounded-full hover:text-black p-2 transition"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <FiArrowRight size={16} />
            ) : (
              <FiArrowLeft size={16} />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition rounded-lg group ${
                activeIndex === index
                  ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] px-6 py-2 text-sm sm:text-base font-bold  rounded-full text-black"
                  : "hover:bg-[#1a1921]"
              }`}
              title={isCollapsed ? item.label : ""}
            >
              <span>{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
