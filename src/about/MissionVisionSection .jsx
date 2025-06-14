import React from "react";
import Icon1 from "../assets/aboutus/image6.png";
import Icon2 from "../assets/aboutus/image7.png";
import Icon3 from "../assets/aboutus/image8.png";
import Icon4 from "../assets/aboutus/image9.png";

const cardData = [
  {
    icon: Icon1,
    title: "Innovative Trading Solutions",
    text: "We leverage market prediction-driven strategies to help traders anticipate and capitalize on opportunities in both short-term events and long-term economic shifts.",
  },
  {
    icon: Icon2,
    title: "Proactive Market Insights",
    text: "Never miss a trade! Our dedicated experts ensure real-time updates and strong follow-ups so you're always ahead of market movements.",
  },
  {
    icon: Icon3,
    title: "Premium, Error-Free Services",
    text: "Backed by a team of seasoned professionals, we provide a seamless trading experience with zero errors and unmatched accuracy.",
  },
  {
    icon: Icon4,
    title: "Personalized Support for Success",
    text: "At Expert Emirates, your success is our priority. We offer custom-tailored guidance to help you trade with confidence and achieve consistent profitability.",
  },
];

const MissionVisionSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-20 bg-black text-white font-[Poppins]">
      {/* Heading Section */}
      <div className="text-center mb-24 mt-14">
        <h2 
          className="text-4xl font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent">
          Our Mission & Vision:
        </h2>
        <h3 className="text-[28px] sm:text-[32px] font-semibold text-white mt-5">
          Leading the Future of Trading
        </h3>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="relative group bg-[#0D0D0D] border border-t-[#C0971C] border-gray-900 p-6 pt-32 pb-12 rounded-xl text-center hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
            style={{ borderBottom: "1px solid #C0971C" }}
          >
            {/* Image: Bigger size and overlapping the card */}
            <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[140px] h-[140px] transition-all duration-300 group-hover:-translate-y-2">
              <img
                src={card.icon}
                alt={card.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title with hover gradient effect */}
            <h4 className="text-md font-semibold mt-12 mb-2 text-white transition-all duration-300 
              group-hover:bg-gradient-to-t group-hover:from-yellow-300 group-hover:to-transparent 
              group-hover:bg-clip-text group-hover:text-transparent"
            >
              {card.title}
            </h4>

            <p className="text-sm text-[#CCCCCC]">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionSection;