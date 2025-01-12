import React from "react";
import Footer from "../components/Footer";

const AlumniDirectory = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-950 shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="BIT_Sindri_Logo.png" alt="Logo" className="h-10" />
          <div className="flex flex-col justify-center items-start space-x-3">
            <span className="ml-3 text-xl font-semibold text-customBlue">
              Alumni
            </span>

            <p className="text-white">B.I.T SINDRI, DHANBAD, JHARKHAND</p>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Login / Sign Up
        </button>
      </nav>

      {/* Search/Filter Section */}
      <div className="bg-white shadow-md mt-6 mx-auto max-w-5xl rounded-lg p-6">
        <div className="flex flex-col md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter Name..."
            className="col-span-1 md:col-span-2 border border-gray-300 rounded-md px-4 py-2"
          />
          <div className="flex flex-row justify-between items-center">
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>All Courses</option>
              <option>Bachelor's</option>
              <option>Master's</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>All Years</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>All Skills</option>
              <option>Python</option>
              <option>JavaScript</option>
            </select>
          </div>
        </div>
      </div>

      {/* Alumni Card */}
      <div className="bg-white shadow-md mt-6 mx-auto max-w-5xl rounded-lg p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">
            JD
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-gray-600">Software Engineer at Google</p>
            <div className="flex items-center text-gray-500 mt-2">
              <span className="mr-4">📍 Bengaluru, India</span> <br />
              <span>🎓 Class of 2015</span>
            </div>
            <div className="flex mt-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm mr-2">
                Python
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Connect
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">
            View Profile
          </button>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-700 text-white text-center py-6 mt-6 mx-auto max-w-5xl rounded-lg my-10">
        <h2 className="text-xl font-bold">
          Don’t Miss Out on Building Connections!
        </h2>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 mt-4 rounded-md font-semibold">
          Update Your Profile
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AlumniDirectory;
