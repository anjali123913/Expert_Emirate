import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

const dummyData = [
  {
    id: 4567,
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    amount: "$1000",
    method: "365-374-4961",
    created: "$1000",
    action: "Lueilwitz and Sons",
    status: "Active",
  },
  {
    id: 4567,
    name: "Lucien Obrien",
    email: "ashlynn.ohara62@gmail.com",
    amount: "$1900",
    method: "904-986-2836",
    created: "$1900",
    action: "Gleichner, Mueller and Tromp",
    status: "Pending",
  },
  {
    id: 4567,
    name: "Deja Brady",
    email: "milo.farrell@hotmail.com",
    amount: "$1200",
    method: "399-757-9909",
    created: "$1200",
    action: "Nikolaus – Leuschke",
    status: "Banned",
  },
  {
    id: 4567,
    name: "Harrison Stein",
    email: "violet.strake86@yahoo.com",
    amount: "$800",
    method: "692-767-2903",
    created: "$500",
    action: "Hegmann, Kreiger and Bayer",
    status: "Rejected",
  },
  {
    id: 4567,
    name: "Reece Chung",
    email: "letha.lubowitz24@yahoo.com",
    amount: "$1600",
    method: "990-588-5716",
    created: "$1600",
    action: "Grimes Inc",
    status: "Active",
  },
];

export default function TransactionHistory() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(dummyData);

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    setFiltered(
      dummyData.filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  return (
    <div className="flex min-h-screen  bg-[#121117]">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-4">
          <div className="min-h-screen bg-[#121117] text-white p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-yellow-400">
                Transaction History
              </h2>
              <button className="bg-[#26242f] px-4 py-2 rounded text-white">
                + Add Payment
              </button>
            </div>

            <div className="flex flex-wrap gap-3 items-center mb-4 text-sm">
              {["All", "Active", "Pending", "Banned", "Rejected"].map(
                (tab, idx) => (
                  <button
                    key={idx}
                    className="bg-[#1e1d24] px-3 py-1 rounded text-gray-300"
                  >
                    {tab}{" "}
                    <span className="text-xs ml-1 bg-[#26242f] px-2 py-0.5 rounded-full">
                      {Math.floor(Math.random() * 20)}
                    </span>
                  </button>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search Plan Name"
                className="bg-[#1e1d24] text-white px-4 py-2 rounded w-full sm:w-64"
              />
              <button className="bg-[#26242f] px-4 py-2 rounded">
                Download Excel
              </button>
              <select className="bg-[#26242f] px-4 py-2 rounded">
                <option>Show 10</option>
                <option>Show 20</option>
              </select>
            </div>

            <div className="overflow-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 bg-[#1e1d24]">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Payment Method</th>
                    <th className="px-4 py-2">Date Created</th>
                    <th className="px-4 py-2">Action</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#26242f] hover:bg-[#1f1e26]"
                    >
                      <td className="px-4 py-3">#{row.id}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={`https://i.pravatar.cc/32?img=${i + 1}`}
                            alt="avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p>{row.name}</p>
                            <p className="text-gray-500 text-xs">{row.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{row.amount}</td>
                      <td className="px-4 py-3">{row.method}</td>
                      <td className="px-4 py-3">{row.created}</td>
                      <td className="px-4 py-3">{row.action}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            row.status === "Active"
                              ? "bg-green-600 text-white"
                              : row.status === "Pending"
                              ? "bg-yellow-400 text-black"
                              : row.status === "Banned"
                              ? "bg-red-600"
                              : "bg-gray-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-gray-300 hover:text-white">
                          ✏️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
              <p>Rows per page: 5</p>
              <p>6–10 of 11</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
