import React from 'react';
import binanceImage from '../assets/awards/binance.png';

const KeyBenefits = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-16">
      {/* Gradient Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-8"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '32px',
          lineHeight: '100%',
          background: 'linear-gradient(180deg, #281000 -22.5%, #C0971C -5.93%, #FFE976 9.67%, #C0971C 25.92%, #281000 42.5%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Key Benefits
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left: List */}
        <ul
          className="space-y-6 text-[18px] text-white leading-[100%]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {[
            {
              title: 'Expert Advice',
              desc: 'Regular consultations with our financial advisors to ensure your portfolio stays aligned with your goals.',
            },
            {
              title: 'Educational Resources',
              desc: 'Access to a wealth of educational materials to enhance your financial literacy.',
            },
            {
              title: 'Community Support',
              desc: 'Engage with a community of like-minded investors for insights and support.',
            },
            {
              title: 'Cutting-edge Technology',
              desc: 'Use our advanced tools and platforms to monitor and manage your investments effectively.',
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-yellow-400 text-lg mt-1">●</span>
              <p>
                <strong className="text-yellow-400">{item.title}:</strong>{' '}
                <span className="text-white">{item.desc}</span>
              </p>
            </li>
          ))}
        </ul>

        {/* Right Image */}
        <div className="w-full max-w-md hidden md:block rounded-lg overflow-hidden">
          <img
            src={binanceImage}
            alt="Benefits Visual"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
