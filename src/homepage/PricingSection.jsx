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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-[#14121F] p-8 rounded-2xl shadow-lg flex-1 border transition duration-300 ${
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
  className="
  text-yellow-500
  my-4
  border border-yellow-700
            hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] hover:text-black rounded-full px-10 tracking-wider py-3 font-bold transition"
>
  Buy Now
</button>



            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 group">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'border-gray-400'
                    }`}
                  >
                    {isHovered && (
                      <span className="text-xs font-bold text-black">✓</span>
                    )}
                  </div>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
