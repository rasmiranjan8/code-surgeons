import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const ExploreResource = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-darkblue text-white py-4 px-6 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 px-4 sm:px-16">
            <img
              src="/BIT_Sindri_Logo.png"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
              onClick={() => navigate("/")}
            />
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg font-semibold text-customBlue">
                ALUMNI CONNECT
              </h1>
              <p className="text-xs sm:text-sm">B.I.T. SINDRI, DHANBAD, JHARKHAND</p>
            </div>
          </div>
        </header>

        {/* Filters Section */}
        <div className="bg-white shadow-md py-4 mx-4 sm:mx-40 rounded-lg">
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
            <h2 className="text-gray-800 text-base sm:text-xl font-bold mb-2">
              Resume Building
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Learn how to craft a compelling resume that stands out to employers.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-flex items-center text-sm sm:text-base">
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
            <h2 className="text-gray-800 text-base sm:text-xl font-bold mb-2">
              Career Paths
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore different career paths and find the right fit for you.
            </p>
            <a
              href="#"
              className="text-purple-600 mt-4 inline-flex items-center text-sm sm:text-base"
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

          {/* Alumni Section */}
          <div className="bg-blue-900 text-white py-8 rounded-lg">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-lg sm:text-2xl font-bold mb-6">
                Alumni Available for Guidance
              </h2>
              <div className="flex flex-col space-y-8 mx-4 sm:mx-16">
                {/* Alumni 1 */}
                <div className="bg-blue-800 p-4 rounded-lg flex flex-wrap items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold">John Doe</h3>
                    <p className="text-sm">Software Engineer at TechCorp</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-2 sm:mt-0">
                    Book Now
                  </button>
                  {/* Alumni 2 */}
                </div>
                <div className="bg-blue-800 p-4 rounded-lg flex flex-wrap items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold">Jane Smith</h3>
                    <p className="text-sm">Software Engineer at TCS</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-2 sm:mt-0">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreResource;
