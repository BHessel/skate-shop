import React from "react";
import Carousel from "./Carousel";
import NewArrivals from "./NewArrivals";
import Shop from "./Shop";
import Team from "./Team";
import Newsletter from "./Newsletter";
import Location from "./Location";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className=""></div>
      <NewArrivals />
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
        <Location />
      </div>
      <div className="flex flex-row justify-around mt-10 w-full h-80 bg-black bg-opacity-90 p-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
