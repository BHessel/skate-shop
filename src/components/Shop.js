import React from "react";

const fakeNum = [1, 2, 3, 4, 5, 6, 7, 8];

const Shop = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Shop</h1>
      </div>
      <div className="mt-3 mx-12 h-80 border bg-blue-700 grid-cols-5 grid-rows-3">
        <div className="flex flex-wrap">{fakeNum.map((num) => <div>{num}</div>)}</div>
      </div>
    </div>
  );
};

export default Shop;
