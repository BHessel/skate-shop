import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl text-gray-200 pb-3">
        Join the Commnuity
      </h1>
      <p className="p-2 text-gray-200">
        Subscribe for special discounts, local events & more!
      </p>
      <div className="flex justify-center">
        <form className="p-3">
          <input className="p-3 w-80" type="text" placeholder="Email" />
          <button
            className="p-3 bg-blue-600 text-center text-white"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
