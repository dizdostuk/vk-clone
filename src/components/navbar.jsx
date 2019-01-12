import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar-layout">
        <div className="grid">
          <div className="grid-item">
            <div className="logo" />
          </div>
          <div className="grid-item">
            <div className="search">
              <input
                type="text"
                placeholder="Поиск"
                className="text-head-input"
              />
            </div>
          </div>
          <div className="grid-item grid-notify-music">
            <div className="notifications">
              <div className="nav-notify_icon">
                <i className="fa fa-bell" />
              </div>
              <div className="nav-notification-wrap">
                <i className="fa fa-caret-up" />
                <div className="nav-notify-header">
                  <div className="nav-notify-header_label">
                    <span className="nav-notify-header_label_urpage">
                      Ваша страница
                    </span>
                  </div>
                  <Link
                    to="/settings?act=notify"
                    className="nav-notify-header_link"
                  >
                    Настройки
                  </Link>
                </div>
                <div className="nav-notify-events">
                  <div className="nav-notify_event">
                    <Link to="" className="nav-notify_event_image">
                      <img
                        src="https://pp.userapi.com/c849236/v849236678/d667e/aCR7blDaemU.jpg?ava=1"
                        alt=""
                        className="nav-notify_event_image"
                      />
                      <i class="fa fa-heart" />
                    </Link>
                    <div className="nav-notify_event_description">
                      <div className="nav-notify_event_description_header">
                        <b>
                          <Link to="">Сабина Кудрявцева</Link>
                        </b>
                        " оценила Ваш комментарий "
                        <Link to="">
                          Ребят, возможно ли установить gulp глобально?
                        </Link>
                        " к записи "
                        <Link to="">
                          Краткое руководство по Javascript. В данном...
                        </Link>
                      </div>
                      <div className="nav-notify_event_description_footer">
                        <span className="notify-date">вчера в 11:09</span>
                      </div>
                    </div>
                    <div className="nav-notify_event_submenu">
                      <div className="nav-notify_event_submenu_icon" />
                      <div className="nav-notify_event_submenu_actions">
                        <Link to="">Скрыть</Link>
                        <Link to="">Показывать реже</Link>
                      </div>
                    </div>
                  </div>

                  <div className="nav-notify_event">
                    <Link to="" className="nav-notify_event_image">
                      <img
                        src="https://pp.userapi.com/c851132/v851132956/7110d/ABADNNilZcY.jpg?ava=1"
                        alt=""
                      />
                      <i class="fa fa-gift" />
                    </Link>
                    <div className="nav-notify_event_description">
                      <div className="nav-notify_event_description_header">
                        "9 января был день рождения "
                        <b>
                          <Link to="">Soul Keeper</Link>
                        </b>
                      </div>
                      <div className="nav-notify_event_description_footer" />
                      <div className="nav-notify_event_description_buttons">
                        <Link to="" className="notify-button secondary">
                          Отправить подарок
                        </Link>
                      </div>
                    </div>
                    <div className="nav-notify_event_submenu">
                      <div className="nav-notify_event_submenu_icon" />
                      <div className="nav-notify_event_submenu_actions">
                        <Link to="">Скрыть</Link>
                        <Link to="">Показывать реже</Link>
                      </div>
                    </div>
                  </div>

                  <div className="nav-notify_event">
                    <Link to="" className="nav-notify_event_image">
                      <img
                        src="https://pp.userapi.com/c831508/v831508413/1ddafc/HfhjTupiXIY.jpg?ava=1"
                        alt=""
                      />
                      <i class="fa fa-comment" />
                    </Link>
                    <div className="nav-notify_event_description">
                      <div className="nav-notify_event_description_header">
                        <b>
                          <Link to="">Азат Насибулин</Link>
                        </b>
                      </div>
                      <div className="nav-notify_event_description_text">
                        <Link to="">Ulan</Link>, нет. Год здесь подразумевается
                        как один оборот вокруг солнца у Плутона 247 лет.
                      </div>
                      <div className="nav-notify_event_description_footer">
                        <Link to="">
                          <span className="notify-date">вчера в 11:09</span>
                        </Link>
                        " в ответ на Ваш комментарий "
                        <Link to="">
                          Получается за год пробытия в плутоне(365 дней),..
                        </Link>
                      </div>
                      <div className="nav-notify_event_description_buttons" />
                    </div>
                    <div className="nav-notify_event_submenu">
                      <div className="nav-notify_event_submenu_icon" />
                      <div className="nav-notify_event_submenu_actions">
                        <Link to="">Скрыть</Link>
                        <Link to="">Показывать реже</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                    style={{backgroundImage: "url(https://pp.userapi.com/c639122/v639122564/611b3/yPI44uKBD-k.jpg)", backgroundSize: "cover"}}
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
                        <div className="volume_slider-slide_amount"></div>
                        <div className="volume_slider-slide_handler"></div>
                      </div>
                    </div>

                    <div className="nav-music-current-player_track_slider">
                      <div className="track_slider-slide">
                        <div className="track_slider-slide_amount"></div>
                        <div className="track_slider-slide_handler"></div>
                      </div>
                    </div>
                  </div>

                  <div className="nav-music-current-player_buttons">
                    <button><i className="i fa fa-plus"></i></button>
                    <button><i className="fa fa-random"></i></button>
                    <button><i className="fa fa-repeat"></i></button>
                    <button><i className="fa fa-signal"></i></button>
                    <button><i className="fa fa-magic"></i></button>
                    <button><i className="fa fa-share"></i></button>
                  </div>
                </div>
                <div className="nav-music-content-block">

                </div>
              </div>
            </div>
          </div>
          <div className="grid-item item4">
            <div className="nav-profile" id="nav-profile">
              <div className="nav-profile-name">Ulan</div>
              <img
                src="https://pp.userapi.com/c851216/v851216536/7e424/YEfQL43SS_o.jpg?ava=1"
                alt="Profile avatar"
                className="nav-profile-img"
              />
              <div className="nav-profile-arrow">
                <i className="fa fa-caret-down arrow-opacity" />
              </div>
            </div>
            <div className="nav-profile-menu">
              <Link className="nav-profile-menu_links" to="/mypage">
                Моя страница
              </Link>
              <div className="nav-profile-sep" />
              <Link className="nav-profile-menu_links" to="/edit">
                Редактировать
              </Link>
              <Link className="nav-profile-menu_links" to="/settings">
                Настройки
              </Link>
              <Link className="nav-profile-menu_links" to="/support">
                Помощь
              </Link>
              <div className="nav-profile-sep" />
              <Link className="nav-profile-menu_links" to="/exit">
                Выход
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
