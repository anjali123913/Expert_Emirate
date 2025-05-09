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
    <section className="bg-[#0D0C0F] text-white px-5 py-12 pt-24 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
      <h2
        className="text-[28px] md:text-[36px] font-semibold text-center mb-8"
        style={{
          fontFamily: "Poppins",
          letterSpacing: "0.1em",
        }}
      >
        Frequently Asked Questions (FAQ)
      </h2>

      <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
        Quick answers to help you get onboard
      </p>

      <div className="space-y-4">
        {faqData.map((question, index) => (
          <div
            key={index}
            className={`rounded-xl bg-[#121117] px-6 py-4 w-full border border-[#333] overflow-hidden transition-all duration-500 ${
              openIndex === index ? "max-h-96" : "max-h-[60px]"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="text-sm md:text-base font-medium">{question}</span>
              <span
                className={`ml-4 transform transition-transform duration-300 w-2.5 h-2.5 border-t-2 border-r-2 border-yellow-400 ${
                  openIndex === index ? "rotate-135" : "rotate-45"
                }`}
              ></span>
            </button>

            <div
              className={`mt-4 text-gray-400 text-sm md:text-base transition-opacity duration-300 ${
                openIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              This is a sample answer. Replace with actual FAQ content.
            </div>
          </div>
        ))}
      </div>
      <div>
        <FeatureSection/>
      </div>
    </section>
  );
}
