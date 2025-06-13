import { Link } from "react-router-dom";
import React from "react";
import wave from "../../assets/stayar.png";

const ServicesCard = () => {
  return (
    <div className="bg-black rounded-xl p-6 min-h-[400px] w-full max-w-xl text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={wave}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Button container */}
      <div className="z-10 relative flex flex-col items-center gap-4 pt-44 w-full px-4">
        {/* Forex + Crypto in same row and same size */}
        <div className="flex justify-between gap-4 w-full">
          <Link to="/forex-gold" className="flex-1">
            <button className="w-full h-12 bg-black/40 rounded-full border border-yellow-400 text-white text-sm font-medium uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black">
              FOREX + GOLD
            </button>
          </Link>

          <Link to="/CryptoCurrency" className="flex-1">
            <button className="w-full h-12 bg-black/40 rounded-full border border-yellow-400 text-white text-sm font-medium uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black">
              CRYPTOCURRENCY
            </button>
          </Link>
        </div>

        {/* Funded Accounts (full width) */}
        <Link to="/FundedAccounts" className="w-full">
          <button className="w-full h-12 bg-black/40 rounded-full border border-yellow-400 text-white text-sm font-medium uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black">
            FUNDED ACCOUNTS
          </button>
        </Link>

        {/* Portfolio Management (full width) */}
        <Link to="/profile-management" className="w-full">
          <button className="w-full h-12 bg-black/40 rounded-full border border-yellow-400 text-white text-sm font-medium uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black">
            PORTFOLIO MANAGEMENT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
