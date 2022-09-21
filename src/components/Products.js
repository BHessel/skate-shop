import React from "react";

const PLACEHOLDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Products = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold ml-3 mb-4">Product Type Goes Here</h1>
      </div>
      <div className="flex">
        <div className="border-black border-r-4">
          Sidebar with filters goes here
        </div>
        <div className="w-4/5 h-40 grid grid-cols-3 gap-4 mx-4">
          {PLACEHOLDER.map((num) => (
            <div className="relative flex justify-center items-center border border-blue-600">
              {num}
              {/* <img className="absolute h-full w-full object-cover rounded-md" src={photo} alt="" /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
