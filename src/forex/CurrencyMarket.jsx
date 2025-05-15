import React from "react";
import { motion } from "framer-motion";

// 4 card images
import usdcad from "../assets/forex/cards/usdcad.png";
import usdchf from "../assets/forex/cards/eurusd.png";
import audusd from "../assets/forex/cards/usdcad.png";
import eurusd from "../assets/forex/cards/usdchf.png";

// Array of cards
const cards = [usdcad, usdchf, audusd, eurusd];

const CurrencyMarket = () => {
  // Repeat cards for seamless scrolling
  const scrollingCards = [...cards, ...cards];

  return (
    <div className="bg-black py-4 overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {scrollingCards.map((image, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={image}
              alt={`forex-card-${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CurrencyMarket;
