import { motion } from "framer-motion";
import coinsTop from "../assets/coinsTop.png";
import coinsBottom from "../assets/coinsTop.png";

const ExpertMotion = () => {
  const scrollLeft = {
    animate: { x: ["0%", "-100%"] },
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  };

  const scrollRight = {
    animate: { x: ["-100%", "0%"] },
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <div className="w-full min-h-[50vh] bg-black relative flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">

      {/* Top continuous scroll (left) */}
      <motion.div
        className="absolute top-9 left-0 w-[200%] flex opacity-30 z-0 pointer-events-none"
        {...scrollLeft}
      >
        <img src={coinsTop} alt="coin top 1" className="w-full" />
        <img src={coinsTop} alt="coin top 2" className="w-full" />
      </motion.div>

      {/* Bottom continuous scroll (right) */}
      <motion.div
        className="absolute bottom-7 left-0 w-[200%] flex opacity-30 z-0 pointer-events-none"
        {...scrollRight}
      >
        <img src={coinsBottom} alt="coin bottom 1" className="w-full" />
        <img src={coinsBottom} alt="coin bottom 2" className="w-full" />
      </motion.div>

      {/* Text */}
      <div className="bg-black/50 relative z-10 flex flex-col items-center justify-center text-center px-2">
        <h1 className="text-7xl font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent">
          EXPERT EMIRATES
        </h1>
        <p className="text-white mt-2 text-3xl">
          Empowering Smart Traders, Every <br />
          Step of the Way
        </p>
      </div>
    </div>
  );
};

export default ExpertMotion;
