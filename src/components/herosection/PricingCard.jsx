import React from "react";
import icon3 from "../../assets/heroSectionImages/image 10.png";
import icon2 from "../../assets/heroSectionImages/image 11.png";
import icon1 from "../../assets/heroSectionImages/image 12.png";
import { Link } from "react-router-dom";

const PricingCard = () => {


  return (
    <div className="flex justify-center items-center">
      <div
        className="group relative w-[550px] h-80 max-w-3xl rounded-2xl overflow-hidden p-4 md:p-5  transition-all duration-500  border border-gray-900 hover:border-t-yellow-600 hover:border-l-yellow-700 hover:border-r-yellow-700 hover:border-b-yellow-600   flex flex-col justify-center items-center "
        style={{
          background: "linear-gradient(283.02deg, rgba(243, 205, 1, 0.07) 0.62%, rgba(13, 12, 19, 0.2) 99.27%)",
          
        }}
      >
        {/* Glowing icons */}
        <div className="absolute top-5 right-4 flex z-10 gap-2">
          {[icon1, icon2, icon3].map((icon, i) => (
            <div
              key={i}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-yellow-400 shadow-md "
            >
              <img src={icon} alt={`icon-${i}`} className="w-8 h-8 transition-transform duration-500 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Card content */}
        <div className="relative z-10 text-white text-left transition-all duration-1000 transform ">
          <h2 className="text-3xl font-bold text-start group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-yellow-400 group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent mb-4"> 
            GET TO KNOW OUR <br />
            PLANS AND PRICING
          </h2>
          <p className="text-sm md:text-base text-gray-300 tracking-wider uppercase mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           
            Suspendisse varius enim in eros elementum tristique.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
           <Link to="/about-us">
             <button className="group/contact   w-40 py-2 tracking-wider rounded-full border-2 border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500   transition-all duration-500  font-medium text-black hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06]  hover:bg-black  ">
            Contact Us
          </button>
           </Link>
          <button className="group/pricing w-40 py-2 tracking-wider rounded-full border-2 border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500 bg-black text-white transition-all duration-500  hover:text-black hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] font-medium ">
            Pricing
          </button>
          </div>
        </div>

        {/* Optional bottom yellow glow effect */}
        {/* <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" /> */}
      </div>
    </div>
  );
};

export default PricingCard;
