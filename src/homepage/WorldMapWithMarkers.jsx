// components/WorldMapLabels.jsx
import worldMap from "../assets/map.png"; // Use your map image



const WorldMapLabels = () => {
  return (
    <div className="bg-black p-12 flex flex-col items-center justify-center">

<h1
          className="text-center text-3xl font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent"
        >
         Over 25+ Offices Worldwide
        </h1>
        <p className="w-5/6 text-center my-3 font-poppins font-medium text-[16px]  tracking-[0.12em] mb-6 ">
        Expert Emirates operates more than 25+ offices across the globe. This extensive network not only serves a diverse international clientelebut also collaborates with affiliates situated in key financial centers worldwide.
        </p>
      <div className="relative w-full max-w-[1200px] mx-auto py-12 bg-black">
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-auto object-contain"
        />

        {/* Labels */}
      </div>
    </div>
  );
};

export default WorldMapLabels;
