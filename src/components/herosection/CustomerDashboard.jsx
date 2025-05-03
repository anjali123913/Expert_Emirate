import React from 'react';
import arrowImg from '../../assets/arrow.png';
import { motion } from 'framer-motion';

export default function CustomerDashboard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 25px #b99229',
        transition: { duration: 0.4 },
      }}
      className="bg-[#0a0a0a] text-white mt-10 py-10 px-6 rounded-3xl border border-[#b99229] w-11/12 sm:w-3/4 md:w-2/3 xl:w-1/2 mx-auto transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* LEFT SIDE - TEXT */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#b99229] mb-4">
            CUSTOMER DASHBOARD
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
          </p>
          <div className="flex gap-4 flex-wrap">
            {['Contact Us', 'Pricing'].map((text) => (
              <motion.button
                key={text}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#b99229] to-[#d1aa3f] text-black font-semibold px-5 py-2.5 rounded-full shadow-md transition duration-300 hover:from-[#a07f1f] hover:to-[#c1982e]"
              >
                {text}
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - ARROW IMAGE */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={arrowImg} alt="Arrow" className="w-[180px]" />
          <div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
