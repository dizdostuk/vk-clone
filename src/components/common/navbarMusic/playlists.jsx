import React from "react";
import PlaylistItem from "./playlistItem";
import "./css/playlists.css";

const Playlists = () => {
  return (
    <div id="playlists" className="grid-item_playlist_section tabItem">
      <div className="playlist_section_wrap">
        <div className="playlist_section_header">
          <span className="playlist_count">2</span> плейлиста
        </div>

        <div className="playlist_section_grid_playlists">
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
        </div>
      </div>
    </div>
  );
};

export default Playlists;
