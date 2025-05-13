// markets smarter
import React from "react";
import InsightImage from "../assets/insight.png";

export default function InsightSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-14 md:py-20 font-poppins w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-16">
        
        {/* LEFT TEXT BLOCK */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Dominate {" "}
            <span className="text-2xl sm:text-3xl md:text-3xl font-bold font-sans leading-tight  bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent  tracking-wider mt-3">Markets Smarter <span className="text-white text-lg">,</span> Faster<span className="text-white text-lg">,</span></span>
            <br />
            and with <span className="text-2xl sm:text-3xl md:text-3xl font-bold font-sans leading-tight  bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent  tracking-wider mt-3">Unmatched Precision</span>
          </h2>
          <p className="mt-4 text-sm md:text-lg text-gray-100 tracking-tight font-sans font-normal">
            At Expert Emirates, we don’t just follow trends—we create them.
            Whether you're trading Forex, Crypto, or COMEX, our arsenal of tools and
            expertise ensures you stay ahead of the curve.
          </p>
          <ul className="mt-6 space-y-3 text-sm md:text-base list-disc list-inside">
            <li>
              <span className="font-semibold text-white">
                Get top-notch market insights
              </span>{" "}
              from seasoned Forex pros
            </li>
            <li>
              <span className="font-semibold text-white">
                Enter real-time sessions
              </span>{" "}
              tracking world currency movements
            </li>
            <li>
              <span className="font-semibold text-white">
                Swap trade ideas
              </span>{" "}
              with fellow traders and boost your game
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={InsightImage}
            alt="Insight Illustration"
            className="w-64 md:w-80 rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
