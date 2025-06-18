import React from "react";
import heroImage from "../assets/dashboard/heroImage.png";
import DashHome from "./components/DashHome";

export default function WelcomeBanner() {
  return (
    <DashHome>
      {/* Outer black background */}
      <div className="w-full bg-black py-10 px-4">
        {/* Inner card */}
        <div
          className="w-full max-w-7xl mx-auto bg-[#1D1B25] text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
          role="region"
          aria-label="Welcome banner"
        >
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              WELCOME TO{" "}
              <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-bold">
                EXPERT EMIRATES
              </span>
            </h2>
            <p className="text-sm text-gray-300 mb-4 max-w-xl px-1 sm:px-0">
              The welcome mail has been sent to you. Please check the mail for
              your account credentials and start your trading journey.
            </p>

            {/* Plan Info */}
            <div className="flex items-center gap-3 text-sm flex-wrap">
              <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
                • Plan Active
              </span>
              <span className="hidden sm:inline-block bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                Expire: 28-Oct-2025
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-40 lg:w-52 xl:w-60 flex-shrink-0">
            <img
              src={heroImage}
              alt="Welcome graphic illustration for Expert Emirates dashboard"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </DashHome>
  );
}
