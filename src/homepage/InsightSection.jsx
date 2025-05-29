import React from "react";
import InsightImage from "../assets/insight.png";
import { MdLocalPhone } from "react-icons/md";

export default function InsightSection() {
  const [reasonOne, setReasonOne] = React.useState(true);

  return (
    <section className="bg-[#121117] text-white font-poppins w-50 pb-20 pt-16">
      {/* TOP BUTTONS */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center mb-12">
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            className={`rounded-full px-10 py-3 font-bold tracking-tighter transition
              ${
                reasonOne
                  ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black"
                  : "bg-black text-white hover:bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] hover:text-black border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950"
              }`}
            onClick={() => setReasonOne(true)}
          >
            Reason One
          </button>

          <button
            className={`rounded-full px-10 py-3 font-bold tracking-tighter transition
              ${
                !reasonOne
                  ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black"
                  : "bg-black text-white hover:bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] hover:text-black border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950"
              }`}
            onClick={() => setReasonOne(false)}
          >
            Reason Two
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-16">
        {/* TEXT BLOCK */}
        {reasonOne ? (
          <div className="w-full font-sans font-semibold text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white tracking-widest">
              Dominate{" "}
              <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mt-3 tracking-widest">
                Markets Smarter<span className="text-white text-lg">,</span>{" "}
                Faster<span className="text-white text-lg">,</span>
              </span>
              <br />
              and with{" "}
              <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent tracking-widest mt-3">
                Unmatched Precision
              </span>
            </h2>

            <p className="mt-4 text-sm md:text-lg text-gray-100 font-inter font-normal tracking-widest">
              At Expert Emirates, we don’t just follow trends—we create them.
              Whether you're trading Forex, Crypto, or COMEX, our arsenal of
              tools and expertise ensures you stay ahead of the curve.
            </p>

            <ul className="mt-6 space-y-3 text-sm md:text-base list-disc list-inside tracking-widest font-inter font-normal">
              <li>
                <span className="font-semibold text-white">
                  Get top-notch market insights
                </span>{" "}
                from seasoned Forex pros
              </li>
              <li>
                <span className="font-semibold text-white">
                  Enter real-time sessions
                </span>{" "}
                tracking world currency movements
              </li>
              <li>
                <span className="font-semibold text-white">
                  Swap trade ideas
                </span>{" "}
                with fellow traders and boost your game
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-full lg:w-5/6 font-sans font-semibold text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white tracking-widest">
              <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mt-3 tracking-widest">
                Book a Call{" "}
              </span>
              with Us to Unlock <br />
              Expert Emirates Magic (Reason 2)
            </h2>

            <p className="my-7 text-sm md:text-lg text-gray-300 font-inter font-normal tracking-widest">
              Ready to discover why Expert Emirates is the ultimate partner for your success?
            </p>

            <p className="text-gray-200 font-inter font-normal">
              Schedule your call with us and experience firsthand how we transform challenges into opportunities!
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fadeIn delay-400 mx-auto lg:mx-0 mt-8">
              <button className="relative max-w-[300px] rounded-full group transition-all duration-300 bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] hover:bg-black">
                <div className="w-full h-full border border-transparent hover:border-t-yellow-500 hover:border-b-yellow-500 hover:border-l-yellow-700 hover:border-r-yellow-700 rounded-full py-4 px-14 text-black text-lg font-poppins font-bold flex items-center justify-center gap-2 tracking-wider leading-3 hover:bg-black hover:text-white transition-all duration-300">
                  <MdLocalPhone className="text-xl" />
                  Book a Call Now
                </div>
              </button>
            </div>
          </div>
        )}

        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={InsightImage}
            alt="Insight Illustration"
            className="w-64 md:w-80 rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
