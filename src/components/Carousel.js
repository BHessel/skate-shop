import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import skater from "../images/skate-unsplash.jpg";
import sunsetSkate from "../images/sunset-unsplash.jpg";
import teamSkate from "../images/team-unsplash.jpg";

const carouselImages = [skater, sunsetSkate, teamSkate];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let counter = 0;

  const handleNextClick = () => {
    counter = (currentIndex + 1) % carouselImages.length;
    setCurrentIndex(counter);
  };

  const handleBackClick = () => {
    counter =
      (currentIndex + carouselImages.length - 1) % carouselImages.length;
    setCurrentIndex(counter);
  };

  return (
    <div className="w-11/12 h-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img className="" src={carouselImages[currentIndex]} alt="carousel" />
      </div>

      <div className="h-full top-0 left-0 absolute px-3 bg-black opacity-5 hover:opacity-40 flex items-center justify-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-40 hover:bg-opacity-100 transition"
          onClick={handleBackClick}
        >
          X
        </button>
      </div>
      <div className="h-full top-0 right-0 absolute px-3 bg-black opacity-5 hover:opacity-40 flex items-center justify-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-40 hover:bg-opacity-100 transition"
          onClick={handleNextClick}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Carousel;
