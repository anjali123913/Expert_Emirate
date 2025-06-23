import React from "react";

import { Link } from "react-router-dom";

import { cardsData } from "../blogdetail/data";

const BlogCryptoForecastCards = ({ blogType,blogId}) => {
  const filteredCards = cardsData.filter((blog) => blog.type === blogType);

  if (filteredCards.length === 0) {
    return (
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>No cards found for the selected category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {filteredCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative max-w-md w-full"
          >
            <Link to={`/blog/read-blog/${card.blogId}`}>
            
            <div className="relative">
              <img
                src={card.image}
                alt="Chart"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full mt-2 shadow-md">
                {card.badge}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
              <p className="text-xs text-gray-500 mt-3">{card.date}</p>
            </div>
            </Link>          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCryptoForecastCards;