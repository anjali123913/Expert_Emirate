import React, { useState } from "react";

const data = [
  { symbol: "AUDUSD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "EURUSD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "GBPUSD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "USDCAD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "USDJPY", bid: "0.63190", ask: "0.63194", spread: "0.1" },
];

const PopularSharesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = data.filter((item) =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center justify-center font-poppins text-white bg-black">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Most Popular{" "}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #281000 -6.52%, #C0971C 20.64%, #FFE976 46.21%, #C0971C 72.84%, #281000 100%)",
          }}
        >
          Shares
        </span>
      </h2>

      {/* Table Box */}
      <div className="w-full max-w-5xl bg-[#1e1e2f] rounded-xl p-6">
        {/* Search Box */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-[#2c2c3e] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#2b2b3d] text-gray-400 uppercase">
              <tr>
                <th className="px-4 py-2">Symbol ↓</th>
                <th className="px-4 py-2">Bid Price ↓</th>
                <th className="px-4 py-2">Ask Price ↓</th>
                <th className="px-4 py-2">Spread ↓</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#2c2c3e]"
                >
                  <td className="px-4 py-2">{item.symbol}</td>
                  <td className="px-4 py-2">{item.bid}</td>
                  <td className="px-4 py-2">{item.ask}</td>
                  <td className="px-4 py-2">{item.spread}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          className="px-6 py-2 rounded-full font-semibold text-black hover:scale-105 transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, #281000 -6.52%, #C0971C 20.64%, #FFE976 46.21%, #C0971C 72.84%, #281000 100%)",
          }}
        >
          View Full Contract Specifications →
        </button>
      </div>
    </div>
  );
};

export default PopularSharesTable;
