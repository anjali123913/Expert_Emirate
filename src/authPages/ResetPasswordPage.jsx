import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/navlogo.png";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setMessage("Please fill out both fields.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Simulated password reset success
    alert("Password has been reset successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-400 mb-6 hover:underline"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Reset Password
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter a strong password and confirm your new password to finish securely.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div>
              <label className="text-sm text-white">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            {message && <p className="text-red-500 text-sm">{message}</p>}

            <button
              type="submit"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full w-full px-3 py-3 font-bold   transition-colors"
              onClick={()=>navigate("/login")}
            >
              Sign in
            </button>
          </form>
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
