import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const { dropdownList } = props;
  console.log('list', dropdownList)

  return (
    // <div>
      <ul>
        {dropdownList.map((dropdown, index) => {
          return <Link to={dropdown.route}>
            <li key={index}>
              {dropdown.title}
            </li>
          </Link>;
        })}
      </ul>
    // </div>
  );
};

export default Dropdown;
