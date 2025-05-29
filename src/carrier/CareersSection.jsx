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
    <section className="bg-black text-white font-poppins py-14 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
          Join Our Elite Team at <br />
          <span className="bg-gradient-to-b from-[#fff1b0] via-[#e7c151] to-[#cfa021] bg-clip-text text-transparent">
            Expert Emirates!
          </span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed tracking-wide">
          Your success starts with the right career path. Be part of a leading global trading firm that values innovation, talent, and growth.
        </p>
      </div>

      {/* Top Row - 2 Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {cardData.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="flex bg-[#1a1a1a] border border-yellow-500 rounded-xl py-6 px-5 gap-4 w-full md:w-1/2 items-center"
          >
            <div className="w-20 h-20 flex-shrink-0">
              <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.slice(2).map((card, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-yellow-500 rounded-xl p-6 flex flex-col items-center text-center"
          >
            <img src={card.img} alt={card.title} className="w-20 h-20 mb-4 object-contain" />
            <h3 className="text-white text-[16px] font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md text-lg hover:scale-105 transition">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CareersSection;
