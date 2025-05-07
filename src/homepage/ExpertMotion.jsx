import { motion } from "framer-motion";
import bgImage from "../assets/coins-strip.png"; // ✅ Make sure path is correct

const ExpertMotion = () => {
  return (
    <div className="w-full min-h-[50vh] bg-black relative overflow-hidden flex items-center justify-center px-4 py-8 sm:py-12">

      {/* Background Image */}
      <img
        src={bgImage}
        alt="background coins"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />

      {/* Text */}
      <div className="relative z-10 flex items-center justify-center text-center px-2">
        <h1 className="uppercase font-inter font-bold bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text
          text-3xl sm:text-4xl md:text-5xl lg:text-[57.3px] leading-tight sm:leading-snug tracking-tight
          max-w-[95%] sm:max-w-[90%] md:max-w-[80%] xl:max-w-[1000px] mx-auto">
          EXPERT EMIRATES
        </h1>
      </div>
    </div>
  );
};

export default ExpertMotion;
