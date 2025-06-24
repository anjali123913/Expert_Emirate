// components/ToggleButton.jsx
import React from "react";

export default function ToggleButton({ text, clicked, setClicked, eText }) {
  const isActive = clicked === eText;

  const handleClick = () => {
    setClicked(eText);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300"
            : " text-white px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300"
        }`}
    >
      {text}
    </button>
  );
}
