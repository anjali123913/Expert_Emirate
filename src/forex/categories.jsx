import React, { useState } from "react";

const categories = [
  "Forex + Gold",
  "Crypto Currency",
  "Portfolio Management",
  "Funded Accounts",
  "Trading Bot",
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Forex + Gold");

  return (
    <div className="w-full bg-black flex justify-center px-4">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full max-w-[1240px] py-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`min-w-[140px] md:min-w-[165px] h-[39px] px-[10px] py-[5px] rounded-[90px] text-sm font-semibold font-poppins transition duration-300
              border text-center
              ${
                activeTab === cat
                  ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]"
                  : "text-white bg-black"
              }
              border-[1px] border-solid border-[rgba(200,161,39,0.5)]
              shadow-[inset_0_0_25px_0px_#FFD70033,0_0_20px_2px_#FED60033]
              hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] hover:text-black
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
