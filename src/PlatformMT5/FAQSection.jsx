import React, { useState } from "react";

const faqData = [
  {
    question: "Do you offer the MT5 Trading Platform?",
    answer:
      "Yes, Expert Emirates provides MT5 trading across our Standard, Pro, and ECN trading accounts, offering enhanced features and advanced trading tools.",
  },
  {
    question: "How can I trade on MT5 with Expert Emirates?",
    answer: "You can trade on MT5 by opening an account with Expert Emirates and downloading the MT5 platform.",
  },
  {
    question: "What features will I get with the MT5 platform at Expert Emirates?",
    answer: "You will get advanced charting, multiple order types, indicators, and fast execution with Expert Emirates' MT5.",
  },
  {
    question: "I need more trading tools. Can my MT5 trading account with Expert Emirates provide that?",
    answer: "Yes, MT5 at Expert Emirates supports advanced tools including Expert Advisors (EAs), VPS hosting, and more.",
  },
  {
    question: "Do you offer social trading with an MT5 account?",
    answer: "Currently, social trading is available through third-party integrations compatible with MT5 accounts.",
  },
  {
    question: "Can I trade on MT5 with my existing MT4 account?",
    answer: "MT4 and MT5 accounts are separate. You will need to create an MT5 account for MT5 trading.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 font-[Poppins]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="cursor-pointer bg-[#121117] rounded-xl p-4 transition-all duration-300"
          >
            <p className="text-sm md:text-base text-white mb-2">
              <span className="text-blue-400 mr-2">◆</span>
              {item.question}
            </p>
            {openIndex === index && (
              <p className="text-sm md:text-base text-gray-300 leading-[30px] mt-2 pl-6">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
