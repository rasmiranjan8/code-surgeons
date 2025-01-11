import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-darkblue text-white px-16">
      {/* Upper Section */}
      <div className="flex flex-wrap w-full py-8">
        {/* Left box */}
        <div className="w-full lg:w-1/2 p-6 text-3xl lg:text-5xl leading-relaxed font-bold text-center lg:text-left">
          Stay Connected with BIT Alumni Network
        </div>

        {/* Right box */}
        <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
          <div>
            Subscribe to our monthly newsletter for the latest updates, events,
            and opportunities tailored for BIT Sindri alumni and students. Don't
            miss out on valuable insights and networking chances!
          </div>
          <form
            action=""
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 py-4 items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 bg-transparent text-white placeholder:text-gray-300 w-full lg:w-[70%]"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm">
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>
      </div>

      {/* Footer bottom with logo and links */}
      <div className="flex flex-wrap items-center justify-between p-8 py-16 bg-darkblue space-y-8 lg:space-y-0">
        {/* Logo */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <img src="/BIT_Sindri_Logo.png" alt="logo" className="h-20" />
        </div>

        {/* Navigation Links */}
        <ul className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start space-x-16 text-center">
          <li>
            <a href="#">Alumni Network</a>
          </li>
          <li>
            <a href="#">Career Support</a>
          </li>
          <li>
            <a href="#">Mentorship Program</a>
          </li>
          <li>
            <a href="#">Event Calendar</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="w-full lg:w-auto flex flex-col items-center space-y-4">
          <p className="text-white text-md">Follow Us</p>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl hover:text-red-600" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Lower Section */}
      <div className="flex flex-wrap justify-between items-center p-4 text-gray-400">
        <p className="w-full lg:w-auto text-center lg:text-left">
          © 2025 BIT Sindri Alumni Network. All rights reserved.
        </p>
        <ul className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-end space-x-4 px-0 lg:px-8">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
