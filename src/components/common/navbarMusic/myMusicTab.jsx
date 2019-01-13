import React from "react";
import { Link } from "react-router-dom";
import AudioContent from "./audioContent";
import "./css/myMusicTab.css";

const MyMusicTab = () => {
  return (
    <div id="myAudioContent" className="grid-item_audio_page_section">
      <div className="audio_section">
        <div className="audio_page_left_grid-row">
          <div className="audio_page_shuffle_all">
            <i className="fa fa-random" />
            <button className="shuffle_all_button">Перемешать все</button>
          </div>

          <div className="audio_page-audio_lists">

            <AudioContent />
            <AudioContent />
            <AudioContent />
            
          </div>
        </div>
        <div className="audio_page_right_grid-row">
          <div className="audio_friends_right_lists">
            <div className="audio_friend">
              <img
                className="audio_friend_avatar"
                alt="Audio avatar"
                src="https://pp.userapi.com/c846216/v846216691/13164c/ymZSKc158Ao.jpg?ava=1)"
              />
              <div className="audio_list__performer_title">
                <div className="audio_list_title">
                  <Link to="">Станислав Макешин</Link>
                </div>
                <div className="audio_friend_audio_count">
                  One Republic - Connection
                </div>
              </div>
            </div>

            <div className="audio_friend">
              <img
                className="audio_friend_avatar"
                alt="Audio avatar"
                src="https://pp.userapi.com/c851132/v851132956/7110d/ABADNNilZcY.jpg?ava=1"
              />
              <div className="audio_list__performer_title">
                <div className="audio_list_title">
                  <Link to="">Soul Keeper</Link>
                </div>
                <div className="audio_friend_audios">253 аудиозаписей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMusicTab;
