import React from "react";
import megaphone from "../assets/megaphone.png";
import folder from "../assets/folder.png";
import heartBox from "../assets/heart-box.png";
import rocket from "../assets/rocket.png";

const features = [
  {
    title: "Why Treasure Funded ?",
    icon: megaphone,
    bg: "#1C1B2A"
  },
  {
    title: "Account Management",
    icon: folder,
    bg: "#1C1B2A"
  },
  {
    title: "Support",
    icon: heartBox,
    bg: "#1C1B2A"
  }
];

export default function FeatureSection() {
  return (
    <div className="bg-[#111317] px-6 py-10 rounded-[20px] max-w-[1300px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Choose Where To Go Next
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-between gap-[54.75px]">
        {features.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center px-6 py-8 w-full rounded-[12px] transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300"
            style={{
              background: item.bg,
              color: "#FFD700"
            }}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-24 mb-4 transform transition-transform duration-300 group-hover:-translate-y-3"
            />
            <h3 className="text-lg font-semibold z-10">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 px-6 py-8 bg-[#1C1B2A] rounded-[20px]">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Want to get started?</h3>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition">
            Join Expert Emirates
          </button>
        </div>
        <img src={rocket} alt="rocket" className="h-32" />
      </div>
    </div>
  );
}
