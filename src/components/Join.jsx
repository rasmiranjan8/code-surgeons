import { useState } from "react";
import StudentSignup from "../pages/StudentSignup";
import AlumniSignup from "../pages/AlumniSignup";

const Join = () => {
  const [isStudentSignupModalOpen, setStudentSignupModalOpen] = useState(false);
  const [isAlumniSignupModalOpen, setAlumniSignupModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const handleStudentOpenModal = () => setStudentSignupModalOpen(true);
  const handleStudentCloseModal = () => setStudentSignupModalOpen(false);
  const handleAlumniOpenModal = () => setAlumniSignupModalOpen(true);
  const handleAlumniCloseModal = () => setAlumniSignupModalOpen(false);
  const handleSignupOpenModal = () => setSignupModalOpen(!isSignupModalOpen);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        id="alumni-network"
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(/CTA_Section_Image.png)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
            Join the BIT Sindri’s Alumni Network Today!
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Connect with fellow alumni and unlock valuable mentorship and career
            opportunities today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleSignupOpenModal}
              className="bg-customBlue text-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-white"
            >
              {isSignupModalOpen ? "Close" : "Sign Up"}
            </button>
            {isSignupModalOpen && (
              <div className="flex flex-row flex-wrap justify-center gap-4">
                <button
                  onClick={handleStudentOpenModal}
                  className="bg-white text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-200"
                >
                  Signup as Student
                </button>
                <button
                  onClick={handleAlumniOpenModal}
                  className="bg-white text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-200"
                >
                  Signup as Alumni
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <StudentSignup
        isOpen={isStudentSignupModalOpen}
        onClose={handleStudentCloseModal}
      />
      <AlumniSignup
        isOpen={isAlumniSignupModalOpen}
        onClose={handleAlumniCloseModal}
      />
    </div>
  );
};

export default Join;
