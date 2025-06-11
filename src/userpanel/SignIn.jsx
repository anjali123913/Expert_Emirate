import React from "react";
import logo from "../assets/login/ExpertEmirates.png"; // update with actual filename

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">Welcome back</h2>
          <p className="text-sm text-gray-400 mb-6">Welcome back please enter your details</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-[#111] text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-[#111] text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
              <p className="text-right text-sm mt-1 text-red-500 cursor-pointer">Forgot password?</p>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-[#fcd34d] via-[#facc15] to-[#eab308] text-black font-semibold shadow-md hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400">
            Don’t have an account?{" "}
            <span className="text-yellow-400 cursor-pointer">Sign up</span>
          </p>
        </div>

        {/* Right Side: Logo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center">
            <img
              src={logo}
              alt="Expert Emirates"
              className="w-40 mx-auto mb-4"
            />
            {/* <h1 className="text-3xl font-extrabold text-[#FFD700] tracking-wider">
              EXPERT <br /> EMIRATES
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
