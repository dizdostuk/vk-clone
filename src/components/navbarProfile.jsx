import React from "react";
import { Link } from "react-router-dom";
import "./css/navbarProfile.css";

const NavbarProfile = () => {
  return (
    <React.Fragment>
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
        <Link className="nav-profile-menu_links" to="/mypage">
          Моя страница
        </Link>
        <div className="nav-profile-sep" />
        <Link className="nav-profile-menu_links" to="/edit">
          Редактировать
        </Link>
        <Link className="nav-profile-menu_links" to="/settings">
          Настройки
        </Link>
        <Link className="nav-profile-menu_links" to="/support">
          Помощь
        </Link>
        <div className="nav-profile-sep" />
        <Link className="nav-profile-menu_links" to="/exit">
          Выход
        </Link>
      </div>{" "}
    </React.Fragment>
  );
};

export default NavbarProfile;
