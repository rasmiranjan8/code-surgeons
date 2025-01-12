import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

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
  {
    name: "Alice Johnson",
    position: "UX Designer at Adobe",
    location: "Austin, TX",
    experience: "5 years experience",
    skills: ["UI/UX Design", "Figma", "Prototyping"],
    rating: 4.7,
  },
  {
    name: "Michael Brown",
    position: "Project Manager at Amazon",
    location: "New York, NY",
    experience: "10 years experience",
    skills: ["Project Management", "Agile", "Scrum"],
    rating: 4.6,
  },
  {
    name: "Emily Davis",
    position: "Biomedical Researcher at Pfizer",
    location: "Boston, MA",
    experience: "7 years experience",
    skills: ["Clinical Research", "Data Analysis", "Molecular Biology"],
    rating: 4.8,
  },
  {
    name: "Robert Wilson",
    position: "Mechanical Engineer at Tesla",
    location: "Palo Alto, CA",
    experience: "9 years experience",
    skills: ["AutoCAD", "SolidWorks", "Quality Control"],
    rating: 4.7,
  },
  {
    name: "Sophia Martinez",
    position: "Marketing Specialist at HubSpot",
    location: "Denver, CO",
    experience: "4 years experience",
    skills: ["SEO", "Content Marketing", "Social Media Strategy"],
    rating: 4.9,
  },
  {
    name: "David Clark",
    position: "Cybersecurity Consultant at IBM",
    location: "Washington, D.C.",
    experience: "12 years experience",
    skills: ["Network Security", "Ethical Hacking", "Risk Management"],
    rating: 4.5,
  },
  {
    name: "Laura Gonzalez",
    position: "Legal Advisor at Baker McKenzie",
    location: "Miami, FL",
    experience: "15 years experience",
    skills: ["Corporate Law", "Contract Drafting", "Compliance"],
    rating: 4.6,
  },
  {
    name: "Kevin Lee",
    position: "Entrepreneur & Founder of FoodTech Inc.",
    location: "Chicago, IL",
    experience: "8 years experience",
    skills: ["Entrepreneurship", "Strategic Planning", "Team Leadership"],
    rating: 4.8,
  },
];

const getRecentGraduationYears = (numYears) => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: numYears }, (_, i) => currentYear - i);
};

const MentorshipPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all-industries");
  const [selectedYear, setSelectedYear] = useState("all-years");
  const [selectedSkill, setSelectedSkill] = useState("all-skills");

  const [visibleCards, setVisibleCards] = useState([]);

  const graduationYears = getRecentGraduationYears(15);

  // Filter Function
  const filteredMentors = mentors.filter((mentor) => {
    const matchesIndustry =
      selectedIndustry === "all-industries" ||
      mentor.position
        .toLowerCase()
        .includes(selectedIndustry.replace("-", " "));
    const matchesYear =
      selectedYear === "all-years" || mentor.experience.includes(selectedYear);
    const matchesSkill =
      selectedSkill === "all-skills" ||
      mentor.skills.some((skill) =>
        skill.toLowerCase().includes(selectedSkill.replace("-", " "))
      );
    return matchesIndustry && matchesYear && matchesSkill;
  });

  useEffect(() => {
    // Animate the cards on page load
    filteredMentors.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200); // Add a 200ms delay per card
    });
  }, [filteredMentors]);

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
        <button className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800">
          Login/Signup
        </button>
      </header>

      {/* Filters */}
      <section className="bg-white shadow-md p-6 rounded-lg mx-4 md:mx-20 mt-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            className="border rounded-lg px-4 py-2 text-gray-700"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option value="all-industries">All Industries</option>
            <option value="software-engineer">Software Development</option>
            <option value="data-scientist">Data Science</option>
            <option value="ui-ux-design">Design</option>
            <option value="project-manager">Project Management</option>
            <option value="biomedical-researcher">Healthcare</option>
            <option value="mechanical-engineer">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="legal">Legal</option>
            <option value="entrepreneurship">Entrepreneurship</option>
          </select>
          <select
            className="border rounded-lg px-4 py-2 text-gray-700"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all-years">Graduation Year</option>
            {graduationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            className="border rounded-lg px-4 py-2 text-gray-700"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="all-skills">All Skills</option>
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
      </section>

      {/* Mentors List */}
      <section className="mt-8 mx-4 md:mx-20">
        {filteredMentors.map((mentor, index) => (
          <div
            key={index}
            className={`bg-white shadow-md p-6 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center justify-between transition-opacity transform duration-500 ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
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
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">
                Request Mentorship
              </button>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default MentorshipPage;
