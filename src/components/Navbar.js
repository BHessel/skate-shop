import React from "react";
import logo from "../images/localSkateShopLogo.jpeg";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import cartSVG from "../images/shoppingCartSVG.svg";
//left side will have logo
//middle will have ul/li list
//right corner is createAccount/signin link plus cart

const Navbar = () => {
  const navBarItems = [
    { title: "Skateboards", route: "/skateboards" },
    { title: "Shoes", route: "/shoes" },
    { title: "Accessories", route: "/accessories" },
    { title: "Local", route: "/local" },
  ];

  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul>
          {navBarItems.map((item, index) => {
            return <NavItems items={item} key={index} />;
          })}
        </ul>
      </div>
      <div>
        <Link to="signup">Create Account</Link>
      </div>
      {/*conditionally render Welcome back, name! (if logged in)*/}
      <div>
        <img src={cartSVG} alt="cartSVG"/>
      </div>
    </nav>
  );
};

export default Navbar;
