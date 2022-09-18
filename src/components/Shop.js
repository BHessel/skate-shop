import React from "react";
import decks from "../images/shopImages/deckCover.jpeg";
import wheels from "../images/shopImages/wheelCover.jpeg";
import trucks from "../images/shopImages/indyTruckCover.jpeg";

const photos = [decks, wheels, trucks];

const Shop = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Shop</h1>
      </div>
      <div className="mt-3 mx-14 h-80 border bg-blue-700 grid grid-cols-4 gap-2">
        {/* <div className="grid-cols-3"> */}
        {photos.map((photo) => (
          <div className="relative border border-gray-300">
            <img className="absolute h-full w-full object-cover" src={photo} alt="" />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Shop;

//.video-container {
//     display: grid;
//     grid-gap: 40px;
//     width: 100vw;
//     grid-template-columns: repeat(3, 1fr);
//     padding: 50px;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//       rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
//       rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
//   }

//   .main-grid {
//     display: grid;
//     grid-template-rows: 180px;
//     width: 100vw;
//   }

//   .body-container {
//     grid-row: 2/3;
//     width: 100vw;
//     height: 100vh;
//   }
