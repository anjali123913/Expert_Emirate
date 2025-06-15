// components/PricingSection.jsx
import React from "react";
import { pricingPlans } from "../data/pricingPlans";
import PricingCard from "./PricingCard";

export default function PricingSection({ clicked, setClicked, text, setEText }) {
  const isActive = (type) => clicked === type;

  return (
    <div className="w-full px-4 py-8 text-white">
      {/* Toggle Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        {["forex", "gold"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setClicked(type);
              setEText?.(type.toUpperCase());
            }}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 
              ${isActive(type)
                ? "bg-gradient-to-r from-yellow-600 to-yellow-300 text-black"
                : "bg-[#0f0e13] text-gray-300"
              }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {pricingPlans[clicked]?.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </div>
  );
}
