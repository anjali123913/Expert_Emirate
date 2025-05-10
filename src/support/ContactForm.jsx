import React from "react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div
        className="w-full max-w-5xl p-8 rounded-md border border-[#2d2d2d]"
        style={{ background: "var(--Dark-grey, #121117)" }}
      >
        <h2
          className="text-center text-[32px] font-[600] leading-[100%] tracking-[0.12em] mb-8"
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
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
          />
          <select className="w-full p-3 rounded-full bg-[#1E1D25] border border-[#2d2d2d] text-[#A3A3A3] text-sm">
            <option>Customized Services</option>
          </select>
          <textarea
            rows="4"
            placeholder="Type Your Message Here"
            className="w-full p-3 rounded-2xl bg-[#1E1D25] border border-[#2d2d2d] placeholder-[#A3A3A3] text-white text-sm"
          ></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="accent-yellow-500" />
            <label htmlFor="terms" className="text-xs text-[#A3A3A3]">
              Accept Terms of service and Privacy Policy
            </label>
          </div>
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-6 py-2 rounded-full text-sm font-[600] tracking-[0.12em] shadow-[0_0_10px_#C0971C]"
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                lineHeight: "29px",
                background:
                  "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
                color: "black",
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
