import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import skater from "../images/flip-unsplash.jpg";
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
    <div className="w-11/12 select-none relative">
      {/* <div className=""> */}
        <img className="" src={carouselImages[currentIndex]} alt="carousel" />
      {/* </div> */}

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
