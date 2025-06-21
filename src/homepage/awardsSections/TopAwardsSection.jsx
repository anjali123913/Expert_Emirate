// components/AwardsSection.jsx
import medalImage from "../../assets/award2.png";
import trophyImage from "../../assets/award1.png";
import { FaArrowDown } from "react-icons/fa6";

const TopAwardsSection = () => {
  return (
    <section className=" text-white px-4 rounded-3xl max-w-4xl mx-auto border shadow-lg py-5 h-full shadow-gray-900 border-gray-600" style={{background:"rgba(18,17,20,1"}}>
      {/* Tag */}
      <div className="flex justify-center mb-6 animate-fadeIn">
        <span className="bg-[#1E1E2F] text-sm text-white px-6 py-2 rounded-full font-semibold">
          What's New
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-t from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-4">
        Stay Updated with the Latest from 
        Expert Emirates.
      </h2>

      {/* Paragraph */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg my-10 animate-fadeIn">
        Discover the milestones and breakthroughs that define our journey. From
        innovative product launches to strategic partnerships, we continue to
        shape the future of trading. Our commitment to excellence and innovation
        ensures that you're always informed about the latest developments in the
        financial markets.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {/* Card 1 */}
        <div className="group/card1 bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 hover:border-yellow-700 transition-all duration-300 p-1 hover:shadow-xl hover:shadow-yellow-500/20">
          <div className="bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 group-hover/card1:border-t-yellow-600 group-hover/card1:border-r-gray-800 group-hover/card1:border-b-yellow-600 group-hover/card1:border-l-gray-800 transition-all duration-300 p-4 h-full flex flex-col">
            <img
              src={trophyImage}
              alt="Trophies"
              className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover/card1:scale-95"
            />
            <h3 className="text-white font-bold text-lg mb-1 group-hover/card1:text-transparent group-hover/card1:bg-clip-text group-hover/card1:bg-gradient-to-t group-hover/card1:from-yellow-300 group-hover/card1:to-yellow-600 transition-all duration-300">
              Breaking News:
            </h3>
            <p className="text-md text-gray-100 flex-grow">
              Explore our latest achievements, market insights, and updates.
            </p>
            <button className="hidden group-hover/card1:flex items-center text-blue-400 hover:text-blue-300 text-xl mt-3 font-semibold transition-colors duration-200">
              <span className="pr-3">Read more</span>
              <span className="rotate-[225deg] transition-transform duration-300 group-hover/card1:translate-x-1">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group/card2 bg-[#1E1E2F] rounded-xl border border-black border-l-yellow-600 border-r-yellow-600 hover:border-yellow-700 transition-all duration-300 p-1 hover:shadow-xl hover:shadow-yellow-500/20">
          <div className="bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 group-hover/card2:border-t-yellow-600 group-hover/card2:border-r-gray-800 group-hover/card2:border-b-yellow-600 group-hover/card2:border-l-gray-800 transition-all duration-300 p-4 h-full flex flex-col">
            <img
              src={medalImage}
              alt="Medal"
              className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover/card2:scale-95"
            />
            <h3 className="text-white font-bold text-lg mb-1 group-hover/card2:text-transparent group-hover/card2:bg-clip-text group-hover/card2:bg-gradient-to-t group-hover/card2:from-yellow-300 group-hover/card2:to-yellow-600 transition-all duration-300">
              Global Impact:
            </h3>
            <p className="text-md text-gray-100 flex-grow">
              Learn how we're influencing the financial industry worldwide.
            </p>
            <button className="hidden group-hover/card2:flex items-center text-blue-400 hover:text-blue-300 text-xl mt-3 font-semibold transition-colors duration-200">
              <span className="pr-3">Read more</span>
              <span className="rotate-[225deg] transition-transform duration-300 group-hover/card2:translate-x-1">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </div>

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
        
        Explore News
      </button>
      </div>
    </section>
  );
};

export default TopAwardsSection;
