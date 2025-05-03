import React from "react";
import icon3 from "../../assets/heroSectionImages/image 10.png";
import icon2 from "../../assets/heroSectionImages/image 11.png";
import icon1 from "../../assets/heroSectionImages/image 12.png";
// import bgImage from "../../assets/heroSectionImages/logo.png"; // A starry background image

const PricingCard = () => {
  const font = {
    fontFamily: "Helvetica Now Display",
  };

  return (
    <div className="flex justify-center items-center " style={font}>
      <div
        className="group relative w-[600px] h-72 max-w-3xl rounded-2xl overflow-hidden p-6 md:p-10 border border-gray-700  bg-gray-950  transition-all duration-500 hover:border-yellow-500 hover:shadow-yellow-500 shadow-md"
        style={{
          backgroundImage: `url(${"bgImage"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Glowing icons */}
        <div className="absolute top-4 right-4 flex  z-10">
          {[icon1, icon2, icon3].map((icon, i) => (
            <div
              key={i}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-yellow-400 shadow-md"
            >
              <img src={icon} alt={`icon-${i}`} className="w-10 h-10" />
            </div>
          ))}
        </div>

        {/* Card content */}
        <div className="relative z-10 text-white text-left transition-all duration-1000 transform group-hover:-translate-y-8">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            GET TO KNOW OUR 
            <br />PLANS
            
            AND PRICING
          </h2>
          <p className="text-sm md:text-base text-gray-300 tracking-wider uppercase mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Suspendisse varius enim in eros elementum tristique.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
              About Us
            </button>
            <button className="border border-yellow-500 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition">
              Pricing
            </button>
          </div>
        </div>

        {/* Optional bottom yellow glow effect */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
      </div>
    </div>
  );
};

export default PricingCard;
