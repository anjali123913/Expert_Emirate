import React from "react";
import successImage from "../assets/auth/pana.png"; // Replace with your image path
import { useNavigate } from "react-router-dom";

const PasswordChanged = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-black text-center flex flex-col items-center max-w-md">
        {/* Image */}
        <img
          src={successImage}
          alt="Password Changed Success"
          className="w-72 mb-6"
        />

        {/* Headings */}
        <h2 className="text-yellow-400 text-2xl sm:text-3xl font-semibold mb-2 font-poppins">
          Password Successfully<br />Changed!
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-sm sm:text-base mb-6 font-poppins px-2">
          Your password successfully changed, now you can login with new password.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-black font-semibold py-3 px-10 rounded-full shadow-md transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PasswordChanged;
