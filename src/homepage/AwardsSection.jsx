import React from 'react';

const AwardsSection = () => {
  return (
    <div className="w-[1260px] h-auto flex flex-col items-center gap-[40px] mx-auto mt-[3567px] font-[Poppins] text-[18px] font-normal leading-[22px] tracking-[0%] text-center">

      {/* 🔳 Top Image Banner */}
      <img 
        src="https://cdn.pixabay.com/photo/2017/01/06/19/15/award-1950114_1280.jpg" 
        alt="Awards Banner" 
        className="w-full h-[300px] object-cover rounded-xl shadow-lg"
      />

      {/* Top Two Cards */}
      <div className="flex gap-[30px]">
        {/* Left Box: What's New */}
        <div className="w-[630px] bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl px-6 py-8 shadow-md">
          <div className="mb-4">
            <button className="text-white text-sm bg-[#1E1E1E] rounded-full px-4 py-1">
              What's New
            </button>
          </div>
          <h2 className="text-[#F7C873] font-semibold text-xl mb-2 leading-snug">
            Stay Updated with the Latest from <br /> Expert Emirates.
          </h2>
          <p className="text-white mb-6">
            Discover the milestones and breakthroughs that define our journey. From innovative product launches to strategic partnerships, we continue to shape the future of trading. Our commitment to excellence and innovation ensures that you're always informed about the latest developments in the financial markets.
          </p>

          <div className="flex gap-4 justify-center mb-6">
            <div className="bg-[#1A1A1A] p-3 rounded-md w-[45%]">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/09/09/30/cup-1241221_960_720.jpg"
                alt="Breaking News"
                className="rounded-md mb-2 w-full h-[100px] object-cover"
              />
              <p className="text-white font-medium">Breaking News:</p>
              <p className="text-white text-sm">Explore our latest achievements, market insights, and updates.</p>
            </div>

            <div className="bg-[#1A1A1A] p-3 rounded-md w-[45%]">
              <img
                src="https://cdn.pixabay.com/photo/2015/07/28/22/05/medal-865120_960_720.jpg"
                alt="Global Impact"
                className="rounded-md mb-2 w-full h-[100px] object-cover"
              />
              <p className="text-white font-medium">Global Impact:</p>
              <p className="text-white text-sm">Learn how we're influencing the financial industry worldwide.</p>
            </div>
          </div>
        </div>

        {/* Right Box: Achievements */}
        <div className="w-[630px] bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl px-6 py-8 shadow-md">
          <div className="mb-4">
            <button className="text-white text-sm bg-[#1E1E1E] rounded-full px-4 py-1">
              Achievements
            </button>
          </div>
          <h2 className="text-[#F7C873] font-semibold text-xl mb-2 leading-snug">
            Celebrating Excellence with 70+ <br /> Industry Awards
          </h2>
          <p className="text-white mb-6">
            Our dedication to providing world-class trading services has been recognized globally. Over the years, we've earned more than 70 prestigious awards, solidifying our position as a leader in the financial industry.
          </p>

          <div className="flex flex-col gap-3 items-center mb-6">
            <div className="bg-[#1A1A1A] p-3 rounded-md w-full">
              <p className="text-[#F7C873] font-medium">Best Mobile Trading App:</p>
              <p className="text-white text-sm">Recognized for delivering seamless trading on the go.</p>
            </div>
            <div className="bg-[#1A1A1A] p-3 rounded-md w-full">
              <p className="text-[#F7C873] font-medium">Best Prime Trading Broker:</p>
              <p className="text-white text-sm">Awarded for exceptional trading conditions and reliability.</p>
            </div>
            <div className="bg-[#1A1A1A] p-3 rounded-md w-full">
              <p className="text-[#F7C873] font-medium">Best Global Regulated Broker:</p>
              <p className="text-white text-sm">Honored for our commitment to transparency and security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔘 Bottom Center Explore Button */}
      <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold">
        Explore Awards
      </button>
    </div>
  );
};

export default AwardsSection;
