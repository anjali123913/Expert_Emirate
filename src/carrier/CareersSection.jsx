import React from "react";
import card1 from "../assets/carrers/card1.png";
import card2 from "../assets/carrers/card2.png";
import card3 from "../assets/carrers/card3.png";
import card4 from "../assets/carrers/card4.png";
import card5 from "../assets/carrers/card5.png";

const cardData = [
  {
    title: "Diverse & Inclusive Workplace",
    text: "Collaborate in a multicultural environment with global experts.",
    img: card1,
  },
  {
    title: "Innovative Mindset",
    text: "Work on cutting-edge trading technologies and strategies.",
    img: card2,
  },
  {
    title: "Attractive Compensation",
    text: "Competitive salaries with performance-based incentives.",
    img: card3,
  },
  {
    title: "Comprehensive Benefits",
    text: "Health insurance, wellness programs, and more.",
    img: card4,
  },
  {
    title: "Career Advancement",
    text: "Structured growth opportunities and leadership training.",
    img: card5,
  },
];

const CareersSection = () => {
  return (
    <section className="bg-black text-white font-poppins py-12 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-2">
          Join Our Elite Team at
          <br />
          <span className="text-4xl font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent">Expert Emirates!</span>
        </h2>
        <p className=" w-1/2 text-center font-poppins font-normal text-[18px] leading-[100%] tracking-[0.12em] mx-auto my-5">
          Your success starts with the right career path. Be part of a leading global trading firm that values innovation, talent, and growth.
        </p>
      </div>

      {/* Top Row - First 2 Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {cardData.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-[#1a1a1a] border border-yellow-400 rounded-xl py-7 px-5 gap-4 w-full md:w-1/2"
          >
            <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - Last 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.slice(2).map((card, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-yellow-400 rounded-xl p-5 flex flex-col items-center gap-4"
          >
            <div className="w-28 h-28">
              <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-center">{card.title}</h3>
            <p className="text-sm text-gray-300 text-center">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="text-center mt-10">
        <button className="bg-gradient-to-r from-[#e67529] via-[#e3b220] via-50% to-[#ea7b32] text-black rounded-full px-12 py-4 font-bold text-xl transition">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CareersSection;
