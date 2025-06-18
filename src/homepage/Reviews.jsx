import React from 'react';
import VerifyIcon from '../assets/review/Verify.png';


const reviews = [
  {
    name: "Abdirisak faysal", time: "1 hour ago", title: "Firstly I'm loving this propfirm…",
    content: "Firstly I'm loving this propfirm activities, since it provide convenience tools that helped me pass phase one. Tools like journaling helped me most. And I hope to pass phase 2 and become funded trader. Thank you"
  },
  {
    name: "Joe T", time: "1 hour ago", title: "Honestly the company did very well",
    content: "The company has done an excellent job helping small traders like me. I heard about it from my brother. Once I complete Phase 2, I’ll be sure to rate again 😄."
  },
  {
    name: "Ali Abolhosseini", time: "1 hour ago", title: "Come to see your dream house",
    content: "Bullionfunded has truly transformed my trading experience. The evaluation is transparent. Quick support too. Profit split could improve."
  },
  {
    name: "Aqib Siddiquee", time: "4 hours ago", title: "Bullionfunded is awesome",
    content: "Speedy support and credentials. I passed my 6k evaluation. Excited for my first payout!"
  },
  {
    name: "Tariq Boudjella", time: "3 hours ago", title: "Support is amazing",
    content: "Had an issue with money. Support responded fast and refunded in 2 hours. Amazing!"
  },
  {
    name: "Gaele Lepron", time: "2 hours ago", title: "A fair player, quite recommendable",
    content: "I believe this is a truly transparent prop firm. Strong support system. Everything is easy to understand."
  },
  {
    name: "Mustafa Muzamil", time: "5 hours ago", title: "Very transparent prop firm",
    content: "They offer a strong system and good evaluation models. Payouts are on time."
  },
  {
    name: "Mohamud Muktar", time: "7 hours ago", title: "Solid prop firm experience",
    content: "No delays. Smooth account setup. Loved the speed and communication."
  },
  {
    name: "bi", time: "4 hours ago", title: "Great service",
    content: "Fast support and clean dashboard. Passed evaluation phase quickly."
  },
  {
    name: "Ahmed S", time: "6 hours ago", title: "Highly recommend!",
    content: "Really like the tools and trader dashboard. Makes trading stress-free."
  },
  {
    name: "Sami R", time: "5 hours ago", title: "Wonderful team",
    content: "Customer support is friendly and helpful. Smooth payout process."
  },
  {
    name: "Fatima N", time: "2 hours ago", title: "User-friendly and helpful",
    content: "From account creation to funding – everything is intuitive and professional."
  }
];

const StarRating = () => (
  <div className="flex items-center mb-2">
    {"★★★★★".split("").map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ))}
    <span className="ml-2 flex items-center text-sm text-gray-400">
  <img src={VerifyIcon} alt="Verified" className="w-4 h-4 mr-1" />
  Verified
</span>

  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-[#1C1B2A] text-white p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300">
    <StarRating />
    <h2 className="text-sm font-semibold">{review.name}, <span className="text-gray-400">{review.time}</span></h2>
    <h3 className="mt-2 font-bold text-md">{review.title}</h3>
    <p className="mt-1 text-sm text-gray-300">{review.content}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
