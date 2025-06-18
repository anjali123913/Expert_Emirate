import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import coinsTop from "../assets/coinsTop.png";
import coinsBottom from "../assets/coinsTop.png"; // You can change if needed

const ExpertMotion = () => {
  const [reverse, setReverse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, 3000); // Change direction every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const createMotionProps = (isTop) => {
    const direction = reverse ? 1 : -1;
    const opposite = reverse ? -1 : 1;
    const from = isTop ? 100 * direction : 100 * opposite;
    const to = isTop ? -100 * direction : -100 * opposite;

    return {
      animate: { x: [`${from}%`, `${to}%`] },
      transition: { duration: 8, ease: "linear", repeat: Infinity },
    };
  };

  return (
    <div className="w-full min-h-[50vh] bg-black relative flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden">
      {/* Top Coin */}
      <motion.img
        src={coinsTop}
        alt="coins top"
        className="absolute top-4 right-96 left-96 w-full opacity-30 z-0 pointer-events-none"
        {...createMotionProps(true)}
      />

      {/* Bottom Coin */}
      <motion.img
        src={coinsBottom}
        alt="coins bottom"
        className="absolute bottom-4 left-96 right-96 w-full opacity-30 z-0 pointer-events-none"
        {...createMotionProps(false)}
      />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-2">
        <h1
          className="text-7xl font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent"
        >
          EXPERT EMIRATES
        </h1>
        <p className="text-white mt-2 text-3xl">Empowering Smart Traders, Every <br/>Step of the Way</p>
      </div>
    </div>
  );
};

export default ExpertMotion;
