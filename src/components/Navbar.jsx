import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import StudentLoginForm from "../pages/StudentLoginForm"; // Import the StudentLoginForm component
import AlumniLoginForm from "../pages/AlumniLoginForm"; // Import the AlumniLoginForm component
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isStudentLoginModalOpen, setIsStudentLoginModalOpen] = useState(false);
  const [isAlumniLoginModalOpen, setIsAlumniLoginModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginMenu = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen);
  };

  const openStudentLoginModal = () => {
    setIsLoginMenuOpen(false); // Close the login dropdown
    setIsStudentLoginModalOpen(true); // Open the student login modal
  };
  const openAlumniLoginModal = () => {
    setIsLoginMenuOpen(false); // Close the login dropdown
    setIsAlumniLoginModalOpen(true); // Open the alumni login modal
  };

  const closeStudentLoginModal = () => {
    setIsStudentLoginModalOpen(false); // Close the student login modal
  };

  const closeAlumniLoginModal = () => {
    setIsAlumniLoginModalOpen(false); // Close the alumni login modal
  };

  return (
    <header className="bg-darkblue shadow-sm top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/BIT_Sindri_Logo.png" alt="Logo" className="h-20" />
          <div className="flex flex-col ml-2">
            <span className="text-lg font-bold text-customBlue">
              ALUMNI CONNECT
            </span>
            <span className="text-sm font-semibold text-white">
              BIT SINDRI, DHANBAD, JHARKHAND
            </span>
          </div>
        </div>
        <div className="relative w-1/4">
          <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            className="border rounded-2xl w-full h-10 pl-10 pr-5"
            placeholder="Search Profile and Resources . . ."
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <a
            href="#alumni-network"
            className="hover:underline decoration-customBlue text-xs underline-offset-8 "
          >
            Alumni Network
          </a>
          <a
            href="#career-support"
            className="hover:underline decoration-customBlue text-xs underline-offset-8"
          >
            Career Guidance
          </a>
          <a
            href="#mentorship-program"
            className="hover:underline decoration-customBlue text-xs underline-offset-8"
          >
            Mentorship Program
          </a>
        </nav>

        {/* Login/Register Button */}
        <div className="relative hidden md:block">
          <button
            className="bg-customBlue text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={toggleLoginMenu}
          >
            Login / Sign Up
          </button>
          {isLoginMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              <button
                onClick={openStudentLoginModal}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-blue-600"
              >
                Login as Student
              </button>
              <button
                onClick={openAlumniLoginModal}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 rounded-lg hover:bg-blue-600"
              >
                Login as Alumni
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darkblue">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-white">
            <a href="#alumni-network" className="hover:text-blue-600">
              Alumni Network
            </a>
            <a href="#career-support" className="hover:text-blue-600">
              Career Support
            </a>
            <a href="#mentorship-program" className="hover:text-blue-600">
              Mentorship Program
            </a>
            <div className="relative">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={toggleLoginMenu}
              >
                Login / Sign Up
              </button>
              {isLoginMenuOpen && (
                <div className="mt-2 bg-white rounded-lg shadow-lg z-50">
                  <button
                    onClick={openStudentLoginModal}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                  >
                    Login as Student
                  </button>
                  <button
                    onClick={() => console.log("Navigate to Alumni Login")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                  >
                    Login as Alumni
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Student Login Modal */}
      {isStudentLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg">
            {/* Include the StudentLoginForm */}
            <StudentLoginForm />

            {/* Close Button */}
            <button
              onClick={closeStudentLoginModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 bg-gray-200 rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Alumni Login Modal */}
      {isAlumniLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg">
            {/* Include the AlumniLoginForm and pass the close function */}
            <AlumniLoginForm closeModal={closeAlumniLoginModal} />

            {/* Close Button */}
            <button
              onClick={closeAlumniLoginModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 bg-gray-200 rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
