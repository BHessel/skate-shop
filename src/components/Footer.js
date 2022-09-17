import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <h3 className="text-md text-white border-b-2">Info</h3>
        <div className="text-gray-300 py-2">
          <p>Contact us</p>
          <p>Hours & Location</p>
          <p>Blog & News</p>
          <p>Returns & Exchanges</p>
          <p>About Us</p>
          <p>Jobs</p>
        </div>
      </div>
      <div>
        <h3 className="text-md text-white border-b-2">Store</h3>
        <div className="text-gray-300 py-2">
          <p>Decks</p>
          <p>Parts</p>
          <p>Threads</p>
          <p>Gift Cards</p>
        </div>
      </div>
      <div>
        <h3 className="text-md text-white border-b-2">Social</h3>
        <div className="text-gray-300 py-2">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
      </div>
      <div>
        <h3 className="text-md text-white border-b-2">Newsletter Form</h3>
      </div>
    </>
  );
};

export default Footer;
