import React from "react";
import { MdDiscount, MdDiamond } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";

const plans = [
  {
    name: "Standard Plan",
    price: "$199",
    duration: "/MONTHLY",
    icon: <MdDiscount className="text-white text-lg rotate-90" />,
    features: [
      "Premium Trade Signals (12–15/Week)",
      "Risk Reward Ratio - 1:2 , 1:3, 1:4",
      "Instant Telegram Trade Alerts",
      "Exclusive Weekly Market Blueprint",
      "Smart Risk Management Tips",
      "Dedicated VIP Support",
      "Forex + Gold Elite Access",
      "First to New Features & Tools",
    ],
    description: "Perfect for small teams or unlimited evaluation.",
  },
  {
    name: "Pro Plan",
    price: "$499",
    duration: "/QUARTERLY",
    icon: <BiSolidCrown className="text-white text-lg" />,
    features: [
      "Premium Trade Signals (12–15/Week)",
      "Risk Reward Ratio - 1:2 , 1:3, 1:4",
      "Instant Telegram Trade Alerts",
      "Exclusive Weekly Market Blueprint",
      "Smart Risk Management Tips",
      "Dedicated VIP Support",
      "Forex + Gold Elite Access",
      "First to New Features & Tools",
    ],
    description:
      "Everything in Standard, plus enhanced features for serious traders.",
  },
  {
    name: "Ultra Plan",
    price: "$999",
    duration: "/HALF–YEARLY",
    icon: <MdDiamond className="text-white text-lg" />,
    features: [
      "Premium Trade Signals (12–15/Week)",
      "Risk Reward Ratio - 1:2 , 1:3, 1:4",
      "Instant Telegram Trade Alerts",
      "Exclusive Weekly Market Blueprint",
      "Smart Risk Management Tips",
      "Dedicated VIP Support",
      "Forex + Gold Elite Access",
      "First to New Features & Tools",
    ],
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
  },
];

export default function PricingSection() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="group bg-[#121117] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-all"
          >
            {/* Plan Badge */}
            <div className="flex items-center gap-2 bg-[#1D1B25] rounded-full px-4 py-1.5 w-max mb-6">
              <span className="p-2 bg-[#073B3A] rounded-full">
                {plan.icon}
              </span>
              <span className="text-sm font-semibold text-white group-hover:bg-gradient-to-b group-hover:from-yellow-800 group-hover:via-yellow-300 group-hover:to-yellow-800 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {plan.name}
              </span>
            </div>

            {/* Price */}
            <h2 className="text-4xl font-medium text-white">
              {plan.price}
              <span className="text-base font-normal ml-1">{plan.duration}</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-md font-medium text-gray-300 my-4 leading-relaxed">
              {plan.description}
            </p>

            {/* Buy Now Button */}
            <button
              className="w-full sm:w-[147px] h-[48px] text-sm font-bold rounded-full px-6 py-2 mb-6
              bg-[#1F1E25] text-white hover:bg-gradient-to-r from-[#281000] via-[#FFE976] to-[#281000] 
              hover:text-black shadow-md transition-all duration-300"
            >
              Buy Now
            </button>

            {/* Features */}
            <ul className="space-y-3 text-sm text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-300 group-hover:bg-gradient-to-t group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:to-[#452e06] flex items-center justify-center transition-all duration-300">
                    <span className="text-xs font-bold text-gray-900 group-hover:text-black">
                      ✓
                    </span>
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>































          
        ))}
      </div>
    </div>
  );
}
