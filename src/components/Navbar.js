import React from "react";

//left side will have logo
//middle will have ul/li list
//right corner is createAccount/signin link plus cart

const Navbar = () => {
  return (
    <>
      <div>
        <h2>Logo Placeholder</h2>
      </div>
      <div>
        <ul> {/* ul should be menuItems.map.... LI's should actually be on a net component */}
          <li>Skateboards</li> {/*decks, trucks, etc*/}
          <li>Shoes</li> {/*shoes*/}
          <li>Accessories</li> {/*wax, griptape, etc*/}
          <li>Local</li> {/*team, events, etc*/}
        </ul>
      </div>
      <div>Create Account</div> {/*conditionally render Welcome back, name! (if logged in)*/}
      <div>
        {/* {cartImage} */}
      </div>
    </>
  );
};

export default Navbar;
