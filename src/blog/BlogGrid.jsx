import React from "react";
import img1 from "../assets/blog/image1.png";
import img3 from "../assets/blog/image3.png";
import img4 from "../assets/blog/image4.png";
import img5 from "../assets/blog/image5.png";
import img6 from "../assets/blog/image6.png";
import img7 from "../assets/blog/image7.png";

const posts = [
  {
    id: 1,
    title: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
    date: "12 Aug 2023 10:00 PM",
    status: "Published",
    excerpt: "The ancient ruins stood as a testament to a civilization long gone, their grandeur still mesmerizing.",
    image: img1,
  },
  {
    id: 3,
    title: "Space Exploration: New Frontiers and the Quest for Extraterrestrial Life",
    date: "12 Aug 2023 10:00 PM",
    status: "Published",
    excerpt: "The professor delivered a captivating lecture, engaging the students with thought-provoking ideas.",
    image: img3,
  },
  {
    id: 4,
    title: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
    date: "12 Aug 2023 10:00 PM",
    status: "Draft",
    excerpt: "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering.",
    image: img4,
  },
  {
    id: 5,
    title: "The Gig Economy: Opportunities Risks and the Future of Work",
    date: "12 Aug 2023 10:00 PM",
    status: "Published",
    excerpt: "The book transported me to a magical world, where imagination knew no bounds.",
    image: img5,
  },
  {
    id: 6,
    title: "Smart Cities: Integrating Technology for Sustainable Urban Living",
    date: "12 Aug 2023 10:00 PM",
    status: "Draft",
    excerpt: "The artist dipped the brush into vibrant paint, bringing the canvas to life with bold strokes and wild energy.",
    image: img6,
  },
  {
    id: 7,
    title: "The Future of Renewable Energy: Innovations and Challenges Ahead",
    date: "12 Aug 2023 10:00 PM",
    status: "Published",
    excerpt: "The hiker trekked through the dense forest, guided by the soft glow of sunlight filtering through the trees.",
    image: img7,
  },
];

const BlogCard = ({ post }) => {
  return (
    <div className="bg-[#121212] border border-[#1e1e1e] rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-lg transition w-full">
      {/* Left Side - Text Content */}
      <div className="flex-1 w-full">
        <div className="flex items-center justify-between text-xs mb-2">
          <span
            className={`px-2 py-[2px] rounded-full text-black text-[10px] font-semibold uppercase ${
              post.status === "Published"
                ? "bg-gradient-to-r from-[#FFD600] to-[#FFB800]"
                : "bg-gradient-to-r from-[#C6FFDD] to-[#FBD786]"
            }`}
          >
            {post.status}
          </span>
          <span className="text-gray-400 text-[11px]">{post.date}</span>
        </div>
        <h2 className="text-sm md:text-base font-semibold text-white leading-snug mb-2">
          {post.title}
        </h2>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex gap-4 text-gray-400 text-sm">
          <span className="flex items-center gap-1">👁 24</span>
          <span className="flex items-center gap-1">💬 4</span>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[180px] h-[130px] flex-shrink-0">
        <img
          src={post.image}
          alt="thumbnail"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <div className="bg-black min-h-screen px-4 md:px-10 py-10 text-white">
      {/* Input + Post Button */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Enter your text..."
          className="w-full md:w-1/2 px-4 py-2 bg-[#1E1E1E] border border-[#333] rounded-xl text-white placeholder-gray-500 focus:outline-none"
        />
        <button
          className="px-6 py-2 rounded-xl text-sm font-semibold text-black"
          style={{
            background:
              "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
          }}
        >
          Post
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2 text-sm">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full transition duration-150 ${
              num === 1
                ? "bg-gradient-to-r from-[#FFD600] to-[#FFB800] text-black font-bold"
                : "border border-[#444] text-gray-400 hover:bg-[#222]"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
