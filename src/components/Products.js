import React from "react";
import { Link } from "react-router-dom";
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
import Sidebar from "./Sidebar";

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
      {/* this img comes from CSS's page, placeholder, don't copy directly */}
      <div className="h-40 mt-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0519/1388/3831/files/CAT-DT-skateboards22_1296x.jpg?v=1654538861"
          alt=""
        />
        <h1 className="text-white">Skateboards</h1>
      </div>
      <div className="flex h-screen mt-20">
        <Sidebar />
        <div className="w-4/5 h-max grid grid-cols-3 gap-4 p-4">
          {PLACEHOLDER.map((num) => (
            <div className="flex flex-col hover:scale-110 ease-in duration-200">
              <div className="relative flex justify-center items-center h-48">
                <img
                  className="absolute h-full w-full object-contain"
                  src={num}
                  alt=""
                />
              </div>
              <p className="text-center font-semibold mt-2">
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
