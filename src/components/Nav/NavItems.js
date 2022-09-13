import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const NavItems = (props) => {
  const { items } = props;
// console.log(items)
  return (
    //I could change these links to a button w/ link. Might be easier for styling?
    // <>
      <li>
        {items.dropdown ? (
          <>
            <Link to={items.route}>
              <button className="px-4 border border-red-800" type="button" aria-haspopup="menu">
                {items.title}
              </button>
            </Link>
            <Dropdown dropdownList={items.dropdown} />
          </>
        ) : (
          <Link to={items.route}>
            <button className="px-4">{items.title}</button>
          </Link>
        )}
      </li>
    // </>
  );
};

export default NavItems;
