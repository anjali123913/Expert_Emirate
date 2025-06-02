import React from "react";
import mt4DownloadImage from "../assets/platformMT4/image5.png"; // Use your image from Screenshot (298)

const DownloadMT4Section = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 font-[Poppins]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2
            className="text-[32px] md:text-[42px] font-semibold leading-[100%]"
            style={{
              background:
                "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Download MT4 <br /> Trading Platform
          </h2>

          <p className="text-sm md:text-base text-gray-300">
            Select a Download Type as per your Device<br/> Operating System and 
            Your Account regulations.
          </p>

          {/* Button */}
          <button
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-black transition-all duration-300 hover:brightness-110"
            style={{
              background:
                "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
            }}
          >
            Download MT4 Platform
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <img
            src={mt4DownloadImage}
            alt="MT4 Download Illustration"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadMT4Section;
