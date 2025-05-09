import React from "react";
import basicsImg from "../assets/education/image1.png";
import terminologiesImg from "../assets/education/image2.png";
import advancedImg from "../assets/education/image3.png";
import economicsImg from "../assets/education/image4.png";
import ecnImg from "../assets/education/image5.png";
import strategiesImg from "../assets/education/image6.png";
import FeatureSection from "../homepage/FeatureSection";

const courseData = [
  {
    title: "Learn the Basics",
    description:
      "Understand trading concepts, tools, and risk management to start your journey.",
    image: basicsImg,
  },
  {
    title: "Trading Terminologies",
    description:
      "Explore key trading terms and gain the confidence to navigate any platform.",
    image: terminologiesImg,
  },
  {
    title: "Advanced Lessons",
    description:
      "Master strategies, indicators, and analysis techniques for seasoned trading.",
    image: advancedImg,
  },
  {
    title: "Economics & Market Trends",
    description:
      "Analyze macroeconomic indicators and news events that move markets.",
    image: economicsImg,
  },
  {
    title: "ECN & Market Liquidity",
    description:
      "Dive into order books, spreads, and liquidity factors affecting execution.",
    image: ecnImg,
  },
  {
    title: "Secret Trading & Strategies",
    description:
      "Get insider tips, psychological tactics, and proprietary strategy breakdowns.",
    image: strategiesImg,
  },
];

export default function Education() {
  return (
    <section className="bg-[#121117] py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white font-[Poppins]">
      <h2
        className="text-[32px] leading-[42px] font-semibold text-center mb-4"
        style={{
          letterSpacing: "0.12em",
          background:
            "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education
      </h2>

      <p className="text-center text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12">
        At Expert Emirates, we believe that knowledge is the foundation of
        successful trading. Whether you're a beginner or an experienced trader,
        our education platform provides valuable insights, strategies, and
        expert guidance to enhance your trading skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 bg-[#1B1A1F] shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-[#FFD700] text-lg font-semibold mb-2 text-center">
              {course.title}
            </h3>
            <p className="text-sm text-gray-300 text-center">
              {course.description}
            </p>
          </div>
        ))}
      </div>
      <div>
        <FeatureSection/>
      </div>
    </section>
  );
}
