import React from "react";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Join from "../components/join";
import Footer from "../components/Footer";
import Mentorship from "../components/Mentorship";
import CareerSupport from "../components/CareerSupport";

import Feedback from "../components/Feedback";
import AlumniStatistics from "../components/AlumniStatistics";

const LandingPage = () => {
  const sliderImages = [
    "/image3.jpg",
    "/image4.jpg",
    "/image2.jpg",
    "/image1.png",
  ];

  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <ImageSlider sliderImages={sliderImages} />
        <AlumniStatistics />
        <Mentorship />
        <CareerSupport />
        <Feedback />
       
        <Join />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
