import React from "react";
import chart2 from "../assets/blog/image2.png";
import chart3 from "../assets/blog/image3.png";
import chart4 from "../assets/blog/image4.png";
import chart5 from "../assets/blog/image5.png";
import chart6 from "../assets/blog/image6.png";
import chart7 from "../assets/blog/image7.png";

const posts = [
  {
    title: "Artificial Intelligence in Education: Enhancing Learning Experiences",
    desc: "The ancient ruins stood as a testament to a civilization...",
    status: "Published",
    time: "12 Aug 2022 10:00 PM",
    img: chart2,
  },
  {
    title: "Space Exploration: New Frontiers and the Quest for Extraterrestrial Life",
    desc: "The professor delivered a captivating lecture...",
    status: "Published",
    time: "12 Aug 2022 10:00 PM",
    img: chart3,
  },
  {
    title: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
    desc: "The concert was a mesmerizing experience...",
    status: "Draft",
    time: "12 Aug 2022 10:00 PM",
    img: chart4,
  },
  {
    title: "The Gig Economy: Opportunities, Risks and the Future of Work",
    desc: "The book transported me to a magical world...",
    status: "Published",
    time: "12 Aug 2022 10:00 PM",
    img: chart5,
  },
  {
    title: "Smart Cities: Integrating Technology for Sustainable Urban Living",
    desc: "The artist dipped the brush into vibrant paint...",
    status: "Draft",
    time: "12 Aug 2022 10:00 PM",
    img: chart6,
  },
  {
    title: "Blockchain: Revolutionizing Transparency in Global Transactions",
    desc: "Blockchain technology is paving the way for decentralized systems...",
    status: "Published",
    time: "13 Aug 2022 09:00 AM",
    img: chart7,
  },
];

export default function PostGrid() {
  return (
    <div className="bg-black min-h-screen px-4 md:px-10 py-10">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 text-transparent bg-clip-text">
          Latest Market Insights
        </h2>

        {/* 2 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] rounded-2xl p-5 flex flex-col md:flex-row justify-between items-center gap-6 hover:scale-[1.02] transition-transform"
            >
              {/* Left side text */}
              <div className="md:w-2/3 w-full">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{post.desc}</p>
                <div className="flex flex-wrap text-sm text-gray-400 gap-4">
                  <span className="bg-gray-800 px-3 py-1 rounded-full">
                    {post.status}
                  </span>
                  <span>{post.time}</span>
                </div>
              </div>

              {/* Right side image */}
              <div className="md:w-1/3 w-full">
                <img
                  src={post.img}
                  alt="chart"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
