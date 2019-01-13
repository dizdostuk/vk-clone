import React from "react";
import { Link } from "react-router-dom";
import "./css/currentPlayer.css";

const CurrentPlayer = () => {
  return (
    <div className="nav-music-current-player">
      <button>
        <i className="fa fa-play" />
      </button>
      <button>
        <i className="fa fa-fast-backward prev-next" />
      </button>
      <button>
        <i className="fa fa-fast-forward prev-next" />
      </button>
      <div
        className="nav-music-current-player_music_cover"
        style={{
          backgroundImage:
            "url(https://pp.userapi.com/c639122/v639122564/611b3/yPI44uKBD-k.jpg)",
          backgroundSize: "cover"
        }}
      />
      <div className="nav-music-current-player_track_wrap">
        <div className="nav-music-current-player_track">
          <div className="nav-music-current-player_track_info">
            <div className="nav-music-current-player_track_song_title">
              <span>Северное сияние</span>
            </div>
            <div className="nav-music-current-player_track_song_performer">
              <Link to="">Иван Дорн</Link>
            </div>
          </div>
          <div className="nav-music-current-player_track_duration">0:17</div>
        </div>

        <div className="nav-music-current-player_track_volume">
          <div className="volume_slider-slide">
            <div className="volume_slider-slide_amount" />
            <div className="volume_slider-slide_handler" />
          </div>
        </div>

        <div className="nav-music-current-player_track_slider">
          <div className="track_slider-slide">
            <div className="track_slider-slide_amount" />
            <div className="track_slider-slide_handler" />
          </div>
        </div>
      </div>

      <div className="nav-music-current-player_buttons">
        <button>
          <i className="i fa fa-plus" />
        </button>
        <button>
          <i className="fa fa-random" />
        </button>
        <button>
          <i className="fa fa-repeat" />
        </button>
        <button>
          <i className="fa fa-signal" />
        </button>
        <button>
          <i className="fa fa-magic" />
        </button>
        <button>
          <i className="fa fa-share" />
        </button>
      </div>
    </div>
  );
};

export default CurrentPlayer;
