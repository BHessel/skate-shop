import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/5 pl-5 border-r-2">
      <h2 className="font-semibold mr-auto mb-3 border-b-2">
        Product Type Goes Here
      </h2>
      <div className="flex flex-col mr-5 cursor-pointer border-b-2">
        {/* each needs to link to respective page */}
        <ul className="mb-10">
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Decks
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Trucks
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Wheels
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Bearings
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Grip Tape
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Shoes
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Hardware
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Wax
          </li>
          <li className="py-2 px-3 border-l-white border-l-4 hover:border-l-blue-500">
            Clothing
          </li>
        </ul>
      </div>

      {/* This part should filter by brand, filter by cost, */}
      <div className="flex flex-col m-2">
        <h2>Brand</h2>
        <div className="flex mt-3">
          <input type="checkbox" className="mx-3" />
          <p>lorem ipsum</p>
        </div>
        <div className="flex mt-3">
          <input type="checkbox" className="mx-3" />
          <p>lorem ipsum</p>
        </div>
        <div className="flex mt-3">
          <input type="checkbox" className="mx-3" />
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
