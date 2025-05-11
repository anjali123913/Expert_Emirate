const IndustryAwardsSection = () => {
  return (
    <section className="bg-[#111111] text-white px-4 py-11 rounded-3xl max-w-4xl mx-auto border shadow-lg shadow-gray-900 border-gray-600">
      {/* Tag */}
      <div className="flex justify-center mb-6">
        <span className="bg-[#1E1E2F] text-sm text-white px-6 py-2 rounded-full font-semibold tracking-widest">
          Achievements
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
        Celebrating Excellence with 70+ <br className="hidden sm:block" />{" "}
        Industry Awards
      </h2>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg mb-10">
        Our dedication to providing world-class trading services has been
        recognized globally. Over the years, we’ve earned more than 70
        prestigious awards, solidifying our position as a leader in the
        financial industry.
      </p>

      {/* Award Highlights */}
      <div className="bg-[#1A1A2F] rounded-2xl p-6 w-full space-y-4 mb-10">
        {/* Award 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#2A2A3F] rounded-xl px-2 py-2 left-28">
          <h3 className="text-yellow-400 font-bold text-base sm:text-lg">
            Best Mobile Trading App:
          </h3>
         <div className="h-[50px] mr-5 w-[2px] bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 rounded-full"></div>

          <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-0">
            Recognized for delivering seamless trading on the go.
          </p>
        </div>

        {/* Award 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#2A2A3F] rounded-xl px-2 py-3 -left-20">
          <h3 className="text-yellow-400 font-bold text-base sm:text-lg">
            Best Prime Trading Broker:
          </h3>
            <div className="h-[50px] mr-5 w-[2px] bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 rounded-full"></div>
          <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-0">
            Awarded for exceptional trading conditions and reliability.
          </p>
        </div>

        {/* Award 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#2A2A3F] rounded-xl px-2 py-2 ">
          <h3 className="text-yellow-400 font-bold text-base sm:text-lg mr-2">
            Best Global Regulated Broker:
          </h3>
            <div className="h-[50px] mr-5 w-[2px] bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 rounded-full"></div>
          <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-0">
            Honored for our commitment to transparency and security.
          </p>
        </div>
      </div>

      {/* Final Note */}
      <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
        These accolades reflect our unwavering focus on innovation, trust, and
        client satisfaction. With every award, we reaffirm our promise to
        deliver unparalleled trading experiences.
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-7 py-3 font-bold    shadow-md hover:shadow-lg transition">
          Explore Awards
        </button>
      </div>
    </section>
  );
};

export default IndustryAwardsSection;
