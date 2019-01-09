import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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
            <div className="notifications">
              <i className="fa fa-bell" />
            </div>
            <div className="music">
              <i className="fa fa-music" />
            </div>
          </div>
          <div className="grid-item item4">
            <div className="nav-profile" id="nav-profile">
              <div className="nav-profile-name">Ulan</div>
              <img
                src="https://pp.userapi.com/c851216/v851216536/7e424/YEfQL43SS_o.jpg?ava=1"
                alt="Profile avatar"
                className="nav-profile-img"
              />
              <div className="nav-profile-arrow">
                <i className="fa fa-caret-down arrow-opacity" />
              </div>
            </div>
            <div className="nav-profile-menu">
              <Link className="nav-profile-menu_links" to="/mypage">Моя страница</Link>
              <div className="nav-profile-sep"></div>
              <Link className="nav-profile-menu_links" to="/edit">Редактировать</Link>
              <Link className="nav-profile-menu_links" to="/settings">Настройки</Link>
              <Link className="nav-profile-menu_links" to="/support">Помощь</Link>
              <div className="nav-profile-sep"></div>
              <Link className="nav-profile-menu_links" to="/exit">Выход</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
