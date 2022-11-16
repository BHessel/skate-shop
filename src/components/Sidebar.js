import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/5 pl-5">
      <h2 className="font-semibold mr-auto mb-3 border-b-2">
        Product Type Goes Here
      </h2>
      <div className="flex ml-5">
        <input type="checkbox" className="mr-5" />
        <p>lorem ipsum</p>
      </div>

      <div className="flex ml-5">
        <input type="checkbox" className="mr-5" />
        <p>lorem ipsum</p>
      </div>

      <div className="flex ml-5">
        <input type="checkbox" className="mr-5" />
        <p>lorem ipsum</p>
      </div>
    </div>
  );
};

export default Sidebar;
