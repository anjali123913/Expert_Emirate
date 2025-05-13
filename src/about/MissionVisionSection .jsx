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
    <div className="w-full px-4 md:px-12 py-16 bg-black text-white">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "45px",
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 10.9%, #FFE976 21.15%, #C0971C 31.83%, #281000 42.73%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Mission & Vision:
        </h2>
        <h3
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "45px",
            color: "#FFFFFF",
          }}
        >
          Leading the Future of Trading
        </h3>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#0D0D0D] p-6 rounded-xl border border-[#C0971C] flex flex-col items-center text-center"
            style={{ borderBottom: "2px solid #FFE976" }}
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-[60px] h-[60px] mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
            <p className="text-sm text-[#CCCCCC]">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionSection;
