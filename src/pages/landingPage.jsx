import React from "react";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Join from "../components/join";
import Footer from "../components/Footer";
import Mentorship from "../components/Mentorship";
import CareerSupport from "../components/CareerSupport";
import AlumniReunion from "../components/AlumniReunion";

const LandingPage = () => {
  const sliderImages = [
    "/Hero_Section_Image.png",
    "/Hero_Section_Image.png",
    "/Hero_Section_Image.png",
    "/Hero_Section_Image.png",
    "/Hero_Section_Image.png",
    
  ];

  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <ImageSlider sliderImages={sliderImages} />
        <Mentorship />
        <CareerSupport />
        <AlumniReunion />
        <Join />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
