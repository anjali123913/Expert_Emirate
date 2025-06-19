import React from "react";
import chart1 from "../assets/blog/image1.png";
import chart2 from "../assets/blog/image2.png";
import chart3 from "../assets/blog/image3.png";
import chart4 from "../assets/blog/image4.png";
import chart5 from "../assets/blog/image5.png";
import chart6 from "../assets/blog/image6.png";
import chart7 from "../assets/blog/image7.png";
import { Eye, Share2 } from "lucide-react";

const posts = [
  {
    title: "Artificial Intelligence in Education",
    desc: "The ancient ruins stood as a testament to a civilization...",
    status: "Published",
    time: "12 Aug 2022 10:00 PM",
    views: 12,
    shares: 4,
    img: chart1,
  },
  {
    title: "Space Exploration: New Frontiers",
    desc: "The professor delivered a captivating lecture...",
    status: "Published",
    time: "12 Aug 2022 10:00 PM",
    views: 18,
    shares: 6,
    img: chart2,
  },
  {
    title: "Mental Health in the Digital Age",
    desc: "The concert was a mesmerizing experience...",
    status: "Draft",
    time: "12 Aug 2022 10:00 PM",
    views: 7,
    shares: 2,
    img: chart3,
  },
  {
    title: "The Gig Economy: Future of Work",
    desc: "The book transported me to a magical world...",
    status: "Published",
    time: "12 Aug 2022 10:00 PM",
    views: 24,
    shares: 10,
    img: chart4,
  },
  {
    title: "Smart Cities & Urban Tech",
    desc: "The artist dipped the brush into vibrant paint...",
    status: "Draft",
    time: "12 Aug 2022 10:00 PM",
    views: 15,
    shares: 3,
    img: chart5,
  },
  {
    title: "Blockchain & Global Finance",
    desc: "Blockchain technology is revolutionizing systems...",
    status: "Published",
    time: "13 Aug 2022 09:00 AM",
    views: 30,
    shares: 8,
    img: chart6,
  },
  {
    title: "Neural Networks & Market Forecast",
    desc: "How AI models influence predictions...",
    status: "Published",
    time: "14 Aug 2022 11:30 AM",
    views: 20,
    shares: 5,
    img: chart7,
  },
];

const gradientStyle = {
  backgroundImage:
    "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
};

export default function PostGrid() {
  return (
    <div className="bg-black px-4 md:px-10 py-10">
      <div className="max-w-[1300px] mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mt-6 mb-6 bg-clip-text text-transparent"
          style={gradientStyle}
        >
          Latest Market Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#3C3A44] rounded-2xl p-5 relative hover:scale-[1.02] transition-transform duration-300 shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Text Content */}
                <div className="md:w-2/3 w-full">
                  {/* 🟡 Status badge here at the top-left of the card */}
                  <span
                    className="inline-block mb-2 px-3 py-1 rounded-full text-sm font-semibold text-black"
                    style={gradientStyle}
                  >
                    {post.status}
                  </span>

                  <h3 className="text-white text-xl font-semibold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{post.desc}</p>
                  <p className="text-sm text-gray-400 mb-2">{post.time}</p>

                  {/* View and Share icons */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <Eye size={16} /> {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 size={16} /> {post.shares}
                    </span>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="md:w-1/3 w-full">
                  <img
                    src={post.img}
                    alt="chart"
                    className="w-full h-52 md:h-56 object-cover rounded-lg hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
