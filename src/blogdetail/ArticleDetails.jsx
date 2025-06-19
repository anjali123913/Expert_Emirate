import React from "react";
import user1 from "../assets/users/user1.png";
import user2 from "../assets/users/user2.png";
import user3 from "../assets/users/user3.png";

const ArticleDetails = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-4 py-10 font-[Poppins]">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <button className="flex items-center text-white hover:underline text-sm">
          ← Back
        </button>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto space-y-5 text-[16px] text-gray-200 leading-relaxed">
        <p>
          <strong className="text-white">PENDLEUSDT</strong> is preparing for
          distribution after a prolonged consolidation. The price is testing a
          key resistance level, which, if broken, will trigger a rally...
        </p>
        <p>
          The coin is breaking through the flat resistance and consolidating
          above the upper border of the range. The key level is{" "}
          <strong>4.400</strong>. If the bulls hold their ground above this
          level, the growth may continue.
        </p>
        <p>
          Bitcoin is showing bullish dynamics, which supports the altcoin
          market. The bullish trend may continue in altcoins as well. Pendle may
          move from consolidation to distribution.
        </p>
        <p>
          <strong>Resistance levels:</strong> 4.32, 4.400
        </p>
        <p>
          <strong>Support levels:</strong> 4.024, 3.622
        </p>
        <p>
          If the coin manages to consolidate above the key resistance level,
          thereby confirming the breakout, the price may move to aggressive
          growth. In this case, the target could be <strong>4.800</strong>.
        </p>

        <hr className="border-t border-gray-700 mt-6" />

        {/* Footer: Signature + Reactions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4">
          <p className="text-white font-semibold">Best regards, Expert Emirates</p>

          <div className="flex items-center gap-4">
            {/* Heart icon + count */}
            <div className="flex items-center gap-1 text-white text-sm">
              <span className="text-red-500 text-lg">❤️</span>
              32
            </div>

            {/* Profile Images */}
            <div className="flex -space-x-2">
              <img
                src={user1}
                alt="user1"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img
                src={user2}
                alt="user2"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <img
                src={user3}
                alt="user3"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
              <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-black">
                +8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
