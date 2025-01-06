import React from "react";

const AlumniReunion = () => {
  const reunions = [
    {
      title: "Golden Jubilee Reunion",
      year: 1975,
      badge: "50",
      color: "bg-yellow-400",
    },
    {
      title: "Silver Jubilee Reunion",
      year: 2000,
      badge: "25",
      color: "bg-gray-400",
    },
    {
      title: "Ruby Reunion",
      year: 1985,
      badge: "40",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        BIT Sindri Alumni Reunions
      </h1>
      <div className="flex flex-row justify-between space-x-16 w-full max-w-5xl px-6">
        {reunions.map((reunion, index) => (
          <div
            key={index}
            className="flex flex-row items-center bg-white h-[300px] w-[300px] shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <div
              className={`w-[250px] h-[250px] flex flex-col items-center justify-center rounded-full text-white text-3xl font-bold ${reunion.color}`}
            >
              <div className="relative w-[200px] h-[100px] ml-[170px] mb-12">
                {/* Half-Circular Text */}
                {reunion.title.split("").map((char, i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      transformOrigin: "50% 300%", // Adjust to create a half-circle
                      transform: `rotate(${
                        i * (180 / (reunion.title.length - 1)) - 90
                      }deg)`,
                      fontSize: "1.5rem",
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div
                className={`text-4lg font-semibold bg-transparent  mt-4`}
              >
                {reunion.badge}
              </div>
              <div className="text-white mt-2">{reunion.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniReunion;
