import React from "react";
import PlaylistItem from "./playlistItem";
import "./css/playlist.css";

const Playlists = () => {
  return (
    <div className="grid-item_playlist_section">
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
