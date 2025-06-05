import React from "react";
import shield from "../assets/copyimage/image1.png"; // ✅ Ensure path is correct

const features = [
  {
    title: "Follow the Pros",
    desc: "Our expert traders are like the rock stars of the trading world. Pick your favorite and copy their every move. It’s like air-guitar, but with real money!",
  },
  {
    title: "Hands-Free Trading",
    desc: "Forget stress. Our automated system copies the trades of your chosen expert, so you can spend more time binge-watching your favorite shows.",
  },
  {
    title: "Simple Platform",
    desc: "Our interface is as easy as ordering pizza online. No complicated setups—just quick, tasty results.",
  },
  {
    title: "Real-Time Thrills",
    desc: "Get live updates on your trades. It’s like having a front-row seat to the greatest show in finance.",
  },
  {
    title: "Learn and Laugh",
    desc: "With our Forex education resources, you’ll be trading-savvy in no time. It’s learning with a dash of fun!",
  },
];

const Cards = () => {
  return (
    <div className="bg-black text-white px-4 md:px-12 py-16">
      {/* Top 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#121117] border border-yellow-500 rounded-xl p-6 text-center flex flex-col items-center min-h-[180px] transition-transform duration-300 hover:shadow-yellow-500/20"
          >
            <img
              src={shield}
              alt="shield"
              className="w-24 transition-all duration-300 group-hover:animate-bounce -mt-12 mb-2"
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {features.slice(2).map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#121117] border border-yellow-500 rounded-xl p-6 text-center flex flex-col items-center min-h-[180px] transition-transform duration-300 hover:shadow-yellow-500/20"
          >
            <img
              src={shield}
              alt="shield"
              className="w-24 transition-all duration-300 group-hover:animate-bounce -mt-12 mb-2"
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Headings Above Buttons */}
      <div className="mt-16 flex flex-col md:flex-row justify-between text-center md:text-left gap-4">
        <h2 className="text-lg font-bold">
          Start your Dynamic Journey in the Trading World.
        </h2>
        <h2 className="text-lg font-bold">
          Follow <span className="text-white">"Expert Emirates"</span> and copy our trades with one click
        </h2>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
        <button className="bg-black border border-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition w-full md:w-auto">
          TO OPEN AN ACCOUNT
        </button>
        <button className="bg-black border border-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition w-full md:w-auto">
          TO ACTIVATE COPY TRADER
        </button>
      </div>
    </div>
  );
};

export default Cards;
