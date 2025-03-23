import React, { useState } from "react";

import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign In");
  return (
    <div className="header ">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav">
        <ul>
          <li>{useOnlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>CART</li>
          <button
            className="signIn-btn"
            onClick={() => {
              btnName === "Sign In"
                ? setbtnName("Sign Out")
                : setbtnName("Sign In");

              console.log(btnName);
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
