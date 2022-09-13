import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const { dropdownList } = props;

  return (
    // <div>
      <ul>
        {dropdownList.map((dropdown, index) => {
          return <Link to={dropdown.route}>
            <li className="border border-blue-600" key={index}>
              {dropdown.title}
            </li>
          </Link>;
        })}
      </ul>
    // </div>
  );
};

export default Dropdown;
