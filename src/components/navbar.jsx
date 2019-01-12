import React from "react";
//import { Link } from "react-router-dom";
import "./css/navbar.css";
import Notifications from "./notifications";
import NavbarMusic from "./navbarMusic";
import NavbarProfile from "./navbarProfile";

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar-layout">
        <div className="grid">
          <div className="grid-item">
            <div className="logo" />
          </div>
          <div className="grid-item">
            <div className="search">
              <input
                type="text"
                placeholder="Поиск"
                className="text-head-input"
              />
            </div>
          </div>
          <div className="grid-item grid-notify-music">
            <Notifications />
            <NavbarMusic />
          </div>
          <div className="grid-item item4">
            <NavbarProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
