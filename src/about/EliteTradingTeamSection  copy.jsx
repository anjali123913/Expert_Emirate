import React, { useState } from "react";
import Image5 from "../assets/platformMT4/image6.png"; // Default image
import Image5Hover from "../assets/platformMT4/image6-hover.png"; // Hover image

const EliteTradingTeamSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 gap-10"
      style={{ background: "#000000" }}
    >
      {/* Left - Text */}
      <div className="w-full md:w-1/2">
        <h2
          className="mb-4"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "55px",
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Expert Emirates: Your Elite Trading Team
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
          At Expert Emirates, we're more than just a team—we're a powerhouse of market strategists,
          analysts, and innovators dedicated to helping traders thrive in the fast-paced world of forex and commodities.
          <br /><br />
          <strong>Proven Expertise:</strong> Our seasoned professionals bring years of experience in financial markets, ensuring precision-driven insights.
          <br />
          <strong>AI & Data-Backed Strategies:</strong> We combine cutting-edge technology with deep market analysis to deliver high-accuracy signals.
          <br />
          <strong>Bridging the Gap:</strong> Whether you're a beginner or an expert, our mission is to empower you with knowledge, strategies, and confidence to navigate the markets successfully.
          <br />
          <strong>Global Trust:</strong> Our reputation as a leading forex and Comex signal provider comes from our commitment to reliability, innovation, and trader success.
        </p>
      </div>

      {/* Right - Hover Image */}
      <div
        className="w-full md:w-1/2 max-w-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? Image5Hover : Image5}
          alt="Elite Trading Team"
          className="w-full h-auto rounded-xl object-cover transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default EliteTradingTeamSection;
