import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-darkblue shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/BIT_Sindri_Logo.png" alt="Logo" className="h-10" />
          <div className="flex flex-col ml-2">
            <span className="text-lg font-bold text-white hover:text-gray-300">
              ALUMNI
            </span>
            <span className="text-sm font-semibold text-white">
              BIT SINDRI, DHANBAD, JHARKHAND
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-blue-600">
            Alumni Network
          </a>
          <a href="#" className="hover:text-blue-600">
            Career Support
          </a>
          <a href="#" className="hover:text-blue-600">
            Mentorship Program
          </a>
        </nav>

        {/* Login/Register Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login / Register
        </button>

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
          <nav className="flex flex-col space-y-4 space-x-2 px-6 py-4 text-white">
            <a href="#" className="hover:text-blue-600">
              Alumni Network
            </a>
            <a href="#" className="hover:text-blue-600">
              Career Support
            </a>
            <a href="#" className="hover:text-blue-600">
              Mentorship Program
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Login / Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
