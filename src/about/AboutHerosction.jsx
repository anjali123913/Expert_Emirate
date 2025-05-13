import React from "react";
import About1 from "../assets/aboutus/image1.png"; // Green chart
import About2 from "../assets/aboutus/image2.png"; // Gold chart
import About3 from "../assets/aboutus/image 3.png"; // Abstract

const AboutHerosction = () => {
  return (
    <div
      className="w-full px-4 py-20"
      style={{ background: "var(--background-color-pure-black, #000000)" }}
    >
      {/* Heading */}
      <h1
        className="text-center font-[600] mb-12"
        style={{
          fontFamily: "Poppins",
          fontSize: "clamp(2rem, 6vw, 52px)",
          lineHeight: "62px",
          letterSpacing: "0.43em",
          background:
            "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome to Expert Emirates
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto">
        {/* Left Block */}
        <div className="flex flex-col items-start">
          <img src={About1} alt="Chart Left" className="w-full h-auto" />
          <p
            className="mt-4 px-2 md:px-0 text-left"
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              lineHeight: "150%",
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Expert Emirates is a leading force in the financial markets,
            empowering traders with cutting-edge insights and AI-driven
            strategies. Our goal is to turn market uncertainties into profitable
            opportunities for our clients worldwide.
          </p>
        </div>

        {/* Center Image (Slightly Emphasized) */}
        <div className="flex items-start justify-center my-6 md:my-0 px-2">
          <img
            src={About2}
            alt="Center Image"
            className="w-full h-auto scale-[1.05] md:scale-100"
          />
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-start">
          <p
            className="mb-4 px-2 md:px-0 text-left"
            style={{
              fontFamily: "Poppins",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(14px, 2.5vw, 16px)",
              lineHeight: "150%",
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span style={{ fontStyle: "italic" }}>At Expert Emirates</span>, we
            combine expertise, innovation, and dedication to help traders at
            all levels succeed in the forex world. Join us and take your trading
            journey to the next level.
          </p>
          <img src={About3} alt="Right Image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutHerosction;
