import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ImageSlider = ({ sliderImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center py-5 rounded-xl ">
      <div className="relative w-full max-w-full md:max-w-[1360px] h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute flex transition-transform h-screen duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full items-center object-fill flex-shrink-0"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  space-y-2">
          <h1 className="text-xl md:text-5xl md:font-bold font-semibold text-white rounded-md w-[80%] sm:w-[90%] md:w-[70%]">
          Empowering Connections, Shaping Futures
          </h1>
          <p className="text-sm md:text-base w-[80%] sm:w-[90%] md:w-[70%] text-white p-2 rounded-md mt-2">
            Welcome to the BIT Sindri Alumni Network, where we bridge the gap
            between alumni and current students. Join us to explore Fostering
            Connections Between BIT Sindri Alumni and Studentsmentorship
            opportunities, career guidance, and a vibrant directory for
            networking.
          </p>
          <button onClick={() => navigate("/alumni-directory")} className=" bg-customBlue text-white px-4 py-2 rounded-md hover:bg-darkblue">
            Connect
          </button>
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-customBlue" : "bg-white/50"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
