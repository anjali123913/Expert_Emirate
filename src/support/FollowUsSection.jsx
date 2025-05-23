import React from 'react';
import FacebookIcon from '../assets/support/facebook.png';
import InstagramIcon from '../assets/support/insta.png';
import YouTubeIcon from '../assets/support/youtube.png';

const FollowUsSection = () => {
  return (
    <div className="bg-black px-4 py-6 sm:py-8 md:py-10 flex justify-center">
      <div
        className="rounded-3xl px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 w-full max-w-5xl text-center"
        style={{
          background: 'var(--Dark-grey, #121117)',
          border: '1px solid',
          borderImageSource: 'linear-gradient(144.59deg, #666666 0%, #000000 99.55%)',
          borderImageSlice: 1,
        }}
      >
        {/* Gradient Heading */}
        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#281000] via-[#FFE976] to-[#281000]
                       text-[24px] sm:text-[32px] md:text-[40px] font-semibold leading-tight tracking-wider font-[Poppins]">
          Follow us
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-3 sm:mt-4">
          Get market updates and exclusive trading tips on our <br className="hidden sm:inline" />
          social channels
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mt-5 sm:mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src={YouTubeIcon}
              alt="YouTube"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUsSection;
