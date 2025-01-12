import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import Footer from "../components/Footer";

const ExploreResource = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-blue-900 text-white p-4">
          <div className=" px-10 mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/BIT_Sindri_Logo.png"
                alt="Logo"
                className="h-10 w-10 mr-3"
              />
              <h1 className="text-xl font-bold">Alumni</h1>
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md">
              Login / Sign Up
            </button>
          </div>
        </header>

        {/* Filters Section */}
        <div className="bg-white shadow-md py-4 m-4 mx-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Industries</option>
              <option>Information Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Stages</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Skills</option>
              <option>Programming</option>
              <option>Data Analysis</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>

        {/* Resources Section */}
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Articles */}
          <div className="bg-white shadow-md p-4 rounded-lg mb-4">
            <div className="flex items-center space-x-2">
              <CgNotes size={20} className="text-blue-600" />
              <h3 className="text-blue-600 text-lg font-medium mb-2">
                Article
              </h3>
            </div>
            <h2 className="text-gray-800 text-xl font-bold mb-2">
              Resume Building
            </h2>
            <p className="text-gray-600">
              Learn how to craft a compelling resume that stands out to
              employers.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-flex items-center">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Videos */}
          <div className="bg-white shadow-md p-4 rounded-lg mb-4">
            <div className="flex items-center space-x-2">
              <MdOutlineSlowMotionVideo size={20} className="text-purple-600" />
              <h2 className="text-purple-600 text-lg font-medium mb-2">
                Video
              </h2>
            </div>
            <h2 className="text-gray-800 text-xl font-bold mb-2">
              Career Paths
            </h2>
            <p className="text-gray-600">
              Explore different career paths and find the right fit for you.
            </p>
            <a
              href="#"
              className="text-purple-600 mt-4 inline-flex items-center"
            >
              Watch Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Guides */}
          <div className="bg-white shadow-md p-4 rounded-lg mb-4">
            <div className="flex space-x-4 items-center">
              <BsGraphUpArrow size={20} className="text-green-600" />
              <h2 className="text-green-600 text-lg font-medium mb-2">Guide</h2>
            </div>
            <h2 className="text-gray-800 text-xl font-bold mb-2">
              Job Market Trends
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest industry trends and job market
              insights.
            </p>
            <a
              href="#"
              className="text-green-600 mt-4 inline-flex items-center"
            >
              View Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Alumni Section */}
          <div className="bg-blue-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">
                Alumni Available for Guidance
              </h2>
              <div className="flex flex-col space-y-8 mx-16">
                {/* Alumni 1 */}
                <div className="bg-blue-800 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-sm">Software Engineer at TechCorp</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                    Book Now
                  </button>
                </div>

                {/* Alumni 2 */}
                <div className="bg-blue-800 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-sm">Data Scientist at AnalyticsCo</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExploreResource;
