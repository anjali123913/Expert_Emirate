import { Link } from "react-router-dom";
import React from "react";
import trophy1 from "../assets/awards/trofy1.png";
import trophy2 from "../assets/awards/trofy2.png";
import trophy3 from "../assets/awards/trofy3.png";
import CommunitySection from "./CommunitySection";
import WhyChooseSection from "./WhyChooseSection";
import KeyBenefits from "./KeyBenefits ";
import FeatureSection from "../homepage/FeatureSection";

const awards = [
  {
    title: "Best Mobile FX Trading App",
    subtitle: "Smart Vision Summit Oman 2025",
    image: trophy1,
  },
  {
    title: "Best Prime Trading Broker",
    subtitle: "Qatar Financial Expo 2025",
    image: trophy2,
  },
  {
    title: "Best Global Regulated Broker",
    subtitle: "IWMFIF Hong Kong 2025",
    image: trophy3,
  },
];

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019"];

const AwardsSection = () => {
  return (
    <section className="bg-black text-white pt-24 pb-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2
          className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-semibold leading-tight mb-4 bg-gradient-to-b from-[#281000] via-[#FFE976] to-[#281000] text-transparent bg-clip-text"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Awards and Recognition
        </h2>
        <p className="text-sm md:text-base text-gray-400 px-2">
          At Expert Emirates, we are committed to providing the highest level of service and
          innovation in the forex trading industry. Over the past 7+ years, our dedication has been
          recognized by leading financial institutions, media organizations, and industry
          publications. Here are some of the prestigious awards we have received.
        </p>
      </div>

      {/* Year Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {years.map((year, idx) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              idx === 0
                ? "bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-black"
                : "bg-neutral-800 text-white hover:bg-yellow-600 hover:text-black"
            }`}
          >
            {year}
          </button>
        ))}
        <button className="px-4 py-2 bg-neutral-800 text-white rounded-xl text-sm hover:bg-yellow-600 hover:text-black">
          ›
        </button>
      </div>

      {/* Awards Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto px-2">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-[#141414] rounded-2xl p-5 text-center shadow-lg hover:shadow-yellow-500/10 transition-shadow"
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-auto mb-4 mx-auto object-contain max-h-48"
            />
            <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
            <span className="inline-block mt-2 text-xs font-medium text-black bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 px-4 py-1 rounded-full">
              {award.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <Link to="/company-news">
          <button className="px-6 py-3 font-semibold rounded-full bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-black hover:scale-105 transition">
            View More
          </button>
        </Link>
      </div>

      {/* Additional Sections */}
      <div className="mt-16">
        <WhyChooseSection />
        <CommunitySection />
        <KeyBenefits />
        <FeatureSection />
      </div>
    </section>
  );
};

export default AwardsSection;
