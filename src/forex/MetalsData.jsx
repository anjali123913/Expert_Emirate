import React, { useState } from "react";

const metalsData = [
  {
    instrument: "XAGUSD",
    description: "Silver vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
  {
    instrument: "XAUUSD",
    description: "Gold vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
  {
    instrument: "XPTUSD",
    description: "Platinum vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
  {
    instrument: "XPDCAD",
    description: "Palladium vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
];

const MetalsTable = () => {
  const [search, setSearch] = useState("");

  const filteredMetals = metalsData.filter((item) =>
    item.instrument.toLowerCase().includes(search.toLowerCase())
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
          Metals
        </span>
      </h2>

      {/* Table Section */}
      <div className="w-full max-w-6xl bg-[#1e1e2f] rounded-xl p-8 shadow-xl">
        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded-md bg-[#2c2c3e] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#2b2b3d] text-gray-400 uppercase text-sm">
              <tr>
                <th className="px-5 py-3">Instruments ↓</th>
                <th className="px-5 py-3">Description ↓</th>
                <th className="px-5 py-3">Bid Price ↓</th>
                <th className="px-5 py-3">Ask Price ↓</th>
                <th className="px-5 py-3">Spread ↓</th>
              </tr>
            </thead>
            <tbody>
              {filteredMetals.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#2c2c3e]"
                >
                  <td className="px-5 py-3">{item.instrument}</td>
                  <td className="px-5 py-3">{item.description}</td>
                  <td className="px-5 py-3">{item.bid}</td>
                  <td className="px-5 py-3">{item.ask}</td>
                  <td className="px-5 py-3">{item.spread}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <button
          className="px-8 py-3 rounded-full font-semibold text-black hover:scale-105 transition-all duration-300 shadow-lg"
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

export default MetalsTable;
