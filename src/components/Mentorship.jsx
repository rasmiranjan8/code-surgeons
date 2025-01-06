import React from "react";

const Mentorship = () => {
  return (
    <div className="bg-white py-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unlock Your Potential <br /> Through Mentorship
          </h1>
          <p className="text-gray-600 mb-4">
            Our mentorship program bridges the gap between alumni and students.
            Gain strategic guidance, and support from experienced professionals
            in your field.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Expert Guidance
              </h2>
              <p className="text-gray-600 text-sm">
                Receive mentorship from experts in your desired industry.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Networking Opportunities
              </h2>
              <p className="text-gray-600 text-sm">
                Build lasting connections and get introduced to new career
                paths.
              </p>
            </div>
          </div>
          <button className="bg-blue-500 text-white w-[200px] items-center justify-center px-6 py-3 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <img
            src="/Mentorship_section_Image.png"
            alt="Mentorship"
            className="rounded-md shadow-lg w-[80%] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
