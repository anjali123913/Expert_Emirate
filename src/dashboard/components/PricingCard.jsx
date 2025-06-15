// components/PricingCard.jsx
import React from "react";
import { MdDiscount } from "react-icons/md";

export default function PricingCard({ plan }) {
  return (
    <div className="bg-[#121117] text-white rounded-xl p-5 w-full sm:w-[300px] shadow-md">
      <h4 className="text-sm flex items-start justify-start font-semibold text-white bg-[#1c1b20]  px-3 py-1 rounded-full mb-4">
        {plan.title == "Pro Plan" && (
          <MdDiscount className="text-xl rotate-90 text-yellow-500" />
        )}
        {plan.title == "Ultra Plan" && (
          <MdDiscount className="text-xl rotate-90 text-yellow-500" />
        )}
        {plan.title == "Standard Plan" && (
          <MdDiscount className="text-xl rotate-90 text-yellow-500" />
        )}

        {plan.title}
      </h4>
      <div className="text-2xl font-bold text-yellow-400 mb-1">
        {plan.price}
      </div>
      <div className="uppercase text-sm text-gray-400 mb-3">{plan.billing}</div>
      <p className="text-sm text-gray-300 mb-4">{plan.description}</p>

      <button className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold mb-4">
        Buy Now
      </button>

      <ul className="text-sm space-y-2 text-gray-300">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-yellow-400">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
