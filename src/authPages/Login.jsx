import React, { useState } from "react";
import logo from "../assets/navlogo.png";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    setError("");

    // Simulated login (replace with actual API call)
    console.log("Logging in with:", { email, password });
navigate("/otp-verification", { state: { from: "login" } });
    // alert("Login successful (simulate API call)");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">Welcome back</h2>
          <p className="text-sm text-gray-400 mb-6">Welcome back, please enter your details.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-right">
              <Link to="/forgot-password" className="text-red-500 text-sm">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className=" bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full w-full px-3 py-3 font-bold   transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Don’t have an account? <Link to={"/sign-up"}  className="text-yellow-500 font-medium underline">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Logo */}
      <div className="w-1/2 bg-black text-yellow-500 flex items-center justify-center">
        <div className="text-center w-96 h-auto">
          <img
            src={logo}
            alt="Expert Emirates Logo"
            className="w-full h-full mx-auto mb-4 object-center"
          />
         
        </div>
      </div>
    </div>
  );
}