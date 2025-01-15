import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const AlumniDirectory = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-darkblue text-white py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 px-0 sm:px-16">
          <img
            src="/BIT_Sindri_Logo.png"
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-base sm:text-lg font-semibold text-customBlue">
              ALUMNI CONNECT
            </h1>
            <p className="text-xs sm:text-sm">
              B.I.T. SINDRI, DHANBAD, JHARKHAND
            </p>
          </div>
        </div>
      </header>

      {/* Search/Filter Section */}
      <div className="bg-white shadow-md mt-6 mx-auto max-w-7xl rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter Name..."
            className="col-span-1 md:col-span-2 border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <select className="border border-gray-300 rounded-md px-4 py-2 w-full">
              <option>All Courses</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
            <select className="border border-gray-300 rounded-md px-2 py-2 w-full">
              <option>All Years</option>
              {[...Array(10)].map((_, i) => (
                <option key={i}>{2025 - i}</option>
              ))}
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 w-full">
              <option value="all-skills">All Skills</option>
              {/* Add options here */}
               {/* Programming Skills */}
            <optgroup label="Programming Languages">
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c++">C++</option>
            </optgroup>
            <optgroup label="Data Analysis & Visualization">
              <option value="excel">Excel</option>
              <option value="tableau">Tableau</option>
              <option value="power-bi">Power BI</option>
            </optgroup>
            <optgroup label="Cloud Computing">
              <option value="aws">AWS</option>
              <option value="azure">Azure</option>
              <option value="google-cloud">Google Cloud</option>
            </optgroup>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="ai-ml">
              Artificial Intelligence & Machine Learning
            </option>
            <option value="software-development">
              Software Development & Testing
            </option>
            <optgroup label="Web Development">
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="html-css">HTML/CSS</option>
            </optgroup>
            <option value="network-administration">
              Network Administration
            </option>
            <option value="cad-design-tools">
              CAD & Engineering Design Tools
            </option>
            <option value="blockchain">Blockchain Development</option>

            {/* Soft Skills */}
            <optgroup label="Soft Skills">
              <option value="communication">
                Communication & Interpersonal Skills
              </option>
              <option value="leadership">Leadership & Team Management</option>
              <option value="critical-thinking">
                Critical Thinking & Problem-Solving
              </option>
              <option value="time-management">Time Management</option>
              <option value="adaptability">Adaptability & Flexibility</option>
              <option value="emotional-intelligence">
                Emotional Intelligence
              </option>
              <option value="negotiation">Negotiation Skills</option>
              <option value="public-speaking">
                Public Speaking & Presentation
              </option>
            </optgroup>

            {/* Business Skills */}
            <optgroup label="Business Skills">
              <option value="project-management">
                Project Management (Agile, Scrum)
              </option>
              <option value="business-analysis">Business Analysis</option>
              <option value="marketing-sales">Marketing & Sales</option>
              <option value="financial-management">Financial Management</option>
              <option value="entrepreneurship">
                Entrepreneurship & Innovation
              </option>
              <option value="strategic-planning">Strategic Planning</option>
              <option value="risk-management">Risk Management</option>
            </optgroup>

            {/* Creative Skills */}
            <optgroup label="Creative Skills">
              <option value="graphic-design">
                Graphic Design (Adobe Photoshop, Illustrator)
              </option>
              <option value="video-editing">
                Video Editing (Premiere Pro, Final Cut Pro)
              </option>
              <option value="ui-ux-design">UI/UX Design (Figma, Sketch)</option>
              <option value="content-creation">
                Content Creation & Copywriting
              </option>
              <option value="photography-videography">
                Photography & Videography
              </option>
            </optgroup>

            {/* Industry-Specific Skills */}
            <optgroup label="Industry-Specific Skills">
              <option value="healthcare">
                Healthcare (Clinical Research, Patient Care)
              </option>
              <option value="manufacturing">
                Manufacturing (Quality Control, Lean Manufacturing)
              </option>
              <option value="education">
                Education (Curriculum Design, Instructional Techniques)
              </option>
              <option value="legal">
                Legal (Contract Drafting, Compliance)
              </option>
              <option value="energy-environment">
                Energy & Environment (Renewable Energy Systems)
              </option>
            </optgroup>

            {/* Other Skills */}
            <option value="others">Others</option>
          
            </select>
          </div>
        </div>
      </div>

      {/* Alumni Card */}
      <div className="bg-white shadow-md mt-6 mx-auto max-w-7xl rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="h-24 w-24 sm:h-40 sm:w-40 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">
            JD
          </div>
          <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-gray-600">Software Engineer at Google</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-gray-500 mt-2 space-y-1 sm:space-y-0">
              <span className="mr-0 sm:mr-4">📍 Bengaluru, India</span>
              <span>🎓 Class of 2015</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start mt-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm mr-2">
                Python
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start mt-4 space-x-4 px-44">
          <button className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Connect
          </button>
          <button className="border border-customBlue text-customBlue px-4 py-2 rounded-md hover:bg-blue-100" 
          onClick={() => navigate("/john/profile")}>
            View Profile
          </button>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-700 text-white text-center py-6 mt-6 mx-auto max-w-7xl rounded-lg my-10">
        <h2 className="text-lg sm:text-xl font-bold">
          Don’t Miss Out on Building Connections!
        </h2>
        <button className="bg-customBlue hover:bg-blue-700 text-white px-6 py-2 mt-4 rounded-md font-semibold">
          Update Your Profile
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AlumniDirectory;
