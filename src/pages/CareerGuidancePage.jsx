import React from "react";

const CareerGuidancePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/BIT_Sindri_Logo.png"
            alt="BIT Sindri Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">
            ALUMNI
            <span className="block text-sm font-normal">
              B.I.T Sindri, Dhanbad, Jharkhand
            </span>
          </h1>
        </div>
        <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200">
          Login / Sign Up
        </button>
      </header>

      {/* Filter Section */}
      <div className="bg-white py-6 px-4 sm:px-12 shadow">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Industry", "Career Stage", "Skills"].map((filter) => (
            <select
              key={filter}
              className="w-full bg-gray-100 border rounded-lg p-2"
            >
              <option>{`All ${filter}s`}</option>
            </select>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-8 px-4 sm:px-12 space-y-6">
        {[
          { type: "Article", title: "Resume Building", action: "Read More" },
          { type: "Video", title: "Career Paths", action: "Watch Now" },
          { type: "Guide", title: "Job Market Trends", action: "View Guide" },
        ].map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                resource.type === "Article"
                  ? "bg-blue-100 text-blue-500"
                  : resource.type === "Video"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-green-100 text-green-500"
              }`}
            >
              {resource.type[0]}
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{resource.title}</h3>
              <p className="text-gray-500 text-sm">
                {resource.type === "Article"
                  ? "Learn how to craft a compelling resume that stands out."
                  : resource.type === "Video"
                  ? "Explore career paths and find the right fit for you."
                  : "Stay updated with job market trends and insights."}
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:underline">
              {resource.action}
            </button>
          </div>
        ))}
      </div>

      {/* Alumni Guidance Section */}
      <div className="bg-blue-900 text-white py-8 px-4 sm:px-12">
        <h2 className="text-2xl font-bold mb-6">
          Alumni Available for Guidance
        </h2>
        <div className="space-y-4">
          {[
            { name: "John Doe", title: "Software Engineer at Tech Corp" },
            { name: "Jane Smith", title: "Data Scientist at Analytics Co" },
          ].map((alumnus, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-blue-800 rounded-lg p-4 shadow-md"
            >
              <div>
                <h3 className="font-bold">{alumnus.name}</h3>
                <p className="text-sm text-gray-300">{alumnus.title}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerGuidancePage;
