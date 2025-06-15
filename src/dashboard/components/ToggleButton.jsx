// components/ToggleButton.jsx
import React from "react";

export default function ToggleButton({ text, clicked, setClicked, eText, setEText }) {
  const isActive = clicked === eText;

  const handleClick = () => {
    setClicked(eText);
    setEText?.(text); // optional
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
        ${isActive
          ? "bg-gradient-to-r from-yellow-600 to-yellow-300 text-black shadow-md"
          : "bg-[#0f0e13] text-gray-300 hover:bg-[#1a191f]"
        }`}
    >
      {text}
    </button>
  );
}
