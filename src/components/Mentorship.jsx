import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import AlumniSignup from "../pages/AlumniSignup";

const Mentorship = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="mentorship-program"
      className="bg-white border border-gray-200 py-40 flex items-center justify-center"
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
          <div className="flex space-x-6">
            <button
              onClick={() => navigate("/alumni/mentorship")}
              className="bg-customBlue text-white w-[200px] mx-auto md:mx-0 px-6 py-3 rounded-md hover:bg-darkblue transition"
            >
              Find a Mentor
              <GoArrowUpRight size={20} className="inline-block ml-1" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-customBlue text-white w-[200px] mx-auto md:mx-0 px-6 py-3 rounded-md hover:bg-darkblue transition"
            >
              Become a Mentor
              <GoArrowUpRight size={20} className="inline-block ml-1" />
            </button>
          </div>
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

      {/* AlumniSignup Modal */}
      <AlumniSignup isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Mentorship;
