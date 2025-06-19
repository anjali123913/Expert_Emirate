const IndustryAwardsSection = () => {
  return (
    <section className=" text-white pt-7 px-4 py-11 rounded-3xl max-w-4xl mx-auto border shadow-lg shadow-gray-900 border-gray-600" style={{background:"rgba(18,17,20,1"}}>
      {/* Tag */}
      <div className="flex justify-center mb-6 animate-fadeIn">
        <span className="bg-[#1E1E2F] text-sm text-white px-6 py-2 rounded-full font-semibold tracking-widest hover:bg-[#2A2A3F] transition-colors duration-300">
          Achievements
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-t from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-4 ">
        Celebrating Excellence with 70+ <br className="hidden sm:block" />{" "}
        <span className="inline-block animate-pulseSlow">Industry Awards</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg mb-10 animate-fadeIn">
        Our dedication to providing world-class trading services has been
        recognized globally. Over the years, we've earned more than 70
        prestigious awards, solidifying our position as a leader in the
        financial industry.
      </p>

      {/* Award Highlights */}
      <div className=" rounded-2xl p-6 space-y-6 mb-10 animate-fadeIn" style={{background:"rgba(29,27,37,1"}}>
        {/* Award 1 - Right Aligned */}
        <div className="flex justify-end">
          <div className="flex flex-col sm:flex-row sm:items-center rounded-xl px-4 py-3 max-w-2xl w-full hover:bg-[#3A3A4F] transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20" style={{background:"rgba(40,37,50,1)"}}>
            <h3 className="bg-gradient-to-t from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-bold text-base sm:text-lg group-hover:bg-gradient-to-t group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-200">
              Best Mobile Trading App
            </h3>
            <div className="h-[50px] mx-5 w-[2px] bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 rounded-full hidden sm:block"></div>
            <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-0 group-hover:text-gray-200 transition-colors duration-200">
              Recognized for delivering seamless trading on the go.
            </p>
          </div>
        </div>

        {/* Award 2 - Left Aligned */}
        <div className="flex justify-start animate-marqueeRight">
          <div className="flex flex-col sm:flex-row sm:items-center rounded-xl px-4 py-3 max-w-2xl w-full hover:bg-[#3A3A4F] transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20" style={{background:"rgba(40,37,50,1)"}}>
            <h3 className="bg-gradient-to-t from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-bold text-base sm:text-lg group-hover:bg-gradient-to-t group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-200">
              Best Prime Trading Broker
            </h3>
            <div className="h-[50px] mx-5 w-[2px] bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 rounded-full hidden sm:block"></div>
            <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-0 group-hover:text-gray-200 transition-colors duration-200">
              Awarded for exceptional trading conditions and reliability.
            </p>
          </div>
        </div>

        {/* Award 3 - Right Aligned */}
        <div className="flex justify-end">
          <div className="flex flex-col sm:flex-row sm:items-center  rounded-xl px-4 py-3 max-w-2xl w-full hover:bg-[#3A3A4F] transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/20" style={{background:"rgba(40,37,50,1)"}}>
            <h3 className="bg-gradient-to-t from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-bold text-base sm:text-lg group-hover:bg-gradient-to-t group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-200">
              Best Global Regulated Broker
            </h3>
            <div className="h-[50px] mx-5 w-[2px] bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 rounded-full hidden sm:block"></div>
            <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-0 group-hover:text-gray-200 transition-colors duration-200">
              Honored for our commitment to transparency and security.
            </p>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 animate-fadeIn">
        These accolades reflect our unwavering focus on innovation, trust, and
        client satisfaction. With every award, we reaffirm our promise to
        deliver unparalleled trading experiences.
      </p>

      {/* Button */}
      <div className="flex justify-center animate-fadeIn">
        <button
        className="relative text-black font-bold px-7 py-3 rounded-full shadow-md transition-all duration-300 overflow-hidden"
        style={{
          background: "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "black";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)";
          e.currentTarget.style.color = "black";
        }}
      >
        {/* Gradient border using pseudo-element */}
        <span 
          className="absolute inset-0 rounded-full opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(266.31deg, rgba(200,161,39,0.8), rgba(102,102,102,0.3))",
            padding: "1px",
            zIndex: -1
          }}
        >
          <span 
            className="block w-full h-full rounded-full"
            style={{
              background: "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
            }}
          />
        </span>
        
        Explore Awards
      </button>
      </div>
    </section>
  );
};

export default IndustryAwardsSection;