// components/AwardsSection.jsx
import  medalImage from "../../assets/award2.png"; // replace with your image
import trophyImage from "../../assets/award1.png"; // replace with your image

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-48">
        {/* Card 1 */}
        <div className="bg-[#1E1E2F] rounded-xl border border-yellow-700/30 p-4 hover:shadow-lg transition duration-300">
          <img
            src={trophyImage}
            alt="Trophies"
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <h3 className="text-white font-bold text-lg mb-1">Breaking News:</h3>
          <p className="text-gray-400 text-sm">
            Explore our latest achievements, market insights, and updates.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1E1E2F] rounded-xl border border-yellow-700/30 p-4 hover:shadow-lg transition duration-300">
          <img
            src={medalImage}
            alt="Medal"
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <h3 className="text-white font-bold text-lg mb-1">Global Impact:</h3>
          <p className="text-gray-400 text-sm">
            Learn how we’re influencing the financial industry worldwide.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition">
          Explore Awards
        </button>
      </div>
    </section>
  );
};

export default TopAwardsSection;
