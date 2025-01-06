import React from "react";

const CareerSupport = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto p-6 flex flex-col space-x-16 lg:flex-row items-center">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="/Career_Guidance_Image.png" // Replace with the actual image URL
            alt="Professional Guidance"
            className="rounded-lg shadow-lg w-[75%] h-auto"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 text-center items-center lg:text-left pr-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Your Career Journey with Expert Guidance and Support
          </h1>
          <p className="text-gray-600 text-lg mb-6 items-center">
            Our career guidance services are designed to help you navigate your
            professional path. With tailored workshops and personalized
            one-on-one sessions, we equip you with the tools you need to
            succeed.
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex-1">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Workshops Available
              </h2>
              <p className="text-gray-600 text-sm">
                Join our interactive workshops to enhance your skills and boost
                your confidence.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex-1">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Personal Sessions
              </h2>
              <p className="text-gray-600 text-sm">
                Schedule a one-on-one session for tailored advice and career
                strategies.
              </p>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerSupport;
