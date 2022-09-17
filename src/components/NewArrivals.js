import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">New Arrivals</h1>
      </div>
      <div className="mt-3 ml-7 flex flex-row justify-around h-80">
        <div className="mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          item1
        </div>
        <div className="mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          item2
        </div>
        <div className="mr-7 flex justify-center items-center w-1/3 border border-blue-700">
          item3
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
