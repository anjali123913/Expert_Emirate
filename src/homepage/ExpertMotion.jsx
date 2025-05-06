import { motion } from "framer-motion";
import { FaEthereum, FaBitcoin, FaLitecoin } from "react-icons/fa";
import { SiTether, SiSolana, SiDash } from "react-icons/si";

const coinStyle =
  "bg-black bg-opacity-80 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center justify-center w-14 h-14 md:w-16 md:h-16";

const ExpertMotion = () => {
  return (
    <div className="w-full px-4 py-12 md:py-20 bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Top Row (Floating Right) */}
      <motion.div
        className="flex gap-4 md:gap-6 mb-8 md:mb-12"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className={coinStyle}><FaBitcoin size={28} className="text-yellow-400" /></div>
        <div className={coinStyle}><FaEthereum size={28} className="text-purple-400" /></div>
        <div className={coinStyle}><SiTether size={28} className="text-green-400" /></div>
        <div className={coinStyle}><FaLitecoin size={28} className="text-blue-300" /></div>
      </motion.div>

      {/* Main Text Section */}
      <div className="text-center px-4 max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text">
          EXPERT EMIRATES
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl font-light">
          Empowering Smart Traders,<br className="hidden sm:block" />
          Every Step of the Way
        </p>
      </div>

      {/* Bottom Row (Floating Left) */}
      <motion.div
        className="flex gap-4 md:gap-6 mt-8 md:mt-12"
        animate={{ x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className={coinStyle}><SiSolana size={28} className="text-green-300" /></div>
        <div className={coinStyle}><SiDash size={28} className="text-blue-400" /></div>
        <div className={coinStyle}><FaBitcoin size={28} className="text-yellow-400" /></div>
      </motion.div>
    </div>
  );
};

export default ExpertMotion;
