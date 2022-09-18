import React from "react";
import Carousel from "./Carousel";
import NewArrivals from "./NewArrivals";
import Shop from "./Shop";
import Team from "./Team";
import Newsletter from "./Newsletter";
import Maps from "./Maps/Maps";
import Footer from "./Footer";

// const location = {
//   address: "17010 S 48th St, Phoenix, AZ 85048",
//   lat: 33.29142,
//   lng: -111.97979,
// };

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="">
        <NewArrivals />
      </div>
      <div>
        <Shop />
      </div>
      <div>
        <Team />
      </div>
      <div className="flex justify-center mt-10 w-full h-64 bg-gray-700">
        <Newsletter />
      </div>
      <div className="flex justify-center mt-10">
        <Maps />
      </div>
      <div className="flex flex-row justify-around mt-10 w-full h-80 bg-black bg-opacity-90 p-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
