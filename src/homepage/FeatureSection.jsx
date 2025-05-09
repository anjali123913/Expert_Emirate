import React from "react";
import megaphone from "../assets/megaphone.png";
import folder from "../assets/folder.png";
import heartBox from "../assets/heart-box.png";
import rocket from "../assets/rocket.png";

const features = [
  {
    title: "Why Tresure Funded ?",
    icon: megaphone
  },
  {
    title: "Account Management",
    icon: folder
  },
  {
    title: "Support",
    icon: heartBox
  }
];

export default function FeatureSection() {
  return (
    <div className="bg-black px-4 md:px-8 lg:px-10 py-14 font-[Poppins] max-w-[1300px] mx-auto">
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[42px] tracking-[0.12em] text-center text-white mb-14">
        Choose Where To Go Next
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 flex-wrap">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1C1B2A] w-full sm:w-[300px] h-[220px] rounded-[16px] flex flex-col justify-center items-center text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-[100px] mb-4 transition-transform duration-300 hover:-translate-y-2"
            />
            <p className="text-[#FFE976] text-[14px] font-semibold px-4">{item.title}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-[#1D1B25] rounded-[20px] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 gap-8">
        <div className="text-center md:text-left">
          <p className="text-[22px] sm:text-[26px] md:text-[28px] font-semibold text-[#FFE976] mb-4">
            Want to get started?
          </p>
          <button className="bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Join Expert Emirates
          </button>
        </div>
        <img src={rocket} alt="rocket" className="h-28 sm:h-32" />
      </div>
    </div>
  );
}
