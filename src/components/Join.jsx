const Join = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(/CTA_Section_Image.png)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Join the BIT Sindri Network
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Connect with fellow alumni and unlock valuable mentorship and career
            opportunities today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
