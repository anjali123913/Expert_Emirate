// components/PricingSection.jsx
import React from "react";
import { pricingPlans } from "../data/pricingPlans";
import PricingCard from "./PricingCard";

export default function PricingSection({
  clicked,
  setClicked,
  text,
  setEText,
}) {
  const isActive = (type) => clicked === type;

  return (
    <div className="w-full px-4 py-8 text-white">
      {/* Toggle Buttons */}
      {
        (clicked=="forex"   && (
          <div className="flex gap-4 justify-center mb-8">
            {["forex", "gold"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setClicked(type);
                  setEText?.(type.toUpperCase());
                }}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 
              ${
                isActive(type)
                  ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300"
                  : "bg-[#0f0e13] text-gray-300"
              }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        ))}

      {/* Pricing Cards */}
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {pricingPlans[clicked]?.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </div>
  );
}
