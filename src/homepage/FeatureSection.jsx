import React from "react";
import megaphone from "../assets/megaphone.png";
import folder from "../assets/folder.png";
import heartBox from "../assets/heart-box.png";
import rocket from "../assets/rocket.png";

const features = [
  {
    title: "Why Tresure Funded ?",
    icon: megaphone,
  },
  {
    title: "Account Management",
    icon: folder,
  },
  {
    title: "Support",
    icon: heartBox,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-black px-4 md:px-8 lg:px-10 py-14 font-[Poppins] mx-auto">
      {/* Heading */}
      <h2 className="text-white text-center align-middle font-bold text-[32px] leading-[100%] tracking-[0em] font-sans my-5">
        Choose Where To Go Next
      </h2>

      {/* Cards */}
     <div className=" flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 flex-wrap mt-20">
  {features.map((item, index) => (
    <div
      key={index}
      className="relative group w-full sm:w-[350px] h-[130px] rounded-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl  group mt-20"
    >
      {/* Gradient BG on hover */}
      <div className="  h-full flex flex-col rounded-lg justify-center group-hover:rounded-lg items-center text-center bg-[#141414] text-white group-hover:bg-gradient-to-b group-hover:from-[#e4a020] group-hover:via-yellow-300 group-hover:to-[#e4a020] transition-all duration-300">
        
        {/* Icon */}
        <div className="relative z-50 mb-2 -mt-32 group-hover:-mt-36 transition-transform duration-300 group-hover:-translate-y-2">
          <img
            src={item.icon}
            alt={item.title}
            className="h-[150px] w-auto"
          />
        </div>

        {/* Title Text */}
        <p className="text-[17px] font-bold font-sans px-4 text-transparent bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text transition-all duration-300 group-hover:bg-none group-hover:text-black">
          {item.title}
        </p>
      </div>
    </div>
  ))}
</div>


      {/* CTA Section */}
      <div className="mt-16 bg-[#1D1B25] rounded-[20px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-10 gap-8">
  {/* TEXT SECTION */}
  <div className="text-center md:text-left w-full md:w-5/6">
    <p className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-6 text-[24px] sm:text-[28px] md:text-[30px] leading-[1.4] tracking-[0.12em] font-bold font-sans">
      Want to get started?
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
        Join Expert Emirates
      </button>
    </div>
  </div>

  {/* IMAGE SECTION */}
  <div className="relative mt-8 md:-mt-20 h-72 md:h-64 w-full max-w-[250px] md:max-w-none z-10 flex items-end justify-end right-10">
    <img
      src={rocket}
      alt="rocket image"
      className="w-full h-full object-contain"
    />
  </div>
</div>

    </div>
  );
}
