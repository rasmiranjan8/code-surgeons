import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { GiBookCover } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { MdOutlinePeople } from "react-icons/md";
import { PiNumberCircleThreeBold } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

const AlumniDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-950 text-white p-4 px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/BIT_Sindri_Logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-lg text-customBlue font-semibold">
              Alumni Name
            </h1>
          </div>
        </div>

        {/* Search Bar Centered */}
        <div className="flex-grow flex justify-center mt-4 sm:mt-0">
          <div className="relative flex items-center w-[60%]">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search mentee requests, resources......."
              className="pl-10 py-2 w-[100%] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {/* Profile Button */}
        <div className="flex items-center mt-4 space-x-8 sm:mt-0 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 rounded-md p-1 px-6"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
          <button
            className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center"
            onClick={() => navigate("/Alumni/profile")}
          >
            <CgProfile className="w-12 h-12 invert" size={25} />
          </button>
        </div>
      </header>

      <div className="p-6 px-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-8">
          {/* Recent Updates */}
          <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Recent Updates
            </h2>
            <div className="flex flex-col  space-y-4">
              <button className="flex flex-row bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left h-20 items-center space-x-4">
                <FiMessageSquare size={35} className="text-blue-700" />

                <div>
                  <p>New mentorship request from Pritam</p>
                  <p className="text-gray-500">1hour ago</p>
                </div>
              </button>
              <button className="flex flex-row bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left h-20 items-center space-x-4">
                <FaUserGraduate size={35} className="text-blue-700" />

                <div>
                  <p>Resource you shared was helpful to students</p>
                  <p className="text-gray-500">Yesterday</p>
                </div>
              </button>
              <button className="flex flex-row bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left h-20 items-center space-x-4">
                <SlCalender size={35} className="text-blue-700" />

                <div>
                  <p>Rashmi has scheduled a Career Guidance Session</p>
                  <p className="text-gray-500">Now</p>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col bg-white shadow-xl rounded-lg p-6 h-56">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Quick Links
            </h2>
            <div className="space-y-4">
              <button className="flex flex-row bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left h-20 items-center space-x-4">
                <MdOutlinePeople size={35} className="bg-black text-white" />

                <div>Accept mentorship Request</div>
              </button>
            </div>
          </div>
        </div>
        {/* Offer Career Guidance Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <IoBookOutline size={35} />
              <h2 className="text-3xl font-semibold">Offer Career Guidance</h2>
            </div>
            <button className="text-gray-800 hover:underline">
              Share Advice &gt;
            </button>
          </div>
          <div className="border border-gray-400 p-4 rounded-md mb-4">
            <p className="text-gray-700">Your Expertise Areas</p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-green-500 text-gray-800 text-sm px-3 py-1 rounded-full">
                Software Development
              </span>
              <span className="bg-green-500 text-gray-800 text-sm px-3 py-1 rounded-full">
                Finance
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2 text-gray-800 hover:underline text-lg">
              <GiBookCover size={25} />
              <span>Share Career Stories</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-800 hover:underline text-lg">
              <GoGoal size={25} />
              <span>Create Resources</span>
            </button>
          </div>
        </div>

        {/* Mentorship Opportunities Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <MdOutlinePeople size={35} />
              <h2 className="text-3xl font-semibold">
                Mentorship Opportunities
              </h2>
            </div>
            <button className=" hover:underline">View Requests &gt;</button>
          </div>
          <div className="flex justify-between items-center mb-4 border border-gray-400 p-4 rounded-md">
            <div className="flex flex-col space-y-2 px-7">
              <p className="text-gray-900 font-semibold text-xl">
                Active Mentees
              </p>

              <PiNumberCircleThreeBold size={25} />
            </div>
            <div className="text-gray-400">3 currently</div>
          </div>
          <div className="flex flex-col space-y-8">
            <button className="flex items-center space-x-2 text-gray-900 hover:underline">
              <FaHandshake size={30} />
              <span className="text-lg">Pending Requests (2)</span>
            </button>
          </div>
        </div>

        {/* Recent Updates and Quick Links Section */}
      </div>
      <Footer />
    </div>
  );
};

export default AlumniDashboard;