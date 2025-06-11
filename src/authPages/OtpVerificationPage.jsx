import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/navlogo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(120); // 2 minutes countdown
  const inputsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    if (fullOtp.length < 4) {
      setMessage("Please enter all 4 digits");
      return;
    }

    setMessage("");
    console.log("Verifying OTP:", fullOtp);
    alert("OTP Verified (Simulated)");
  };

  const handleResend = () => {
    alert("OTP Resent (Simulated)");
    setOtp(["", "", "", ""]);
    setTimer(120); // reset timer
    inputsRef.current[0].focus();
  };

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  const handleContinue = () => {
    const from = location.state?.from;

    if (from === "login" || from === "sign-up") {
      navigate("/dashboard");
    } else if (from === "forgot-password") {
      navigate("/reset-password");
    } else {
      // fallback if `from` is missing or unknown
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            OTP Verification
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter 4 digits code sent to your email.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl bg-zinc-900 text-white border border-zinc-700 rounded"
                />
              ))}
            </div>
            <p className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1 my-10">
              {" "}
              <span className="">{formatTime(timer)}</span>
            </p>
            {message && <p className="text-red-500 text-sm mb-2">{message}</p>}

            <button
              type="submit"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full w-full px-3 py-3 font-bold   transition-colors"
              onClick={handleContinue}
            >
              Continue
            </button>

            <p className="text-sm text-zinc-400 mb-2">
              Didn’t receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="text-yellow-500 font-medium"
              >
                Resend
              </button>
            </p>
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
