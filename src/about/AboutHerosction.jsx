import React from "react";
import About1 from "../assets/aboutus/image1.png"; // Green chart
import About2 from "../assets/aboutus/image2.png"; // Gold chart
import About3 from "../assets/aboutus/image 3.png"; // Abstract

const AboutHerosction = () => {
  return (
    <div className="w-full px-4 py-20 bg-black">
      {/* Heading */}
      <h1
        className="text-center font-bold mb-16"
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

      {/* Grid */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-7xl mx-auto font-[Poppins]">
        {/* Left Block */}
        <div className="flex-1 max-w-sm group">
          <img
            src={About1}
            alt="Left Chart"
            className="w-full h-[260px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          <p
            className="mt-4 text-left text-[15px] leading-relaxed"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <strong>Expert Emirates</strong> is a leading force in the financial
            markets, empowering traders with cutting-edge insights and
            AI-driven strategies. Our goal is to turn market uncertainties into
            profitable opportunities for our clients worldwide.
          </p>
        </div>

        {/* Center Image Block */}
        <div className="flex-1 group flex items-center justify-center">
          <img
            src={About2}
            alt="Gold Bars Center"
            className="w-full h-[360px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Block */}
        <div className="flex-1 max-w-sm flex flex-col justify-between group">
          <p
            className="mb-4 text-left italic text-[15px] leading-relaxed"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span style={{ fontStyle: "italic" }}>At Expert Emirates</span>, we
            combine expertise, innovation, and dedication to help traders at all
            levels succeed in the forex world. Join us and take your trading
            journey to the next level.
          </p>
          <img
            src={About3}
            alt="Right Image"
            className="w-full h-[260px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHerosction;
