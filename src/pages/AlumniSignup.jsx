import React, { useState } from "react";

const AlumniSignup = ({ isOpen, onClose, onSignup }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [message, setMessage] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (!fullName || !email || !password || !graduationYear) {
      setMessage("Please fill all the fields.");
      setSignupSuccess(false);
      return;
    }

    // Simulate a successful signup
    setSignupSuccess(true);
    setMessage("Signup successful! Now you can login.");
    onSignup(email, password); // Pass email and password back to parent

    // Reset fields
    setFullName("");
    setEmail("");
    setPassword("");
    setGraduationYear("");

    // Close modal after a delay
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2 shadow-md focus:outline-none"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Alumni Signup
        </h2>

        {/* Message */}
        {message && (
          <p
            className={`text-center text-sm ${
              signupSuccess ? "text-green-600" : "text-red-600"
            } mb-4`}
          >
            {message}
          </p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Graduation Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Graduation Year
            </label>
            <select
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Graduation Year</option>
              {Array.from(
                { length: 10 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlumniSignup;
