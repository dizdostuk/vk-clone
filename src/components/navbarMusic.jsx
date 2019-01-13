import React from "react";
import UiTabs from "./common/navbarMusic/uiTabs";
import MyMusicTab from "./common/navbarMusic/myMusicTab";
import UiSearch from "./common/navbarMusic/uiSearch";
import CurrentPlayer from "./common/navbarMusic/currentPlayer";
import "./css/navbarMusic.css";
import CurrentPlaylist from "./common/navbarMusic/currentPlaylist";
import Playlists from "./common/navbarMusic/playlists";

const NavbarMusic = () => {
  return (
    <div className="music">
      <div className="nav-notify_icon">
        <i className="fa fa-music" />
      </div>
      <div className="nav-music-wrap">
        <CurrentPlayer />

        <div className="nav-music-content-block">
          <div className="nav-music-content-block_grid">
            <UiSearch />
            <UiTabs />
            <CurrentPlaylist />
            <MyMusicTab />
            <Playlists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMusic;
