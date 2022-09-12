import React from "react";
import { Link } from "react-router-dom";

const NavItems = (props) => {
  const { items } = props;

  return (
    //I could change these links to a button w/ link. Might be easier for styling?
    <>
      <Link to={items.route}>
        <li className="px-4">{items.title}</li>
      </Link>
    </>
  );
};

export default NavItems;
