import React, { useState } from "react";

export default function ContactForm() {
  const wrapperStyle = {
    background:
      "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
    padding: "2px",
    borderRadius: "9999px",
  };

  const GradientButton = ({ text }) => {
    const [hover, setHover] = useState(false);

    return (
      <button
        type="submit"
        className="w-full h-9 sm:h-10 md:h-11 rounded-full text-[11px] sm:text-xs font-medium capitalize transition-all duration-300"
        style={{
          background: hover
            ? "black"
            : "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
          color: hover ? "white" : "black", // ✅ Hover text white
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div
        className="w-full max-w-5xl p-4 sm:p-6 md:p-8 rounded-2xl border border-[#2d2d2d]"
        style={{ background: "#121117" }}
      >
        {/* Gradient Heading */}
        <h2
          className="text-center text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[100%] tracking-[0.12em] mb-6 sm:mb-8"
          style={{
            fontFamily: "Poppins",
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* First + Last Name */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              placeholder="First Name"
              className="w-full sm:w-1/2 p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full sm:w-1/2 p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
          />

          {/* Service Option */}
          <select className="w-full p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] text-[#A3A3A3] text-sm">
            <option>Customized Services</option>
          </select>

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Type Your Message Here"
            className="w-full p-3 rounded-2xl bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
          ></textarea>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="accent-yellow-500 mt-1"
            />
            <label htmlFor="terms" className="text-xs text-[#A3A3A3]">
              Accept Terms of service and Privacy Policy
            </label>
          </div>

          {/* Gradient Send Message Button */}
          <div className="flex justify-center pt-2 w-full">
            <div style={wrapperStyle} className="w-full max-w-xs">
              <GradientButton text="Send message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
