import React from "react";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div>
        <h2>New Arrivals</h2>
        {/* cards */}
      </div>
      <div>
        <h2>Shop</h2>
        {/* display grid w/ shop categories */}
      </div>
      <div>
        <h2>Team</h2>
        {/* Cards of team skaters, link to team page */}
      </div>
      <div>Sign up for Newsletter banner?</div>
      <div>
        <h2>Location</h2>
      </div>
      <div>Footer</div>
    </>
  );
};

export default Home;
