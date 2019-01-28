import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

const Posts = () => {
  return (
    <React.Fragment>
      <div className="new_posts page_block">
        Показать <b>1</b> новую запись
      </div>
      <div className="feed_rows">
        <div className="item_post">
          <div className="post page_block">
            <div className="post_header">
              <Link to="" className="post_header_image">
                <img
                  src="https://sun1-5.userapi.com/c849328/v849328645/111a95/pi68RStL5UM.jpg?ava=1"
                  alt="Avatar"
                  className="post_img"
                />
              </Link>
              <div className="post_header_info">
                <h5 className="post_author">
                  <Link className="author" to="">
                    Design Prosmotr
                  </Link>
                  <span className="explain">
                    <span className="wall_fixed_label">&nbsp;запись закреплена</span>
                  </span>
                </h5>
                <div className="post_date">
                  <Link className="post_link" to="">
                    <span className="rel_date">вчера в 22:40</span>
                  </Link>
                </div>
              </div>
              <div className="post_actions_menu">
                <i className="fa fa-caret-down" />
                <div className="post_action_menu_wrap">
                    <i className="fa fa-caret-up"></i>
                  <div className="post_action_menu">
                    <Link to="" className="post_action_link">
                      Это не интересно
                    </Link>
                    <Link to="" className="post_action_link">
                      Сохранить в закладках
                    </Link>
                    <Link to="" className="post_action_link">
                      Пожаловаться
                    </Link>
                    <Link to="" className="post_action_link">
                      Уведомлять о записях
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_content">
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
