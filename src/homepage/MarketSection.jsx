import React, { useState } from "react";
import ForexSection from "./ForexSection";
import ScrollingCards from "./ScrollingCards";
import TrustSection from "./TrustSection";

const services = [
  "Forex",
  "Comex",
  "Crypto",
  "Portfolio Management",
  "Copy Trading",
  "Robot Trading",
];

const MarketSection = () => {
  const [active, setActive] = useState("Forex");

  return (
    <section className="bg-black text-white px-6 md:px-16 py-20 text-center font-sans mt-10">
      <button className="mb-6 px-6 py-2 rounded-full border border-gray-700 hover:border-yellow-400 transition">
        Our Products
      </button>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Your Gateway to <span className="text-gradient">Global Financial Markets</span>
      </h2>

      {/* Subtext */}
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10">
        Step into the world of professional trading with our comprehensive suite of financial
        services. We combine cutting-edge technology with expert market knowledge to give
        you an edge in today’s dynamic markets.
      </p>

      {/* Buttons with hover & active effect */}
      <div className="flex flex-wrap gap-4 justify-center mb-20">
        {services.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out
              ${
                active === item
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-black shadow-lg"
                  : "bg-zinc-900 text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 hover:text-black"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

    <div>
        <ForexSection/>
    </div>
<div>
    <ScrollingCards/>
</div>
     
    </section>
  );
};

export default MarketSection;
