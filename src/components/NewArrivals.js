import React from "react";
import joslin from "../images/joslin-ALF.jpeg";
import mcCode from "../images/mcclung-code.jpeg";
import vans from "../images/vansShoeCover.webp";

const NewArrivals = () => {
  return (
    <div className="w-full mt-14">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">New Arrivals</h1>
      </div>
      <div className="mt-3 ml-7 flex flex-row justify-around h-80">
        <div className="relative mr-7 flex justify-center items-center w-1/3">
          <img
            className="absolute h-full w-full object-contain"
            src={joslin}
            alt=""
          />
          {/* skater face, on hover zoom or opactiy */}
        </div>
        <div className="relative mr-7 flex justify-center items-center w-1/3">
          <img
            className="absolute h-full w-full object-contain"
            src={vans}
            alt=""
          />
        </div>
        <div className="relative mr-7 flex justify-center items-center w-1/3">
          <img
            className="absolute h-full w-full object-contain"
            src={mcCode}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
