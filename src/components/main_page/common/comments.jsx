import React from "react";
import { Link } from "react-router-dom";

const Comments = ({
  currentUserImg,
  handleChangeComment,
  handleReply,
  haveComments,
  wantToReply,
  haveReply,
  commentPostArr,
  replyToCommentArr,
  postComment,
  inptValue
}) => {
  return (
    <div className="post_wall_content_comments">
      <div className="comment_lists">
        {haveComments === true ? (
          commentPostArr.map(item => (
            <div key={item.key} className="comment_wrap">
              <div className="comment">
                <Link to="" className="comment_image">
                  <img src={item.userImg} alt="Avatar" />
                </Link>
                <div className="comment_content">
                  <div className="comment_header">
                    <div className="comment_author">
                      <Link to="">{item.userName}</Link>
                    </div>
                    <div className="comment_delete">
                      <i className="fa fa-times" />
                    </div>
                  </div>

                  <div className="comment_text">
                    <div className="text">{item.commentText}</div>
                  </div>
                  <div className="comment_footer">
                    <Link to="" className="comment_time">
                      {item.commentTime} минут назад
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
          ))
        ) : (
          <div />
        )}

        {haveReply === true ? (
          replyToCommentArr.map(item => (
            <div className="reply_to_comment_wrap">
              <div className="reply_to_comment">
                <div className="comment">
                  <Link to="" className="reply_comment_image">
                    <img src={item.replierImg} alt="Avatar" />
                  </Link>
                  <div className="comment_content">
                    <div className="comment_header">
                      <div className="comment_author">
                        <Link to="">{item.replierName}</Link>
                      </div>
                      <div className="comment_delete">
                        <i className="fa fa-times" />
                      </div>
                    </div>
                    <div className="comment_text">
                      <div className="text">{item.replierText}</div>
                    </div>
                    <div className="comment_footer">
                      <Link to="" className="comment_time">
                        {item.commentTime}
                      </Link>
                      <span className="comment_reply" onClick={handleReply}>
                        Ответить
                      </span>
                      <div className="comment_like">
                        <i className="fa fa-heart" />
                        <span className="reply_count">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div />
        )}
      </div>
      <div className="comment_box">
        <Link className="comment_avatar" to="">
          <img src={currentUserImg} alt="" />
        </Link>
        <div className="comment_input">
          <input
            className="editable_input"
            placeholder="Написать комментарий"
            onChange={handleChangeComment}
            value={wantToReply === true ? commentPostArr.userName + ", " + inptValue : inptValue}
          />
          <i className="fa fa-paperclip" />
          <i className="fa fa-camera" />
          <i className="fa fa-smile"></i>
        </div>
        <div className="comment_enter">
          <i className="fa fa-arrow-circle-right" onClick={postComment} />
        </div>
      </div>
    </div>
  );
};

export default Comments;
