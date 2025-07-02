import React from "react";
import image from "../../assets/heroSectionImages/logo.png";
import bgImage from "../../assets/heroSectionImages/moonBG.png";

const ExpertCard = () => {
  const font = {
    fontFamily: "Helvetica Now Display",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="group relative w-80 h-80 overflow-hidden rounded-2xl border border-transparent 
        transition-all duration-500 hover:border-yellow-500 shadow-md hover:shadow-yellow-500"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />

        {/* Centered Content */}
        <div
          className="absolute z-10 w-full top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          transition-all duration-1000 group-hover:-translate-y-28 text-center"
        >
          <img
            src={image}
            alt="Expert Emirates Logo"
            className="mx-auto mb-2 w-[100px] h-[80px]"
          />

          {/* Gradient Text */}
          <h2
            className="text-xl font-normal mb-1 text-transparent bg-clip-text transition-all duration-500"
            style={{
              ...font,
              backgroundImage: "linear-gradient(180deg, #FFE976, #C0971C, #281000)",
            }}
          >
            EXPERT EMIRATES
          </h2>

          <p className="text-white text-[10px]" style={font}>
            TURNING HOPES INTO REALITY
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
