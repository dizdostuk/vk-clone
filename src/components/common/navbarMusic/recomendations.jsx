import React from "react";
import AudioContent from "./audioContent";
import "./css/recomendations.css";

const Recomendations = () => {
  return (
    <div id="recomendations" className="grid-item_current_playlist_section tabItem">
      <div className="current_playlist-audio_lists">
        <AudioContent />
        <AudioContent />
        <AudioContent />
        <AudioContent />
      </div>
    </div>
  );
};

export default Recomendations;
