import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import moneyBag from "../assets/dashboardhome/moneyBag.png"
export default function BuyPlan() {
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div className="flex min-h-screen bg-[#121117]">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-4">
          <div className="flex flex-col lg:flex-row gap-6 text-white" style={{ minHeight: '100vh' }}>
            {/* Left: Buy New Plan */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-yellow-400">BUY NEW PLAN</h2>
              <p className="text-sm text-gray-400">Choose a plan that suits your trading needs.</p>

              <div className="bg-[#111] border border-gray-800 p-6 rounded-md space-y-6">
                <div className="space-y-2">
                  <label className="text-sm">Plan Type</label>
                  <select className="w-full bg-black border border-gray-700 text-white p-2 rounded">
                    <option>Standard</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Plan</label>
                  <select className="w-full bg-black border border-gray-700 text-white p-2 rounded">
                    <option>Funded $50,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Choose Payment Method from the list below *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['ETH ERC20', 'USDT TRC20', 'Card Payment', 'Bank Transfer', 'BTC'].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input type="checkbox" value={method} />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border border-dashed border-yellow-400 p-4 rounded text-center cursor-pointer">
                  <div className="text-yellow-400 text-2xl">📁</div>
                  <p className="text-yellow-400 text-sm">Click to upload</p>
                  <p className="text-gray-400 text-xs">or drag and drop (max. 800x400px)</p>
                </div>

                <button className="w-full bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300 py-3">
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>

            {/* Right: Current Plans */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-yellow-400">CURRENT PLAN</h2>
                <button className="text-gray-400">Filter</button>
              </div>

              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#111] border border-gray-800 p-4 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm">Standard Plan</p>
                    <p className="text-xl font-bold">
                      $199<span className="text-sm">/MONTHLY</span>
                    </p>
                    <p className="text-xs text-gray-400">Purchase Date: 25-11-2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-500 text-center">Plan Active</p>
                    <p className="text-sm text-gray-10 my-1">Purchase Date : 20/05/2003</p>
                    <p className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                      Expires: 25-11-2025
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-center mt-6">
                <img src={moneyBag} alt="Money Bag" className="mx-auto w-32" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}