import React from "react";
import standardIcon from "../assets/Price/image1.png";
import proIcon from "../assets/Price/image2.png";
import ultraIcon from "../assets/Price/image3.png";
import { MdDiscount } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";

const plans = [
  {
    name: "Standard Plan",
    price: "$199",
    duration: "/MONTHLY",
    icon: (
      <MdDiscount className="group-hover:text-yellow-500 text-xl rotate-90 " />
    ),
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
    icon: <BiSolidCrown className="group-hover:text-yellow-500 text-2xl  " />,
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
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
  },
];

export default function PricingSection() {
  return (
    <div className="bg-black text-white pb-20 p-3 px-4 md:px-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="group bg-[#121117] border hover:border-yellow-500 rounded-2xl p-8 w-full max-w-sm mx-auto shadow-lg flex flex-col justify-between"
          >
            <div className="group flex items-center gap-2 bg-[#1F1E25] rounded-full px-4 py-2 w-max mb-6 text-white">
              <span className="text-lg p-2 rounded-full bg-gray-800">
                {plan.icon}
              </span>
              <span
                className="text-lg font-semibold transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent"
                style={{ fontFamily: "sans-serif" }}
              >
                {plan.name}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white group-hover:text-yellow-500">
              {plan.price}
              <span className="text-base font-normal ml-1">
                {plan.duration}
              </span>
            </h2>

            <p
              className="text-md font-semibold  text-gray-200 my-4"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "500",
              }}
            >
              {plan.description}
            </p>

            <button
              className="w-[147px] h-[48px]  text-yellow-500 font-bold text-sm bg-transparent mb-6 transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:via-50% group-hover:to-[#452e06]  rounded-full px-6 py-2 group-hover:text-black sm:text-base border border-t-yellow-600 border-b-yellow-600 group-hover:border-black font-sans hover:bg-yellow-500  hover:text-black border-yellow-800 hover:border-yellow-600"
              
            >
              
              Buy Now
            </button>

            <ul className="space-y-3 text-sm text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="feature-circle  w-5 h-5 rounded-full  group-hover:border-black  group-hover:bg-gradient-to-t group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:via-50% group-hover:to-[#452e06] flex items-center justify-center transition-all duration-300 bg-gray-300 p-2">
                    <span className="text-xs font-bold text-gray-800 group-hover:text-black transition-all duration-300">
                      ✓
                    </span>
                  </div>
                  <span
                    className="text-md font-semibold  text-gray-300 "
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
