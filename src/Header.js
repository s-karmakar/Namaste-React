import React, { useState } from "react";

import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign In");
  return (
    <div className="flex justify-between items-center shadow-lg bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="w-28 m-4 hover:scale-105 transition-transform duration-300 hover:rotate-3">
        <img
          className="w-full rounded-lg brightness-150 contrast-75 hover:brightness-200 hover:contrast-100 transition-all duration-300"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav">
        <ul className="flex space-x-8 items-center p-4 m-2 text-lg font-medium">
          <li className="text-green-400 animate-pulse">
            {useOnlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110"
            >
              Home
            </Link>
            z
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110"
            >
              Contact Us
            </Link>
          </li>
          <li className="text-white hover:text-orange-300 transition-all duration-300 hover:scale-110 cursor-pointer">
            CART
          </li>
          <button
            className="px-6 py-2 bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white rounded-full hover:from-orange-600/90 hover:to-amber-600/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
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
