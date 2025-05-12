// components/AwardsSection.jsx
import medalImage from "../../assets/award2.png"; // replace with your image
import trophyImage from "../../assets/award1.png"; // replace with your image
import { FaArrowDown, FaUpDown, FaUpRightFromSquare } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const TopAwardsSection = () => {
  return (
    <section className="bg-[#111111] text-white px-4  rounded-3xl max-w-4xl mx-auto border shadow-lg py-5 h-full shadow-gray-900 border-gray-600">
      {/* Tag */}
      <div className="flex justify-center mb-6">
        <span className="bg-[#1E1E2F] text-sm text-white px-6 py-2 rounded-full font-semibold">
          What’s New
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
        Stay Updated with the Latest from <br className="hidden sm:block" />{" "}
        Expert Emirates.
      </h2>

      {/* Paragraph */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg my-10">
        Discover the milestones and breakthroughs that define our journey. From
        innovative product launches to strategic partnerships, we continue to
        shape the future of trading. Our commitment to excellence and innovation
        ensures that you're always informed about the latest developments in the
        financial markets.
      </p>

      {/* Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-48"> */}
      {/* Card 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-48">
        {/* Card 1 */}
        <div className="bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 transition duration-300 hover:shadow-lg hover:border-yellow-700 p-1 group/card1">
          <div className="bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 group-hover/card1:border-t-yellow-600 group-hover/card1:border-r-gray-800 group-hover/card1:border-b-yellow-600 group-hover/card1:border-l-gray-800 transition duration-300 p-4">
            <img
              src={trophyImage}
              alt="Trophies"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-white font-bold text-lg mb-1 group-hover/card1:text-transparent group-hover/card1:bg-clip-text group-hover/card1:bg-gradient-to-t group-hover/card1:from-yellow-300 group-hover/card1:to-yellow-600 transition-all duration-300">
              Breaking News:
            </h3>
            <p className="text-md text-gray-100">
              Explore our latest achievements, market insights, and updates.
            </p>

            <button className="hidden group-hover/card1:flex text-blue-500 text-xl my-3 font-semibold">
              <span className="pr-3">Read more</span>
              <span className="rotate-[225deg]">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 transition duration-300 hover:shadow-lg hover:border-yellow-700 p-1 group/card2">
          <div className="bg-[#1E1E2F] rounded-xl border border-l-yellow-600 border-r-yellow-600 group-hover/card2:border-t-yellow-600 group-hover/card2:border-r-gray-800 group-hover/card2:border-b-yellow-600 group-hover/card2:border-l-gray-800 transition duration-300 p-4">
            <img
              src={medalImage}
              alt="Medal"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-white font-bold text-lg mb-1 group-hover/card2:text-transparent group-hover/card2:bg-clip-text group-hover/card2:bg-gradient-to-t group-hover/card2:from-yellow-300 group-hover/card2:to-yellow-600 transition-all duration-300">
              Global Impact:
            </h3>
            <p className="text-md text-gray-100">
              Learn how we’re influencing the financial industry worldwide.
            </p>

            <button className="hidden group-hover/card2:flex text-blue-500 text-xl my-3 font-semibold">
              <span className="pr-3">Explore Awards</span>
              <span className="rotate-[225deg]">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      {/* <div className="bg-[#1E1E2F] rounded-xl border border-yellow-700/30 p-4 hover:shadow-lg transition duration-300">
          <img
            src={medalImage}
            alt="Medal"
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <h3 className="text-white font-bold text-lg mb-1">Global Impact:</h3>
          <p className="text-gray-400 text-sm">
            Learn how we’re influencing the financial industry worldwide.
          </p>
        </div> */}
      {/* </div> */}

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-7 py-3 font-bold    shadow-md hover:shadow-lg transition">
          Explore Awards
        </button>
      </div>
    </section>
  );
};

export default TopAwardsSection;
