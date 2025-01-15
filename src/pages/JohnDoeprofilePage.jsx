import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { SiCodementor } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JohnDoeProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-darkblue text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 px-16">
          <img
            src="/BIT_Sindri_Logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-customBlue">ALUMNI CONNECT</h1>
            <p className="text-sm">B.I.T. SINDRI, DHANBAD, JHARKHAND</p>
          </div>
        </div>
        <button className="bg-customBlue px-7 py-2 rounded-lg mx-12" onClick={() => navigate("/")}>Logout</button>
      </header>
       

      {/* Profile Section */}
      <section className="relative px-8 flex flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-blue-800 text-white p-4 px-">
        {/* Edit Button */}
        <button  className="absolute top-6 right-2 text-white px-2 py-2 rounded-lg text-3xl font-semibold mr-6 pr-12">
          <FaRegEdit />
        </button>

        {/* Profile Section */}
        <div className="flex flex-row space-x-6 px-10">
          <div className="flex mb-4">
            <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center text-4xl font-bold border-4">
              JD
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">John Doe</h2>
            <p className="text-lg">Alumni, Batch of 2015</p>
            <p className="text-lg">Data Scientist at XYZ Corp</p>
            <p className="text-lg">San Francisco, USA</p>
          </div>
        </div>

         
      </section>

      {/* Main Content Section */}
      <div className="py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p className="text-gray-700">
              A passionate data scientist with over 7 years of experience in AI
              and analytics. Enthusiastic about mentoring and guiding aspiring
              professionals.
            </p>
          </div>

          {/* Experience Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li className="flex flex-row space-x-6 items-center">
                <FaNetworkWired
                  size={30}
                  className="text-customBlue"
                />
                <div>
                  <p className="font-semibold">Data Scientist</p>
                  <p className="text-gray-700">XYZ Corp • 2018 - Present</p>
                </div>
              </li>
              <li className="flex flex-row space-x-6 items-center">
                <FaNetworkWired
                  size={30}
                  className="text-customBlue "
                />
                <div>
                  <p className="font-semibold">Analyst</p>
                  <p className="text-gray-700">ABC Inc • 2015 - 2018</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="flex flex-row items-center space-x-4 pl-6">
              <FaBook size={45} className="text-customBlue p-2" />
              <div>
                <p>B.Tech in Computer Science</p>
                <p className="text-gray-700">BIT Sindri • 2011-2015</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Testimonials</h3>
            <blockquote className="border-l-4 border-customBlue pl-4">
              <p className="mb-2">
                "John helped me transition into data science with practical
                advice and guidance."
              </p>
              <footer>- Jane Smith</footer>
            </blockquote>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          {/* Contact Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <button className="w-full bg-customBlue hover:bg-blue-700 text-white py-2 rounded-lg mb-4 h-16">
              <div className="flex flex-row justify-center space-x-4 items-center font-bold">
                <FaRegEnvelope size={30} />
                <p>Send Message</p>
              </div>
            </button>
            <button className="w-full bg-customBlue hover:bg-blue-700 text-white py-2 rounded-lg mb-4 h-16">
              <div className="flex flex-row justify-center space-x-4 items-center font-bold">
                <SiCodementor size={30} />
                <p>Request Mentorship</p>
              </div>
            </button>
            <button className="w-full border-2  hover:bg-blue-700 hover:text-white  text-gray-800 text-bold py-3 rounded-lg">
              <div className="flex flex-row justify-center space-x-2 items-center">
                 
                <p>Connect</p>
              </div>
            </button>
          </div>

          {/* Skills & Interests Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Skills & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {["Data Science", "Machine Learning", "Python", "AI"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Mentorship Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Mentorship</h3>
            <p className="text-green-700 rounded-md bg-green-100 inline px-3 py-2">
              Available for mentorship
            </p>
            <h1 className="py-2 mt-4">Preferred Topics:</h1>
            <p className="text-green-700 rounded-md bg-green-100 inline-block px-2 py-1 mx-3">
              AI
            </p>
            <p className="text-green-700 rounded-md bg-green-100 inline px-2 py-1">
              {" "}
              Career Switching
            </p>
          </div>

          {/* Connected Alumni Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Connected Alumni</h3>
            <ul className="space-y-4 px-6">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p>Machine Learning Expert </p>
                </div>
                <button>
                  <IoIosArrowForward />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Robert Brown</p>
                  <p>AI Engineer </p>
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

export default JohnDoeProfile;