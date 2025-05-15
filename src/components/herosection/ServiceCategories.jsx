import {Link} from "react-router-dom";
import React from "react";
import wave from "../../assets/wave.png";

const ServicesCard = () => {
  return (
    <div className="bg-black rounded-xl p-6 h-96 w-full max-w-xl text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={wave} // use the wave-style image you uploaded
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Button container */}
      <div className="z-10 relative flex flex-wrap justify-center gap-3 pt-24">
        <button className="relative overflow-hidden bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm transition hover:text-black z-0 group">
          <span className="relative z-10"> FOREX + GOLD</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 via-transparent to-yellow-800 bg-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
        </button>
<Link to="/CryptoCurrency">

        <button className="relative overflow-hidden bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm transition hover:text-black z-0 group">
          <span className="relative z-10"> CRYPTOCURRENCY</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 via-transparent to-yellow-800 bg-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
        </button>
</Link>

        <button className="relative overflow-hidden bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm transition hover:text-black z-0 group">
          <span className="relative z-10"> FNDED ACCOUNTS</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 via-transparent to-yellow-800 bg-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
        </button>

        <button className="relative overflow-hidden bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm transition hover:text-black z-0 group">
          <span className="relative z-10"> ROBOT TRADING</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 via-transparent to-yellow-800 bg-yellow-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
        </button>
      
      <Link to="profile-management
  ">
        <button className="relative overflow-hidden bg-black text-white border border-yellow-400 rounded-full px-4 py-2 text-sm transition hover:text-black z-0 group">
          <span className="relative z-10">PORTFOLIO MANAGEMENT</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-800 via-transparent to-yellow-800 bg-yellow-400 opacity-0 group-hover:opacity-100 transition duration-300"></span>
        </button>
      </Link>
      </div>
      
    </div>
  );
};

export default ServicesCard;
