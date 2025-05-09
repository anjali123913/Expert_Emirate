import React from 'react';

const GrowthForm = () => {
  return (
    <div className="bg-[#141215] px-5 py-10 md:px-12 lg:px-20 rounded-xl text-white max-w-5xl mx-auto w-full">
      <h2
        className="text-[28px] md:text-[32px] font-semibold text-center mb-10"
        style={{
          fontFamily: 'Poppins',
          lineHeight: '100%',
          letterSpacing: '0.12em',
          background: 'linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Join people of growth mindset
      </h2>

      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full"
        />

        <select className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full text-white">
          <option className="text-black">Select Country</option>
          <option className="text-black">India</option>
          <option className="text-black">USA</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <input
            type="text"
            placeholder="Position"
            className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Select Highest Qualification"
            className="bg-transparent border border-[#333] rounded-full px-5 py-3 outline-none w-full"
          />
          <input
            type="file"
            className="w-full bg-transparent border border-[#333] rounded-full px-5 py-3 text-white file:bg-white file:text-black file:rounded-full file:px-3 file:py-1"
          />
        </div>

        <div className="flex items-start gap-2 text-sm">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-gray-300">
            Accept Terms of service and Privacy Policy
          </label>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-gradient-to-b from-[#FFE976] via-[#C0971C] to-[#281000] text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_#C0971C] hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GrowthForm;
