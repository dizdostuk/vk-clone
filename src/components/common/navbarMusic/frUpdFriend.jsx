import React from "react";
import { Link } from "react-router-dom";
import AudioContent from "./audioContent";


const FriendMusicUpdates = () => {
  return (
    <div className="friend_updates_friend_grid">
      <Link className="audio_feed_ava" to="">
        <div
          className="friend_avatar"
          style={{
            backgroundImage:
              "url(https://pp.userapi.com/c846216/v846216691/13164c/ymZSKc158Ao.jpg?ava=1)"
          }}
        />
      </Link>
      <div className="friend_audio_event">
        <div className="friend_audio_text">
          <Link to="">Станислав Макешин</Link> добавил{" "}
          <Link to="">1 аудиозапись</Link>
          <span className="real_date_needs_update"> два часа назад</span>
        </div>
        <div className="friend_audio_rows">
          <AudioContent />
          <AudioContent />
          <AudioContent />
          <AudioContent />
        </div>
      </div>
    </div>
  );
};

export default FriendMusicUpdates;
