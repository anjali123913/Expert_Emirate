import { TbFlagDiscount } from 'react-icons/tb';

const plans = [
  {
    name: 'Standard Plan',
    price: '$999',
    icon: <TbFlagDiscount />,
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
  return (
    <div className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`group bg-[#14121F] p-8 rounded-2xl shadow-lg flex-1 border transition duration-300 hover:border-yellow-500 ${
              idx === 2 ? 'border-yellow-500' : 'border-gray-700'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-4 bg-black rounded-3xl border w-1/2 px-1 py-2 text-center">
              <span className="group-hover:text-yellow-500">{plan.icon}</span>
              <span className="text-lg font-semibold group-hover:text-yellow-500">
                {plan.name}
              </span>
            </div>

            <h2 className="text-4xl font-bold transition-colors duration-300 group-hover:text-yellow-500 text-white">
              {plan.price}
              <span className="text-xl font-normal text-white group-hover:text-white">
                {plan.duration}
              </span>
            </h2>

            <p className="text-gray-400 my-4">
              {idx === 0
                ? 'Perfect for small teams or unlimited evaluation.'
                : idx === 1
                ? 'Everything in Standard, plus enhanced features for serious traders.'
                : 'Our premium package for ultimate trading performance. Includes everything in Pro.'}
            </p>

            <button className="text-yellow-500 my-4 border border-yellow-700 group-hover:bg-gradient-to-l group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:via-50% group-hover:to-[#452e06] group-hover:text-black rounded-full px-10 tracking-wider py-3 font-bold transition">
              Buy Now
            </button>

            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400 group-hover:border-yellow-400 border-gray-400">
                    <span className="text-xs font-bold text-black hidden group-hover:block">✓</span>
                  </div>
                  <span className="text-gray-300 transition-colors duration-200">
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
