import React from "react";
import yutoFace from "../images/yutoVictory.jpeg";
import mcclung from "../images/mcclungHeadshot.jpeg";
import joslin from "../images/joslinHeadshot.jpeg";

const Team = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Meet the Team</h1>
      </div>
      <div className="mt-3 ml-7 flex flex-row justify-around h-80">
        <div className="relative mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          <img className="absolute h-full w-full object-cover" src={yutoFace} alt="" />
          {/* skater face, on hover zoom or opactiy */}
        </div>
        <div className="relative mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          <img className="absolute h-full w-full object-cover" src={mcclung} alt=""/>
        </div>
        <div className="relative mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          <img className="absolute h-full w-full object-cover" src={joslin} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Team;
