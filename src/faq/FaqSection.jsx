import React, { useState } from "react";
import FeatureSection from "../homepage/FeatureSection";

const faqData = [
  "How do I join the Expert Emirates team?",
  "What payment methods do you accept?",
  "Can I get support 24/7?",
  "Do you offer refunds?",
  "Is there a trading platform requirement?",
  "Do you offer mentorship or training?",
  "What makes Expert Emirates different?",
  "How can I track my application status?",
  "Can I start trading without a team?",
  "How do I reset my password?",
  "Do you offer personal development services?",
  "What trading software should I use?",
  "How do I know what plans to join?",
  "How can I contact support?",
  "Can I change my membership?"
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6"
          style={{
            fontFamily: "Poppins",
            letterSpacing: "0.1em",
          }}
        >
          Frequently Asked Questions (FAQ)
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
          Quick answers to help you get onboard
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((question, index) => (
            <div
              key={index}
              className={`rounded-full sm:rounded-3xl md:rounded-[30px] ${
                openIndex === index ? "bg-gray-800" : "bg-[#121117]"
              } px-5 sm:px-6 py-4 border border-[#2c2b30] overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96" : "max-h-[60px]"
              }`}
            >
              {/* Toggle Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="flex items-center text-sm sm:text-base font-medium">
                  {/* Diamond Icon */}
                  <span className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] mr-3 rounded-sm"></span>
                  {question}
                </span>
                {/* Arrow Icon */}
                <span
                  className={`ml-4 transform transition-transform duration-300 w-2.5 h-2.5 border-t-2 border-r-2 border-gray-500 ${
                    openIndex === index ? "rotate-135" : "rotate-45"
                  }`}
                ></span>
              </button>

              {/* Dropdown Answer */}
              <div
                className={`mt-4 text-gray-300 text-sm sm:text-base transition-opacity duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                This is a sample answer. Replace with actual FAQ content.
              </div>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="mt-20">
          <FeatureSection />
        </div>
      </div>
    </section>
  );
}
