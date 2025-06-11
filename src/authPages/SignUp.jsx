import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/auth/facebook.png";
import google from "../assets/auth/google.png";
import apple from "../assets/auth/apple.png";
import logo from "../assets/navlogo.png";
export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((v) => v === "")) {
      setError("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Registering user:", form);
    navigate("/otp-verification", { state: { from: "sign-up" } });

    // alert("Registration successful (simulate API call)");
  };

  return (
    <div className="flex pt-12">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm text-white">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            <div>
              <label className="text-sm text-white">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            <div>
              <label className="text-sm text-white">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full w-full px-3 py-3 font-bold   transition-colors"
            >
              Sign up
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
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 font-medium underline">
              Login
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
