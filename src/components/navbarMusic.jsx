import React from "react";
import { Link } from "react-router-dom";
import "./css/navbarMusic.css";

const NavbarMusic = () => {
  return (
    <div className="music">
      <div className="nav-notify_icon">
        <i className="fa fa-music" />
      </div>
      <div className="nav-music-wrap">
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
              <div className="nav-music-current-player_track_duration">
                0:17
              </div>
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

        <div className="nav-music-content-block">
          <div className="nav-music-content-block_grid">
            <div className="grid-item_ui_search">
              <div className="ui_search_input_block">
                <div className="ui_search_input_inner">
                  <input
                    type="text"
                    className="ui_search_field"
                    placeholder="Поиск по музыке"
                  />
                </div>
                <button className="ui_search_button">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>

            <div className="grid-item_ui_tabs">
              <div className="ui_tabs_block">
                <button className="ui_tab">Текущий плейлист</button>
                <button className="ui_tab">Моя музыка</button>
                <button className="ui_tab">Плейлисты</button>
                <button className="ui_tab">Рекомендации</button>
                <button className="ui_tab">Обновления друзей</button>
              </div>
            </div>

            <div className="grid-item_audio_page_section">
              <div className="audio_section">
                <div className="audio_page_left_grid-row">
                  <div className="audio_page_shuffle_all">
                    <i className="fa fa-random" />
                    <button className="shuffle_all_button">
                      Перемешать все
                    </button>
                  </div>

                  <div className="audio_page-audio_lists">

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
                        <div className="audio_friend_audios">
                          253 аудиозаписей
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMusic;
