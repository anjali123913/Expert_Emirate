import React from "react";
import standardIcon from "../assets/Price/image1.png";
import proIcon from "../assets/Price/image2.png";
import ultraIcon from "../assets/Price/image3.png";

const plans = [
  {
    name: "Standard Plan",
    price: "$199",
    duration: "/MONTHLY",
    icon: standardIcon,
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
    icon: proIcon,
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
    description: "Everything in Standard, plus enhanced features for serious traders.",
  },
  {
    name: "Ultra Plan",
    price: "$999",
    duration: "/HALF–YEARLY",
    icon: ultraIcon,
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
    description: "Our premium package for ultimate trading performance. Includes everything in Pro.",
  },
];

export default function PricingSection() {
  return (
    <div className="bg-black text-white py-20 px-4 md:px-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-[#121117] rounded-2xl p-8 w-full max-w-sm mx-auto shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 bg-[#1F1E25] text-white rounded-full px-4 py-2 w-max mb-6">
              <img src={plan.icon} alt={`${plan.name} icon`} className="w-5 h-5" />
              <span className="text-sm font-semibold">{plan.name}</span>
            </div>

            <h2 className="text-4xl font-bold text-white">
              {plan.price}
              <span className="text-base font-normal ml-1">{plan.duration}</span>
            </h2>

            <p className="text-sm text-gray-400 my-4">{plan.description}</p>

            <button
              className="group w-[147px] h-[48px] px-[40px] py-[10px] text-yellow-500 font-bold text-sm bg-transparent mb-6 transition-all duration-300"
              style={{
                borderImage:
                  "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "9999px", // FULLY ROUNDED
              }}
              onMouseEnter={(e) => {
                e.currentTarget.parentElement.querySelectorAll(".feature-circle").forEach((el) => {
                  el.classList.add("bg-yellow-400", "border-yellow-400");
                  el.querySelector("span").classList.remove("hidden");
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.parentElement.querySelectorAll(".feature-circle").forEach((el) => {
                  el.classList.remove("bg-yellow-400", "border-yellow-400");
                  el.querySelector("span").classList.add("hidden");
                });
              }}
            >
              Buy Now
            </button>

            <ul className="space-y-3 text-sm text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="feature-circle w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center transition-all duration-300">
                    <span className="text-xs font-bold text-black hidden">✓</span>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
