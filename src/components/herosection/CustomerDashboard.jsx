// import React from 'react';
import arrowImg from "../../assets/arrow.png";
// import { motion, useAnimation } from 'framer-motion';

// export default function CustomerDashboard() {
//   const headingControls = useAnimation();
//   const arrowControls = useAnimation();

//   const handleHoverStart = () => {
//     headingControls.start({ color: '#b99229' });
//     arrowControls.start({ scale: 1.15 });
//   };

//   const handleHoverEnd = () => {
//     headingControls.start({ color: '#ffffff' });
//     arrowControls.start({ scale: 1 });
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       onHoverStart={handleHoverStart}
//       onHoverEnd={handleHoverEnd}
//       whileHover={{
//         scale: 1.02,
//         border: '2px solid #b99229',
//         transition: { duration: 0.4 },
//       }}
//       className="bg-[#0a0a0a] text-white mt-10 py-10 px-6 rounded-3xl
//                  border border-[#333] w-11/12 sm:w-4/5 md:w-[800px] xl:w-[800px] 2xl:w-3/5
//                  mx-auto transition-all duration-300"
//     >
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//         {/* LEFT SIDE - TEXT */}
//         <div className="flex-1">
//           <motion.h2
//             animate={headingControls}
//             className="text-xl md:text-2xl font-extrabold mb-4"
//           >
//             CUSTOMER DASHBOARD
//           </motion.h2>
//           <p className="text-gray-300 text-sm leading-relaxed mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.
//           </p>
//           <div className="flex gap-4 flex-wrap">
//             {['Contact Us', 'Pricing'].map((text) => (
//               <motion.button
//                 key={text}
//                 whileTap={{ scale: 0.95 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-r from-[#b99229] to-[#d1aa3f] text-black font-semibold px-5 py-2.5 rounded-full shadow-md transition duration-300 hover:from-[#a07f1f] hover:to-[#c1982e]"
//               >
//                 {text}
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE - ARROW IMAGE */}
//         <motion.div
//           className="flex-1 flex justify-center lg:justify-end"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.img
//             src={arrowImg}
//             alt="Arrow"
//             animate={arrowControls}
//             className="w-[180px]"
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }import React from "react";
// import arrowImg from "../../assets/arrow.png"; // Make sure this path is correct

export default function CustomerDashboard() {
  return (
    <div className="flex items-center justify-center gap-5 p-5 border-2 border-black rounded-2xl bg-black transition-all duration-300 group hover:border-yellow-500">
      <div className="w-1/2">
        <h1 className="text-start text-3xl my-2 font-extrabold text-white transition-all duration-300 group-hover:text-yellow-500">
          CUSTOMER DASHBOARD
        </h1>
        <p className="text-lg text-start my-3 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, enim
          debitis adipisci repellat vitae voluptatem, atque est magni rerum
          earum repudiandae pariatur dolor consectetur veniam eum amet incidunt
          omnis laboriosam.
        </p>

        <div className="flex items-center justify-start gap-20 mt-10 my-3 font-semibold text-lg">
          <button className="w-40 py-3 rounded-full border border-yellow-500 bg-yellow-500 text-black hover:text-white hover:bg-gray-950 transition-all duration-300">
            Contact Us
          </button>
          <button className="w-40 py-3 rounded-full border border-yellow-500 hover:bg-yellow-500 transition-all duration-300 text-white">
            Pricings
          </button>
        </div>
      </div>

      <div className="w-[370px] h-full">
        <img
          src={arrowImg}
          alt="Arrow image"
          className="w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}
