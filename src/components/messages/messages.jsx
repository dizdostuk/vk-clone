import React from "react";
import { Link } from "react-router-dom";
import MessageListGroup from "./messageListGroup";
import "./messages.css";

const Messages = () => {
  return (
    <React.Fragment>
      <div className="wide_column_wrap">
        <div className="wide_column" style={{height: "100%"}}>
          <div className="msg_page">
            <div className="page_block msg_dialogs">
              <div className="msg_search">
                <input
                  type="text"
                  className="search_input"
                  placeholder="Поиск"
                />
                <div className="add_dialog">
                  <i className="fa fa-plus" />
                </div>
              </div>

              <div className="message_list">
                <div className="message_item">
                  <Link to="">
                    <img
                      src="https://sun1-4.userapi.com/c849124/v849124515/10700d/_y8-D2hgSB4.jpg?ava=1"
                      alt="Avatar"
                    />
                  </Link>
                  <div className="message_info">
                    <div className="message_content">
                      <div className="who_messaged">
                        Begin English. Английский язык для всех
                      </div>
                      <div className="text_message">
                        Boundless — слово дня! Перевод — безграничный,
                        бескрайний, беспредельный, безбрежный, необозримый
                        Транскрипция: амер. [ˈbaʊndləs], брит. [ˈbaʊndləs]
                        Примеры: 1. We were filled with boundless joy. Нас
                        наполняла безграничная радость. 2. I went on deck and
                        overlooked the boundless waters. Я вышел на палубу и
                        стал смотреть на бескрайние водные просторы. 3.
                        boundless / great / unbounded / unbridled / wild
                        enthusiasm безграничный энтузиазм
                      </div>
                    </div>
                    <div className="message_time">10:25</div>
                  </div>
                </div>

                <div className="message_item">
                  <Link to="">
                    <img
                      src="https://sun1-4.userapi.com/c849124/v849124515/10700d/_y8-D2hgSB4.jpg?ava=1"
                      alt="Avatar"
                    />
                  </Link>
                  <div className="message_info">
                    <div className="message_content">
                      <div className="who_messaged">
                        Begin English. Английский язык для всех
                      </div>
                      <div className="text_message">
                        Boundless — слово дня! Перевод — безграничный,
                        бескрайний, беспредельный, безбрежный, необозримый
                        Транскрипция: амер. [ˈbaʊndləs], брит. [ˈbaʊndləs]
                        Примеры: 1. We were filled with boundless joy. Нас
                        наполняла безграничная радость. 2. I went on deck and
                        overlooked the boundless waters. Я вышел на палубу и
                        стал смотреть на бескрайние водные просторы. 3.
                        boundless / great / unbounded / unbridled / wild
                        enthusiasm безграничный энтузиазм
                      </div>
                    </div>
                    <div className="message_time">10:25</div>
                  </div>
                </div>

                
              </div>

              <div className="msg_dialogs_footer page_block">
                <div className="msg_settings_menu">
                  <Link to="" className="msg_settings_item">Отключить звуковые уведомления</Link>
                  <Link to="" className="msg_settings_item">Спам</Link>
                  <div className="msg_settings_item"><i className="fa fa-settings"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessageListGroup />
    </React.Fragment>
  );
};

export default Messages;
