import React from "react";
import { MdDiscount, MdDiamond } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";

const plans = [
  {
    name: "Standard Plan",
    price: "$199",
    duration: "/MONTHLY",
    icon: <MdDiscount className="text-xl rotate-90 text-yellow-500" />,
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
    icon: <BiSolidCrown className="text-2xl text-yellow-500" />,
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
    icon: <MdDiamond className="text-2xl text-yellow-500" />,
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
    <div className="bg-black text-white  py-16 px-4 sm:px-6 lg:px-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-4 md:px-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="group rounded-2xl p-[2px] bg-gradient-to-b from-[#292929] to-[#000000] shadow-lg transition-all"
          >
            <div className="bg-[#121117] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
              {/* Plan Badge */}
              <div className="flex items-center gap-2 bg-[#1F1E25] rounded-full px-4 py-2 w-max mb-6 text-white">
                <span className="text-lg p-2 rounded-full bg-gray-800 -mt-1">
                  {plan.icon}
                </span>
                <span className="text-lg font-semibold transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <h2 className="text-4xl font-medium text-white group-hover:text-yellow-500">
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
                bg-black text-white hover:bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] hover:text-black 
                bg-transparent 
                hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] 
                shadow-[0_0_6px_#FFD70066]
                transition-all duration-300"
              >
                Buy Now
              </button>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-300 group-hover:bg-gradient-to-t group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:to-[#452e06] flex items-center justify-center transition-all duration-300">
                      <span className="text-xs font-bold text-gray-800 group-hover:text-black">
                        ✓
                      </span>
                    </div>
                    <span className="font-medium text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
