import React from "react";
import { FaRegEnvelope, FaBook } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";
import { IoMdCode } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-darkblue text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 px-16">
          <img
            src="/BIT_Sindri_Logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">ALUMNI CONNECT</h1>
            <p className="text-sm">B.I.T. SINDRI, DHANBAD, JHARKHAND</p>
          </div>
        </div>
        <button className="bg-customBlue px-7 py-2 rounded-lg mx-5" onClick={() => navigate("/")}>Logout</button>
      </header>

      {/* Profile Section */}
      <section className="relative px-8 flex flex-row justify-between items-center bg-gradient-to-r pr-32 from-blue-900 to-blue-500 text-white p-4 px-">
        {/* Edit Button */}
        <button className="absolute top-6 right-2 text-white px-2 py-2 rounded-lg text-3xl font-semibold mr-6">
          <FaRegEdit />
        </button>

        {/* Profile Section */}
        <div className="flex flex-row space-x-6 px-10">
          <div className="flex mb-4">
            <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center text-4xl font-bold border-4">
              RS
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-3xl font-semibold">Riya Sharma</h2>
            <p className="text-lg">Student, Batch of 2026</p>
            <p className="text-lg">3rd Year, Computer Science</p>
          </div>
        </div>

        {/* Dashboard Icon */}
        <button
          className="pr-28"
          onClick={() => navigate("/student/Dashboard")}
        >
          <LuLayoutDashboard size={80} />
          <p>Dashboard</p>
        </button>
      </section>

      {/* Main Content */}
      <div className="py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p className="text-gray-700">
              A dedicated computer science student with an interest in AI, web
              development, and data science. Passionate about learning and
              building projects.
            </p>
          </div>

          {/* Academic Projects */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Academic Projects</h3>
            <ul className="space-y-4">
              <li className="flex space-x-4 items-center">
                <AiOutlineCode
                  size={40}
                  className="text-customBlue p-1 rounded-md"
                />
                <div>
                  <p className="font-semibold">AI-Powered Chatbot</p>
                  <p className="text-gray-700">
                    Developed a chatbot using Python and Flask.
                  </p>
                </div>
              </li>
              <li className="flex space-x-4 items-center">
                <GrPersonalComputer
                  className="text-customBlue p-1 rounded-md"
                  size={40}
                />
                <div>
                  <p className="font-semibold">Portfolio Website</p>
                  <p className="text-gray-700">
                    Built a personal portfolio using ReactJS.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* current involvements */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Current Involvements
            </h3>
            <ul className="space-y-4">
              <li className="flex space-x-4 items-center">
                <IoMdCode size={25}/>
                <div>
                  <p className="text-gray-700">
                    Member, Coding Club BIT Sindri
                  </p>
                </div>
              </li>
              <li className="flex space-x-4 items-center">
                <GoRocket size={25}/>
                <div>
                  <p className="text-gray-700">Organizer, BIT Hackathon 2026</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Career Aspirations */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Career Aspirations</h3>
            <p className="text-gray-700">
              Looking forward to pursuing a career in software development and
              AI research. Open to internships and mentorship opportunities.
            </p>
          </div>

          {/* Testimonials */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
            <blockquote className="border-l-4 border-customBlue pl-4">
              <p className="mb-2">
                "Riya is a proactive student, always eager to learn and
                contribute to group projects."
              </p>
              <footer>- Prof. Amit Roy</footer>
            </blockquote>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="flex flex-col items-center  justify-center space-y-4 border-2 border-gray-300 rounded-lg p-5 shadow-md">
            <button className="bg-customBlue text-gray-100 px-4 rounded-lg shadow hover:bg-blue-600 flex items-center space-x-2 w-full py-6 justify-center">
              <FaRegEnvelope size={26} />
              <span className="text-md">Messages</span>
            </button>
             
            
          </div>
          {/* Skills & Interests */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Skills & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Development",
                "Artificial Intelligence",
                "Python",
                "Data Science",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-customBlue px-2 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Connected Alumni */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Connected Alumni</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Suman Verma</p>
                  <p>Software Developer</p>
                </div>
                <button>
                  <IoIosArrowForward />
                </button>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Rohit Mehta</p>
                  <p>Data Scientist</p>
                </div>
                <button>
                  <IoIosArrowForward />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
