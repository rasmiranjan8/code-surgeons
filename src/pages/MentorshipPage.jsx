import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const mentors = [
  {
    name: "John Doe",
    position: "Software Engineer at Google",
    location: "San Francisco, CA",
    experience: "6 years experience",
    skills: ["React", "Node.js", "Cloud Architecture"],
    rating: 4.9,
  },
  {
    name: "Jane Smith",
    position: "Data Scientist at Microsoft",
    location: "Seattle, WA",
    experience: "8 years experience",
    skills: ["Machine Learning", "Python", "Big Data"],
    rating: 4.8,
  },
];

const getRecentGraduationYears = (numYears) => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: numYears }, (_, i) => currentYear - i);
};

const MentorshipPage = () => {
  const graduationYears = getRecentGraduationYears(15);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-950 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/BIT_Sindri_Logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">ALUMNI</h1>
            <p className="text-sm">B.I.T. SINDRI, DHANBAD, JHARKHAND</p>
          </div>
        </div>
        <button className="bg-blue-700 px-4 py-2 rounded-lg">Logout</button>
      </header>

      {/* Filters */}
      <section className="bg-white shadow-md p-6 rounded-lg mx-4 md:mx-20 mt-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Industry Dropdown */}
          <select className="border rounded-lg px-4 py-2 text-gray-700">
            <option value="all-industries">All Industries</option>
            <option value="information-technology">
              Information Technology & Software Development
            </option>
            <option value="healthcare">Healthcare & Pharmaceuticals</option>
            <option value="manufacturing">Manufacturing & Engineering</option>
            <option value="education">Education & Research</option>
            <option value="finance">Finance & Banking</option>
            <option value="entrepreneurship">
              Entrepreneurship & Startups
            </option>
            <option value="marketing">Marketing & Advertising</option>
            <option value="government">Government & Public Policy</option>
            <option value="energy">Energy & Environment</option>
            <option value="legal">Legal & Compliance</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="media">Media & Entertainment</option>
            <option value="hospitality">Hospitality & Tourism</option>
            <option value="non-profit">Non-profit & Social Services</option>
            <option value="others">Others</option>
          </select>

          {/* Graduation Year Dropdown */}
          <select className="border rounded-lg px-4 py-2 text-gray-700">
            <option value="all-years">Graduation Year</option>
            {graduationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Skills Dropdown */}
          <select className="border rounded-lg px-4 py-2 text-gray-700">
            <option value="all-skills">All Skills</option>
            <optgroup label="Programming Skills">
              <option value="programming">
                Programming Languages (e.g., Python, Java, C++)
              </option>
              <option value="data-analysis">
                Data Analysis & Visualization (e.g., Excel, Tableau, Power BI)
              </option>
              <option value="cloud-computing">
                Cloud Computing (e.g., AWS, Azure, Google Cloud)
              </option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="ai-ml">
                Artificial Intelligence & Machine Learning
              </option>
              <option value="software-development">
                Software Development & Testing
              </option>
              <option value="web-development">
                Web Development (e.g., React, Angular, HTML/CSS)
              </option>
              <option value="network-admin">Network Administration</option>
              <option value="cad-engineering">
                CAD & Engineering Design Tools
              </option>
              <option value="blockchain">Blockchain Development</option>
            </optgroup>
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
            <optgroup label="Business Skills">
              <option value="project-management">
                Project Management (e.g., Agile, Scrum)
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
            <optgroup label="Creative Skills">
              <option value="graphic-design">
                Graphic Design (e.g., Adobe Photoshop, Illustrator)
              </option>
              <option value="video-editing">
                Video Editing (e.g., Premiere Pro, Final Cut Pro)
              </option>
              <option value="ui-ux-design">
                UI/UX Design (e.g., Figma, Sketch)
              </option>
              <option value="content-creation">
                Content Creation & Copywriting
              </option>
              <option value="photography">Photography & Videography</option>
            </optgroup>
            <optgroup label="Industry-Specific Skills">
              <option value="healthcare">
                Healthcare (e.g., Clinical Research, Patient Care)
              </option>
              <option value="manufacturing">
                Manufacturing (e.g., Quality Control, Lean Manufacturing)
              </option>
              <option value="education">
                Education (e.g., Curriculum Design, Instructional Techniques)
              </option>
              <option value="legal">
                Legal (e.g., Contract Drafting, Compliance)
              </option>
              <option value="energy">
                Energy & Environment (e.g., Renewable Energy Systems)
              </option>
            </optgroup>
            <option value="others">Others</option>
          </select>
        </div>
      </section>

      {/* Mentors List */}
      <section className="mt-8 mx-4 md:mx-20">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.position}</p>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <p>{mentor.location}</p>
              </div>
              <p className="text-gray-600">{mentor.experience}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {mentor.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
              <div className="flex items-center text-yellow-500 mb-2">
                <FaStar />
                <span className="ml-1 text-lg font-semibold">
                  {mentor.rating}
                </span>
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
                Request Mentorship
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MentorshipPage;
