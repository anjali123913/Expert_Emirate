import React from "react";
import news1 from "../assets/company-news/news3.png";
import news2 from "../assets/company-news/news2.png";
import news3 from "../assets/company-news/news3.png";
import news4 from "../assets/company-news/news4.png";
import news5 from "../assets/company-news/news5.png";
import news6 from "../assets/company-news/news5.png";

const newsData = [
  {
    id: 1,
    date: "February 27, 2025",
    image: news1,
    title: "Expert Emirates Wins Best Mobile ",
    highlight: "FX Trading App 2025",
    desc: "Expert Emirates is proud to announce that it has been named the 'Best Mobile FX Trading App' at the Gulf Financial Expo 2025...",
    tag: "Event: Gulf Financial Expo",
  },
  {
    id: 2,
    date: "February 25, 2025",
    image: news2,
    title: "Expert Emirates Named Best Prime Trading ",
    highlight: "Broker 2025",
    desc: "Expert Emirates has been honored with the 'Best Prime Trading Broker' award at the Oman Financial Summit 2025...",
    tag: "Event: Oman Financial Summit",
  },
  {
    id: 3,
    date: "February 18, 2025",
    image: news3,
    title: "Naser Taher: The Visionary Behind Expert Emirates’",
    highlight: " Global Rise",
    desc: "Entrepreneur Magazine highlights the leadership of Naser Taher, the visionary behind Expert Emirates’ global success...",
    tag: "Publication: Entrepreneur Magazine",
  },
  {
    id: 4,
    date: "February 14, 2025",
    image: news4,
    title: "Expert Emirates Launches ",
    highlight: "UAE CFD Shares",
    desc: "Expert Emirates is excited to announce the launch of UAE CFD Shares on our trading platform...",
    tag: "",
  },
  {
    id: 5,
    date: "January 21, 2025",
    image: news5,
    title: "Expert Emirates Named Best Global ",
    highlight: "Regulated Broker 2024",
    desc: "Recognized as the 'Best Global Regulated Broker' at the Hong Kong Financial Expo 2024...",
    tag: "Event: Hong Kong Financial Expo",
  },
  {
    id: 6,
    date: "February 10, 2025",
    image: news6,
    title: "Another Prestigious Win for Expert Emirates ",
    highlight: "at Dubai Summit",
    desc: "This accolade reaffirms Expert Emirates' position as a market leader in trading innovation...",
    tag: "Event: Dubai Trading Summit",
  },
];

const NewsCard = ({ item, isHorizontal }) => (
  <div
    className={`bg-[#111] rounded-md overflow-hidden shadow-md ${
      isHorizontal ? "flex flex-col md:flex-row" : "flex flex-col"
    }`}
  >
    {!isHorizontal ? (
      <div className="relative w-full h-[200px]">
        <img
          src={item.image}
          alt="news"
          className="w-full h-full object-cover"
        />
        <p className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded font-poppins">
          {item.date}
        </p>
      </div>
    ) : (
      <img
        src={item.image}
        alt="news"
        className="w-full md:w-[40%] h-[200px] object-cover"
      />
    )}

    <div className="p-5 flex-1">
      {isHorizontal && (
        <p className="text-xs text-[#CCCCCC] mb-2 font-poppins">Date: {item.date}</p>
      )}
      <h2 className="text-[20px] font-bold text-white leading-[30px] font-poppins">
        {item.title}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #281000 26.34%, #C0971C 37.31%, #FFE976 47.63%, #C0971C 58.39%, #281000 69.35%)",
          }}
        >
          {item.highlight}
        </span>
      </h2>
      <p className="text-sm text-[#CCCCCC] mt-3 font-poppins">{item.desc}</p>
      {item.tag && (
        <div className="mt-4 inline-block bg-gradient-to-r from-[#ffe976] to-[#c0971c] text-black text-xs font-medium px-3 py-1 rounded-[6px] font-poppins">
          {item.tag}
        </div>
      )}
      <div className="mt-4">
        <a
          href="#"
          className="text-[#6494FF] text-sm font-medium hover:underline flex items-center gap-1 font-poppins"
        >
          Read More →
        </a>
      </div>
    </div>
  </div>
);

const LatestNews = () => {
  return (
    <div className="w-full min-h-screen bg-black py-12 px-4 overflow-hidden">
      <h1 className="text-center text-[36px] font-bold text-white mb-12 font-poppins">
        Latest News
      </h1>

      {/* First two items as horizontal cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[1300px] mx-auto mb-12">
        {newsData.slice(0, 2).map((item) => (
          <div key={item.id} className="w-full md:w-1/2">
            <NewsCard item={item} isHorizontal={true} />
          </div>
        ))}
      </div>

      {/* Remaining items - auto-scroll right to left */}
      <div className="relative overflow-hidden w-full max-w-[1300px] mx-auto">
        <div className="flex gap-6 w-max animate-marqueeLeft">
          {[...newsData.slice(2), ...newsData.slice(2)].map((item, idx) => (
            <div key={idx} className="min-w-[300px] max-w-[300px]">
              <NewsCard item={item} isHorizontal={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
