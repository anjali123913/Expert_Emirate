import React from 'react';
import binanceImage from '../assets/awards/binance.png'; // Add your image to /assets and import it

const KeyBenefits = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <h2
        className="text-3xl md:text-4xl font-bold inline-block text-transparent bg-clip-text bg-[linear-gradient(180deg,#281000_-59.46%,#C0971C_7.05%,#FFE976_69.64%,#C0971C_134.84%,#281000_201.35%)] mb-8"
      >
        Key Benefits
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Benefits List */}
        <ul className="space-y-6 max-w-xl">
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 text-lg mt-1">●</span>
            <p>
              <strong className="text-yellow-400">Expert Advice:</strong> Regular consultations with our financial advisors to ensure your portfolio stays aligned with your goals.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 text-lg mt-1">●</span>
            <p>
              <strong className="text-yellow-400">Educational Resources:</strong> Access to a wealth of educational materials to enhance your financial literacy.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 text-lg mt-1">●</span>
            <p>
              <strong className="text-yellow-400">Community Support:</strong> Engage with a community of like-minded investors for insights and support.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 text-lg mt-1">●</span>
            <p>
              <strong className="text-yellow-400">Cutting-edge Technology:</strong> Use our advanced tools and platforms to monitor and manage your investments effectively.
            </p>
          </li>
        </ul>

        {/* Right: Image */}
        <div className="rounded-lg overflow-hidden">
          <img src={binanceImage} alt="Benefits Visual" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
