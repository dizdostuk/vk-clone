import React from "react";
import { Link } from "react-router-dom";
import "./css/playlistItem.css";

const PlaylistItem = () => {
  return (
    <div className="playlist_item">
      <Link className="playlist_cover" to="">
        <div className="playlist_actions_wrap">
          <div className="playlist_actions_buttons">
            <button className="playlist_actions_button">
              <i className="fa fa-pencil" />
            </button>
            <button className="playlist_actions_button">
              <i className="fa fa-caret-right" />
            </button>
            <button className="playlist_actions_button">
              <i className="fa fa-share" />
            </button>
          </div>
          <div className="playlist_cover_status">
            <div className="playlist_cover_status_count">
              <i className="fa fa-list" />
              <span className="playlist_count">6</span>
            </div>
            <div className="playlist_cover_status_listens">
              <i className="fa fa-headphones" />
              <span className="playlist_listen_count">6</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="playlist_info">
        <div className="playlist_info_title">
          <Link className="playlist_info_link" to="">
            Purpose
          </Link>
        </div>
        <div className="playlist_info_subtitle">
          <Link className="playlist_info_link" to="">
            Ulan Zhusupov
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
