import React from "react";
import AudioContent from "./audioContent";
import "./css/currentPlaylist.css";

const CurrentPlaylist = () => {
  return (
    <div id="currentPlaylist" className="grid-item_current_playlist_section">
      <div className="current_playlist-audio_lists">
        <AudioContent />
        <AudioContent />
        <AudioContent />
        <AudioContent />
      </div>
    </div>
  );
};

export default CurrentPlaylist;
