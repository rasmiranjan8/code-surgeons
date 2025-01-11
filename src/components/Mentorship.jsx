import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Mentorship = () => {
  const navigate = useNavigate();
  return (
    <div
      id="mentorship-program"
      className="bg-white py-10 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-2">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build Lasting Connections with Mentors
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Connect with industry experts who can guide your career journey
          </p>
          
          <button onClick={() => navigate("/alumni/mentorship")} className="bg-blue-500 text-white w-[200px] mx-auto md:mx-0 px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Find a Mentor<GoArrowUpRight size={20} className="inline-block ml-1"/> 
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <img
            src="/Mentorship_section_Image.png"
            alt="Mentorship"
            className="rounded-md shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[95%] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
