import React from "react";
import logo from "../../images/localSkateShopLogo.jpeg";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import cartSVG from "../../images/shoppingCartSVG.svg";
import person from "../../images/person.svg";
import { navBarItems } from "./NavData";
//left side will have logo
//middle will have ul/li list
//right corner is createAccount/signin link plus cart

const Navbar = () => {

  return (
    <nav className="w-full flex justify-between items-center px-8 py-3">
      <Link to="/">
        <img src={logo} className="h-[125px]" alt="logo" />
      </Link>
      <ul className="flex">
        {navBarItems.map((item, index) => {
          return <NavItems items={item} key={index} />;
        })}
      </ul>
      {/*conditionally render Welcome back, name! (if logged in)*/}
      <div className="flex">
        <Link to="signup">
          <img src={person} className="w-[32px] h-[25px]" alt="person" />
        </Link>
        <img src={cartSVG} className="w-[32px] h-[25px]" alt="cartSVG" />
      </div>
    </nav>
  );
};

export default Navbar;
