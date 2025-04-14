import React, { useState } from "react";

import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign In");
  return (
    <div className="flex justify-between items-center shadow-xl p-2 bg-pink-100">
      <div className="w-24 m-4">
        <img className="w-full" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav ">
        <ul className="flex space-x-3 items-center p-2 m-1 ">
          <li>{useOnlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li>CART</li>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              btnName === "Sign In"
                ? setbtnName("Sign Out")
                : setbtnName("Sign In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
