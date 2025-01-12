import React from "react";
import { FiArrowUpRight } from "react-icons/fi";


import { useNavigate } from "react-router-dom";
const CareerSupport = () => {
  const navigate = useNavigate();
  return (
    <div
      id="career-support"
      className="flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto p-6 flex flex-col justify-end lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Section - Image */}
        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
          <img
            src="/Career_Guidance_Image.png" // Replace with the actual image URL
            alt="Professional Guidance"
            className="rounded-lg shadow-lg w-full lg:w-auto lg:h-auto"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Plan Your Career with Expert Guidance
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Get personalized advice and resources to accelerate your career
            growth.
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-6 gap-4">
            <button
              className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              onClick={() => navigate("/resources")}
            >
              Explore
              <FiArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSupport;
