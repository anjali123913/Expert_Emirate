import React from "react";
import { motion } from "framer-motion";

const cardData = [
  { pair: "AUD/USD", bid: "5.669", spread: "0", ask: "8.5675" },
  { pair: "EUR/USD", bid: "5.669", spread: "0", ask: "8.5675" },
  { pair: "GBP/USD", bid: "5.669", spread: "0", ask: "8.5675" },
];

const ScrollingCards = () => {
  return (
    <div className="overflow-hidden w-full bg-black py-8">
      <motion.div
        className="flex w-max gap-6 animate-scrollCards"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...cardData, ...cardData].map((card, index) => (
          <div
            key={index}
            className="bg-[#19171E] text-white rounded-2xl p-6 w-[250px] shadow-lg border border-neutral-700"
          >
            <h2 className="text-xl font-semibold mb-4">
              <span className="text-white">{card.pair}</span>
            </h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">BID PRICE</span>
              <span className="text-gray-300">SPREAD</span>
              <span className="text-gray-300">ASK PRICE</span>
            </div>
            <div className="flex justify-between font-semibold text-base mb-4">
              <span className="text-red-500">{card.bid}</span>
              <span className="text-white">{card.spread}</span>
              <span className="text-green-500">{card.ask}</span>
            </div>
            <button className="mt-2 bg-gradient-to-r from-[#F1C644] to-[#A47E1B] text-black font-semibold text-sm px-4 py-2 rounded-full shadow hover:scale-105 transition">
              View More →
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingCards;
