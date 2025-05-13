import React from "react";
import Image4 from "../assets/aboutus/image4.png";

const SmartTradeSection = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-16 gap-10"
      style={{ background: "#000000" }}
    >
      {/* Left Side - Image with Gradient Text Overlay */}
      <div className="relative w-full md:w-1/2 max-w-md">
        <img
          src={Image4}
          alt="Smart Trading"
          className="w-full h-auto rounded-xl object-cover"
        />
       
      </div>

      {/* Right Side - Heading + Text */}
      <div className="w-full md:w-1/2">
        <h2
          className="mb-4"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "55px",
            background:
              "linear-gradient(180deg, #281000 3.18%, #C0971C 14.77%, #FFE976 25.68%, #C0971C 37.05%, #281000 48.64%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Master the Markets with Expert Emirates – Your Path to Financial Success
        </h2>

        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0.12em",
            background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          At Expert Emirates, we don’t just provide forex and crypto signals—we unlock profitable
          opportunities tailored for every trader. Backed by cutting-edge AI, expert analysis,
          and market precision, our signals turn uncertainty into calculated success.
        </p>
      </div>
    </div>
  );
};

export default SmartTradeSection;
