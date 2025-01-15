import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentSignup from "./StudentSignup";

const StudentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for signup success message
  const [isStudentSignupModalOpen, setStudentSignupModalOpen] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "student@gmail.com",
    password: "student123",
  });

  const navigate = useNavigate();

  const handleSignup = (signupEmail, signupPassword) => {
    setCredentials({ email: signupEmail, password: signupPassword });
    setSuccessMessage("Signup is successful, try login now!"); // Set success message
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check credentials
    if (email === credentials.email && password === credentials.password) {
      navigate("/student/dashboard"); // Redirect to the dashboard
    } else {
      setError("Invalid Email ID or Password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Login</h1>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 text-sm text-center mb-4">
          {successMessage}
        </p>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      {/* Form */}
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

      {/* Additional Actions */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="p-4 text-blue-700">
          <button>Forgot Password?</button>
        </div>
        <div className="flex flex-row space-x-2">
          <p>Don't have an account?</p>
          <button
            className="text-blue-600"
            onClick={() => {
              setStudentSignupModalOpen(true);
              setSuccessMessage(""); // Clear success message when reopening signup modal
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Signup Modal */}
      <StudentSignup
        isOpen={isStudentSignupModalOpen}
        onClose={() => setStudentSignupModalOpen(false)}
        onSignup={handleSignup}
      />
    </div>
  );
};

export default StudentLoginForm;
