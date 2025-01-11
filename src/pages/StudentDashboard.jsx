import React from "react";
import Footer from "../components/Footer";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { LuLayoutTemplate } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { VscEditSession } from "react-icons/vsc";
import { MdOutlineMessage } from "react-icons/md";
import { LiaElementor } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-blue-900 text-white p-4 px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/BIT_Sindri_Logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-lg font-semibold">Student Name</h1>
              <p className="text-sm">BIT Sindri, Dhanbad</p>
            </div>
          </div>

          {/* Search Bar Centered */}
          <div className="flex-grow flex justify-center mt-4 sm:mt-0">
            <div className="relative flex items-center w-[60%]">
              <CiSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search Mentors, Career Guidance..."
                className="pl-10 py-2 w-[100%] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Profile Button */}
          <div className="flex items-center mt-4 space-x-8 sm:mt-0">
            <button
              className="bg-blue-600 text-white rounded-md p-1 px-4 hover:bg-blue-800"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
            <button
              className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center"
              onClick={() => navigate("/student/profile")}
            >
              <CgProfile className=" w-12 h-12 invert" size={25} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 px-16 space-y-6">
          {/* Recent Updates & Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Updates */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold mb-4">Recent Updates</h2>
              <div className="space-y-2">
                <div className="flex flex-row space-x-4">
                  <FiMessageSquare size={40} className="text-blue-500" />
                  <div className="flex flex-col">
                    <p className="text-sm">New message from your mentor</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row space-x-4">
                  <CiCalendar size={40} className="text-blue-500 font-bold" />
                  <div className="flex flex-col">
                    <p className="text-sm">Upcoming session scheduled</p>
                    <p className="text-sm text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Links */}
            <section className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 ">
              <h2 className="text-4xl font-bold mb-4">Quick Links</h2>
              <div className="space-y-4">
                <button className="w-full border border-gray-500 p-4 py-2 rounded-lg flex space-x-3 items-center hover:bg-gray-200">
                  <CiCalendar size={40} className="text-blue-500 font-bold" />
                  <p>Schedule a Session</p>
                </button>

                <button className="w-full border border-gray-500 p-4 py-2 rounded-lg flex space-x-3 items-center hover:bg-gray-200">
                  <MdOutlinePeopleAlt size={40} className="text-blue-500" />
                  <p>View Mentors</p>
                </button>
              </div>
            </section>
          </div>
          {/* Career Guidance Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <IoBookOutline size={35} />
                <h2 className="text-3xl font-bold">Career Guidance</h2>
              </div>
              <div className="flex items-center space-x-1">
                <button className="text-gray-700 hover:underline">
                  Explore Resources
                </button>
                <IoIosArrowForward size={20} />
              </div>
            </div>
            <div className="mt-4 space-y-6 pl-8">
              <p className="flex space-y-3  items-center space-x-2 ">
                <GrResources size={25} />

                <span>Career Planning Resources</span>
              </p>
              <p className="flex items-center space-x-2">
                <LuLayoutTemplate size={25} />

                <span>Resume Templates</span>
              </p>
              <p className="flex items-center space-x-2">
                <GiSkills size={25} />
                <span>Skill Assessment</span>
              </p>
            </div>
          </section>

          {/* Mentorship Program Section */}
          <section className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <LiaElementor size={40} />
                <h2 className="text-3xl font-bold">Mentorship Program</h2>
              </div>
              <div className="flex items-center space-x-1">
                <button className="text-gray-700 hover:underline">
                  Find a Mentor
                </button>
                <IoIosArrowForward size={20} />
              </div>
            </div>
            <div className="mt-4 space-y-6 pl-8">
              <p className="flex items-center space-x-2">
                <FaHandshake size={25} />
                <span>Available Mentors</span>
              </p>
              <p className="flex items-center space-x-2">
                <VscEditSession size={25} />
                <span>Upcoming Sessions</span>
              </p>
              <p className="flex items-center space-x-2">
                <MdOutlineMessage size={25} />

                <span>Message History</span>
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
