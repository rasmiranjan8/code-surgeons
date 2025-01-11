import React from "react";

const feedbackData = [
  {
    quote:
      "The career guidance sessions helped me transition from academia to a corporate role seamlessly. The resources and advice I received from experienced alumni were invaluable.",
    name: "Amit Kumar",
    designation: "Software Engineer, Google",
    batch: "Batch of 2018",
  },
  {
    quote:
      "The mentorship program exceeded my expectations. My mentor provided both technical and career advice that was pivotal in my personal growth.",
    name: "Surbhi Jain",
    designation: "Product Manager, Amazon",
    batch: "Batch of 2017",
  },
  {
    quote:
      "Reconnecting with my batchmates and networking with other alumni has opened up so many opportunities for me. The directory is a fantastic tool!",
    name: "Arjun Mehta",
    designation: "Entrepreneur",
    batch: "Batch of 2010",
  },
];

const Feedback = () => {
  return (
    <section className="bg-gradient-to-b from-blue-700 to-blue-900 py-12 px-4 md:px-8">
      <div className="text-center text-white mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">
          Empowered Journeys, Shared Stories
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <p className="italic mb-4">"{feedback.quote}"</p>
            <div className="text-sm font-medium">
              <p>{feedback.name}</p>
              <p>{feedback.designation}</p>
              <p>{feedback.batch}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
