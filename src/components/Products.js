import React from "react";
import mcclung from "../images/mcclung-code.jpeg";
import fynn from "../Seeds/EquipmentImages/fynn-ALF.jpeg";
import giraud from "../Seeds/EquipmentImages/giraud-ALF.jpeg";
import giraud2 from "../Seeds/EquipmentImages/giraud-code.jpeg";
import giraud3 from "../Seeds/EquipmentImages/giraud-diagonals.jpeg";
import gustavo from "../Seeds/EquipmentImages/gustavo-ALF.jpeg";
import gustavo2 from "../Seeds/EquipmentImages/gustavo-code.jpeg";
import joslin from "../Seeds/EquipmentImages/joslin-ALF.jpeg";
import joslin2 from "../Seeds/EquipmentImages/joslin-code.jpeg";
import joslin3 from "../Seeds/EquipmentImages/joslin-diagonals.jpeg";
import mcclung2 from "../Seeds/EquipmentImages/mcclung-diagonals.jpeg";

const PLACEHOLDER = [
  mcclung,
  fynn,
  giraud,
  giraud2,
  giraud3,
  gustavo,
  gustavo2,
  joslin,
  joslin2,
  joslin3,
  mcclung2,
];

const Products = () => {
  return (
    <>
      <div className="flex h-screen">
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
        <div className="w-4/5 h-max grid grid-cols-3 gap-4 p-4 border-l-2 border-black">
          {PLACEHOLDER.map((num) => (
            <div className="flex flex-col hover:scale-110 ease-in duration-200">
              <div className="relative flex justify-center items-center drop-shadow-sm h-48">
                {/* {num} */}
                <img
                  className="absolute h-full w-full object-contain"
                  src={num}
                  alt=""
                />
              </div>

              <p className="text-center font-semibold">
                McClung Code Deck - Plan B
              </p>
              <p className="text-center">$59</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
