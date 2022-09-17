import React from "react";

const Team = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Meet the Team</h1>
      </div>
      <div className="mt-3 ml-7 flex flex-row justify-around h-80">
        <div className="mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          skater face, on hover zoom or opactiy
        </div>
        <div className="mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          skater face button w/ effects to go to their bio
        </div>
        <div className="mr-7 flex justify-center items-center w-1/3 border border-blue-700">
        skater face
        </div>
      </div>
    </div>
  );
};

export default Team;
