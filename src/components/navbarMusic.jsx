import React, { Component } from "react";
import UiTabs from "./common/navbarMusic/uiTabs";
import UiSearch from "./common/navbarMusic/uiSearch";
import CurrentPlayer from "./common/navbarMusic/currentPlayer";
import "./css/navbarMusic.css";

class NavbarMusic extends Component {
  state = {
    isOpacity: false
  }
  changeOpacity = () => {
    this.setState({isOpacity: !this.state.isOpacity})
  }
  render() {
    return (
      <div className="music">
        <div onClick={this.changeOpacity} className="nav-notify_icon">
          <i className="fa fa-music" />
        </div>
        <div className={this.state.isOpacity ? "nav-music-wrap opacityOn" : "nav-music-wrap"}>
          <i className="fa fa-caret-up" />
          <CurrentPlayer />

          <div className="nav-music-content-block">
            <div className="nav-music-content-block_grid">
              <UiSearch />
              <UiTabs />
                  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMusic;
