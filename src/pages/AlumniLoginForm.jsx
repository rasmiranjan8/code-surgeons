import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniLoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded valid credentials for demonstration
    const validEmail = "alumni@gmail.com";
    const validPassword = "alumni123";

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate email and password
    if (email === validEmail && password === validPassword) {
      navigate("/alumni/dashboard"); // Redirect to Alumni Dashboard
    } else {
      setError("Invalid Email ID or Password. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative flex flex-col items-center justify-center w-[90%] max-w-lg h-auto sm:h-[60%] lg:h-[50%] bg-white border border-gray-200 shadow-2xl p-8 rounded-2xl">
        {/* Cross Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 bg-gray-200 rounded-full p-2 shadow-md"
        >
          ✕
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Alumni Login</h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email ID */}
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium text-lg py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 shadow-md transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlumniLoginForm;
