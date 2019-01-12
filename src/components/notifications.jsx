import React from "react";
import { Link } from "react-router-dom";
import "./css/notifications.css";

const Notifications = () => {
  return (
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
          <Link to="/settings?act=notify" className="nav-notify-header_link">
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
              <i className="fa fa-heart" />
            </Link>
            <div className="nav-notify_event_description">
              <div className="nav-notify_event_description_header">
                <b>
                  <Link to="">Сабина Кудрявцева</Link>
                </b>
                " оценила Ваш комментарий "
                <Link to="">Ребят, возможно ли установить gulp глобально?</Link>
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
                <Link to="">Ulan</Link>, нет. Год здесь подразумевается как один
                оборот вокруг солнца у Плутона 247 лет.
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
  );
};

export default Notifications;
