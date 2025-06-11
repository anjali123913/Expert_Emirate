import React, { useState } from "react";
import facebook from "../assets/auth/facebook.png";
import google from "../assets/auth/google.png";
import apple from "../assets/auth/apple.png";
import logo from "../assets/navlogo.png";
import { Link, useNavigate } from "react-router-dom";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("");
    console.log("Sending OTP to:", email);
    alert("OTP sent to your email (simulate API call)");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-white mb-4 inline-block"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter your email to get the OTP to reset your password. We will send
            4 digits code to your email.
          </p>

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

            {message && <p className="text-red-500 text-sm">{message}</p>}

            <button
              type="submit"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full w-full px-3 py-3 font-bold   transition-colors"
              onClick={()=>navigate("/otp-verification", { state: { from: "forgot-password" } })}
            >
              Send OTP
            </button>

            <div className="flex items-center justify-between gap-4 mt-4">
              <button className="">
                <img src={facebook} alt="face book" />
              </button>
              <button className="">
                {" "}
                <img src={google} alt="face book" />
              </button>
              <button className="">
                {" "}
                <img src={apple} alt="face book" />
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Return to?{" "}
            <Link
              to={"/login"}
              className="text-yellow-500 font-medium underline"
            >
              Sign In
            </Link>
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
