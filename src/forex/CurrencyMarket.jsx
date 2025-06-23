import React from "react";
import { motion } from "framer-motion";

// 4 card images
import usdcad from "../assets/forex/cards/usdcad.png";
import usdchf from "../assets/forex/cards/eurusd.png";
import audusd from "../assets/forex/cards/usdcad.png";
import eurusd from "../assets/forex/cards/usdchf.png";
import { Link } from "react-router-dom";

// Array of cards
const cards = [usdcad, usdchf, audusd, eurusd];

const CurrencyMarket = () => {
  // Repeat cards for seamless scrolling
  const scrollingCards = [...cards, ...cards];

  return (
    <div className="bg-black py-4 overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {scrollingCards.map((image, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden"
          >
            <Link to="/image">
              <img
                src={image}
                alt={`forex-card-${index}`}
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CurrencyMarket;



// import image2 from "../assets/scrolingcardsview/graph.png"


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // Images
// import usdcad from "../assets/forex/cards/usdcad.png";
// import usdchf from "../assets/forex/cards/eurusd.png";
// import audusd from "../assets/forex/cards/usdcad.png";
// import eurusd from "../assets/forex/cards/usdchf.png";

// // Card array
// const cards = [usdcad, usdchf, audusd, eurusd];

// const CurrencyMarket = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const scrollingCards = [...cards, ...cards];

//   return (
//     <div className="bg-black py-4 overflow-hidden relative">
//       <motion.div
//         className="flex gap-6 w-max"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 15,
//           ease: "linear",
//         }}
//       >
//         {scrollingCards.map((image, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden cursor-pointer"
//             onClick={() => setSelectedImage(image2)}
//           >
//             <img
//               src={image}
//               alt={`forex-card-${index}`}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         ))}
//       </motion.div>

//       {/* Modal Overlay */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div
//             className="max-w-3xl w-full p-4 bg-white rounded shadow-lg"
//             onClick={(e) => e.stopPropagation()} // prevent modal close when clicking on the image
//           >
//             <button
//               className="text-black font-bold float-right text-lg"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✕
//             </button>
//             <img src={selectedImage} alt="Full View" className="w-full h-auto mt-4" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CurrencyMarket;
