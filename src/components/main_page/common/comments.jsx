import React from "react";
import { Link } from "react-router-dom";

const Comments = props => {
  const { commentPostArr } = props;
  return (
    <div className="post_wall_content_comments">
      <div className="comment_lists">
        <div className="comment_wrap">
          <div className="comment">
            <Link to="" className="comment_image">
              <img
                src="https://sun1-10.userapi.com/c848628/v848628635/124b49/necA7LsWSKM.jpg?ava=1"
                alt="Avatar"
              />
            </Link>
            <div className="comment_content">
              <div className="comment_header">
                <div className="comment_author">
                  <Link to="">Владислав Ламборгини</Link>
                </div>
                <div className="comment_delete">
                  <i className="fa fa-times" />
                </div>
              </div>
              <div className="comment_text">
                <div className="text">3000, не?</div>
              </div>
              <div className="comment_footer">
                <Link to="" className="comment_time">
                  31 минуту назад
                </Link>
                <Link to="" className="comment_reply">
                  Ответить
                </Link>
                <div className="comment_like">
                  <i className="fa fa-heart" />
                  <span className="reply_count">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reply_to_comment_wrap">
          <div className="reply_to_comment">
            <div className="comment">
              <Link to="" className="reply_comment_image">
                <img
                  src="https://sun1-10.userapi.com/c848628/v848628635/124b49/necA7LsWSKM.jpg?ava=1"
                  alt="Avatar"
                />
              </Link>
              <div className="comment_content">
                <div className="comment_header">
                  <div className="comment_author">
                    <Link to="">Владислав Ламборгини</Link>
                  </div>
                  <div className="comment_delete">
                    <i className="fa fa-times" />
                  </div>
                </div>
                <div className="comment_text">
                  <div className="text">3000, не?</div>
                </div>
                <div className="comment_footer">
                  <Link to="" className="comment_time">
                    31 минуту назад
                  </Link>
                  <Link to="" className="comment_reply">
                    Ответить
                  </Link>
                  <div className="comment_like">
                    <i className="fa fa-heart" />
                    <span className="reply_count">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comment_box">
        <Link className="comment_avatar" to="">
          <img src={props.currentUserImg} alt="" />
        </Link>
        <div className="comment_input">
          <input
            className="editable_input"
            placeholder="Написать комментарий"
            contentEditable="true"
            onChange={props.handleChangeComment}
          />
          <i className="fa fa-paperclip" />
          <i className="fa fa-camera" />
          <i className="fa fa-smile"></i>
        </div>
        <div className="comment_enter">
          <i className="fa fa-arrow-circle-right" onClick={props.commentPost} />
        </div>
      </div>
    </div>
  );
};

export default Comments;
