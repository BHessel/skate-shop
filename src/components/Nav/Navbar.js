import React, { Fragment } from "react";
import svgLogo from "../../images/localSkateShopLogo.svg";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
// import cartSVG from "../../images/shoppingCartSVG.svg";
// import person from "../../images/person.svg";
import { navBarItems } from "./NavData";


const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-3">
      <Link to="/">
        <img src={svgLogo} className="h-[125px]" alt="logo" />
      </Link>

      <ul className="flex items-center">
        {navBarItems.map((item, index) => {
          return <NavItems item={item} key={index} />;
        })}
      </ul>

      {/* conditionally render Welcome back, name! (if logged in)*/}
      {/* <div className="flex">
        <Link to="signup">
          <img src={person} className="w-[32px] h-[25px]" alt="person" />
        </Link>
        <img src={cartSVG} className="w-[32px] h-[25px]" alt="cartSVG" />
      </div> */}
    </div>
  );
};

export default Navbar;
