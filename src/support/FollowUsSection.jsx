import React from 'react';
import FacebookIcon from '../assets/support/facebook.png';
import InstagramIcon from '../assets/support/insta.png';
import YouTubeIcon from '../assets/support/youtube.png';

const FollowUsSection = () => {
  return (
    <div className="bg-[#1b181f] rounded-2xl px-6 py-10 text-center max-w-4xl mx-auto mt-12">
      {/* Gradient Heading */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#281000] via-[#FFE976] to-[#281000] 
                     text-[32px] md:text-[50px] font-semibold leading-[42px] tracking-[0.12em] font-[Poppins]">
        Follow us
      </h2>

      {/* Subtext */}
      <p className="text-sm md:text-base text-gray-300 mt-4">
        Get market updates and exclusive trading tips on our <br className="hidden sm:inline" />
        social channels
      </p>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-6 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src={YouTubeIcon}
            alt="YouTube"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default FollowUsSection;
