import React from "react";
import { Link } from "react-router-dom";
import "./css/audioContent.css";

const AudioContent = () => {
  return (
    <div className="audio_list_content">
      <div
        className="audio_list_music_cover"
        style={{
          backgroundImage:
            "url(https://pp.userapi.com/c639122/v639122564/611b3/yPI44uKBD-k.jpg)",
          backgroundSize: "cover"
        }}
      />
      <div className="audio_list_inner">
        <div className="audio_list__performer_title">
          <div className="audio_list_title">
            <span>Faded Photographs</span>
          </div>
          <div className="audio_list_performer">
            <Link to="">Ed Harcourt</Link>
          </div>
        </div>
      </div>

      <div className="audio_list_info">
        <div className="audio_list_duration">4:17</div>
        <div className="audio_list_actions">
          <button className="audio_action">
            <i className="fa fa-caret-square-right" />
          </button>
          <button className="audio_action">
            <i className="fa fa-times" />
          </button>
          <button className="audio_action">
            <i className="fa fa-ellipsis-h" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioContent;
