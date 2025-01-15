import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [emailEntered, setEmailEntered] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailEntered.trim() === "") {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage(
        "Thank you for subscribing! You’ll now receive our latest updates."
      );
      setEmailEntered(""); // Clear the input field
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="w-full bg-darkblue text-white px-16">
      {/* Upper Section */}
      <div className="flex flex-wrap w-full py-8">
        {/* Left box */}
        <div className="w-full lg:w-1/2 p-6 text-xl lg:text-5xl leading-relaxed font-normal text-center lg:text-left">
          Stay Connected with BITS Alumni Network
        </div>

        {/* Right box */}
        <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
          <div>
            Subscribe to our monthly newsletter for the latest updates, events,
            and opportunities tailored for BIT Sindri alumni and students. Don't
            miss out on valuable insights and networking chances!
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 py-4 items-center"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              value={emailEntered}
              onChange={(e) => setEmailEntered(e.target.value)}
              className="px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder:text-gray-300 w-full lg:w-[70%]"
            />
            <button
              type="submit"
              className="bg-customBlue text-white hover:text-black hover:bg-white px-6 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className="my-2 text-center text-green-400 text-sm">{message}</p>
          )}
          <p className="text-xs mt-2">
            By clicking Subscribe you're confirming that you agree with our
            Terms and Conditions.
          </p>
        </div>
      </div>

      {/* Footer bottom with logo and links */}
      <div className="flex flex-wrap items-center justify-between p-8 py-16 bg-darkblue space-y-8 lg:space-y-0">
        {/* Logo */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <img src="/BIT_Sindri_Logo.png" alt="logo" className="h-28"  />
        </div>

        {/* Navigation Links */}
        <ul className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start space-x-16 text-center">
          <li>
            <a href="#alumni-network">Alumni Network</a>
          </li>
          <li>
            <a href="#career-support">Career Guidance</a>
          </li>
          <li>
            <a href="#mentorship-program">Mentorship Program</a>
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
          <li>
            <button>Privacy Policy</button>
          </li>
          <li>
            <button>Terms of Service</button>
          </li>
          <li>
            <button>Cookies Setting</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
