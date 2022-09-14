import React, { Fragment } from "react";
import logo from "../../images/localSkateShopLogo.jpeg";
// import NavItems from "./NavItems";
import { Link } from "react-router-dom";
// import cartSVG from "../../images/shoppingCartSVG.svg";
// import person from "../../images/person.svg";
import { navBarItems } from "./NavData";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { isElementOfType } from "react-dom/test-utils";

//left side will have logo
//middle will have ul/li list
//right corner is createAccount/signin link plus cart
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-3">
      <Link to="/">
        <img src={logo} className="h-[125px]" alt="logo" />
      </Link>

      <ul className="flex items-center">
        {/* {navBarItems.map((item, index) => { */}
        {/* return <NavItems items={item} key={index} />; */}
        {/* })} */}
        {/* <li className="p-4"> */}
{navBarItems.map((item, index) => {
 {/* this could (should?) return a component */}
 return <li className="p-4"> 
 <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              {item.title}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
              {item.dropdown.map((subMenu, index) => {
                
                return <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {subMenu.title}
                      {/* this should return another component? */}
                      {/* or just map through item.dropdown and if item.title return item.dropdown.title */}
                    </a>
                  )}
                </Menu.Item>
              })}
               
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

 </li>
})}

        
      </ul>
      {/*conditionally render Welcome back, name! (if logged in)*/}

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
