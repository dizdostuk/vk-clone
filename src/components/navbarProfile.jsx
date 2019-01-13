import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/navbarProfile.css";

class NavbarProfile extends Component {
  state = {
    isOpacity: false
  }

  changeOpacity = () => {
    this.setState({isOpacity: !this.state.isOpacity});
  }
  render() {
    return (
      <React.Fragment>
        <div onClick={this.changeOpacity} className="nav-profile" id="nav-profile">
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
        <div className={this.state.isOpacity ? "nav-profile-menu visibleOn" : "nav-profile-menu"}>
          <i className="fa fa-caret-up" />
          <Link className="nav-profile-menu_links" to="">
            Моя страница
          </Link>
          <div className="nav-profile-sep" />
          <Link className="nav-profile-menu_links" to="">
            Редактировать
          </Link>
          <Link className="nav-profile-menu_links" to="">
            Настройки
          </Link>
          <Link className="nav-profile-menu_links" to="">
            Помощь
          </Link>
          <div className="nav-profile-sep" />
          <Link className="nav-profile-menu_links" to="">
            Выход
          </Link>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default NavbarProfile;
