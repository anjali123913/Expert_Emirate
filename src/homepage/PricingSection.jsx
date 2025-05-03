import { useState } from 'react';

const plans = [
  {
    name: 'Standard Plan',
    price: '$999',
    duration: '/MONTHLY',
    features: [
      '📈 Premium Trade Signals (12–15/Week)',
      '🧠 Risk Reward Ratio - 1:2 , 1:3, 1:4',
      '📩 Instant Telegram Trade Alerts',
      '📊 Exclusive Weekly Market Blueprint',
      '🛡️ Smart Risk Management Tips',
      '🧞 Dedicated VIP Support',
      '🚀 Forex + Gold Elite Access',
      '🧪 First to New Features & Tools'
    ]
  },
  {
    name: 'Pro Plan',
    price: '$999',
    duration: '/HALF YEARLY',
    features: [
      '📈 Premium Trade Signals (12–15/Week)',
      '🧠 Risk Reward Ratio - 1:2 , 1:3, 1:4',
      '📩 Instant Telegram Trade Alerts',
      '📊 Exclusive Weekly Market Blueprint',
      '🛡️ Smart Risk Management Tips',
      '🧞 Dedicated VIP Support',
      '🚀 Forex + Gold Elite Access',
      '🧪 First to New Features & Tools'
    ]
  },
  {
    name: 'Ultra Plan',
    price: '$999',
    duration: '/YEARLY',
    features: [
      '📈 Premium Trade Signals (12–15/Week)',
      '🧠 Risk Reward Ratio - 1:2 , 1:3, 1:4',
      '📩 Instant Telegram Trade Alerts',
      '📊 Exclusive Weekly Market Blueprint',
      '🛡️ Smart Risk Management Tips',
      '🧞 Dedicated VIP Support',
      '🚀 Forex + Gold Elite Access',
      '🧪 First to New Features & Tools'
    ]
  }
];

export default function PricingSection() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-[#14121F] p-8 rounded-2xl shadow-lg flex-1 border ${
              idx === 2 ? 'border-yellow-500' : 'border-gray-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600"></div>
              <span className="text-lg font-semibold text-white">{plan.name}</span>
            </div>

            <h2 className="text-4xl font-bold text-white">
              {plan.price}
              <span className="text-xl font-normal text-white">{plan.duration}</span>
            </h2>

            <p className="text-gray-400 my-4">
              {idx === 0
                ? 'Perfect for small teams or unlimited evaluation.'
                : idx === 1
                ? 'Everything in Standard, plus enhanced features for serious traders.'
                : 'Our premium package for ultimate trading performance. Includes everything in Pro.'}
            </p>

            <button
              onClick={() => setClicked(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-2 rounded-full font-semibold transition duration-300 hover:text-white mb-6"
            >
              Buy Now
            </button>

            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 group">
                  <span className="text-yellow-400">
                    {clicked ? '✅' : '⭕️'}
                  </span>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
