import React from "react";
import { FaUsers, FaBook, FaChalkboardTeacher } from "react-icons/fa";

const statistics = [
  {
    icon: <FaUsers size={50} className="text-white" />,
    number: "1000+",
    title: "Alumni Members",
  },
  {
    icon: <FaBook size={50} className="text-white" />,
    number: "Exclusive",
    title: "Career Guidance Resources",
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-white" />,
    number: "500+",
    title: "Successful Mentorships",
  },
];

const AlumniStatistics = () => {
  return (
    <section className="bg-darkblue py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col space-y-4 items-center">
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-white text-3xl font-bold mb-2">
              {stat.number}
            </h3>
            <p className="text-white text-lg">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlumniStatistics;
