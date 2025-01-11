import React, { useState } from "react";

const AlumniSignup = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!fullName || !email || !password || !industry) {
      setMessage("Please fill all the fields.");
      setSignupSuccess(false);
      return;
    }

    // Simulate a successful signup
    setSignupSuccess(true);
    setMessage("Signup successful! Now you can login.");
    // Optionally reset the form fields after submission
    setFullName("");
    setEmail("");
    setPassword("");
    setIndustry("");
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

        {/* Display Message */}
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Select your industry</option>
              <option value="information-technology">
                Information Technology & Software Development
              </option>
              <option value="healthcare">Healthcare & Pharmaceuticals</option>
              <option value="manufacturing">Manufacturing & Engineering</option>
              <option value="education">Education & Research</option>
              <option value="finance">Finance & Banking</option>
              <option value="entrepreneurship">
                Entrepreneurship & Startups
              </option>
              <option value="marketing">Marketing & Advertising</option>
              <option value="government">Government & Public Policy</option>
              <option value="energy">Energy & Environment</option>
              <option value="legal">Legal & Compliance</option>
              <option value="retail">Retail & E-commerce</option>
              <option value="media">Media & Entertainment</option>
              <option value="hospitality">Hospitality & Tourism</option>
              <option value="non-profit">Non-profit & Social Services</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumniSignup;
