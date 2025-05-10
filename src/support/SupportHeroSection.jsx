import React from 'react';
import goldenCircle from '../assets/support/support-circle.png'; // Use the exact image from your screenshot

const SupportHeroSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 flex flex-col items-center text-center">
      {/* Golden Circle Image */}
      <img
        src={goldenCircle}
        alt="Golden Circle"
        className="w-[180px] h-[180px] object-contain mb-6"
      />

      {/* Heading with gradient and bold white */}
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#281000_-59.46%,#C0971C_7.05%,#FFE976_69.64%,#C0971C_134.84%,#281000_201.35%)]">
          Get in Touch
        </span>{' '}
        –{' '}
        <span className="text-white">
          We’re Always<br />Here for You!
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-lg mt-4 max-w-2xl">
        Need help? Have questions? Our support team is available 24/7 to assist you in the way that suits you best!
      </p>
    </section>
  );
};

export default SupportHeroSection;
