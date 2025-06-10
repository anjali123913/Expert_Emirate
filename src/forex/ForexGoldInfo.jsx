import React from "react";

const ForexGoldInfo = () => {
  const [activeTab, setActiveTab] = React.useState("forex");

  const content = {
    forex: {
      heading: "What is Forex?",
      description: `Forex (Foreign Exchange) is the global marketplace where currencies are bought and sold. With a daily trading volume of over $7 trillion, it is the largest and most liquid financial market in the world. Traders profit by speculating on currency price movements, leveraging economic trends, and global events. Unlike stock markets, Forex operates 24 hours a day, 5 days a week, offering endless trading opportunities. Whether you're a beginner or a pro, mastering Forex can unlock financial growth and independence.`,
    },
    gold: {
      heading: "What is COMEX?",
      description: `COMEX (Commodity Exchange) is the world’s leading market for trading precious metals such as gold, silver, copper, and other commodities. As a division of the Chicago Mercantile Exchange (CME Group), COMEX provides a highly liquid marketplace for traders, investors, and institutions to buy and sell metal futures and options with transparency and efficiency.`,
    },
  };

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 md:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-10">
          {["forex", "gold"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 text-black"
                    : "bg-[#1a1a1a] text-white"
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
          {content[activeTab].heading}
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed tracking-wide text-[17px]">
          {content[activeTab].description}
        </p>
      </div>
    </section>
  );
};

export default ForexGoldInfo;
