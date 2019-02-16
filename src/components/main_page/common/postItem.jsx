import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./postItem.css";
import Comments from "./comments";

class PostItem extends Component {
  state = {
    userImage:
      "https://pp.userapi.com/c851216/v851216536/7e424/YEfQL43SS_o.jpg?ava=1",
    userName: "Ulanbek Zhusupov",
    likeCount: 0,
    isUserLiked: false,
    postMenuClicked: false,
    commentChange: "",
    haveComments: false,
    haveReply: false,
    wantToReply: false,
    commentPostArr: [],
    replyToCommentArr: []
  };

  handleLike = () => {
    if (this.state.isUserLiked === false) {
      this.setState({
        likeCount: this.state.likeCount + 1,
        isUserLiked: !this.state.isUserLiked
      });
    }
  };
  showPostMenu = () => {
    this.setState({ postMenuClicked: !this.state.postMenuClicked });
  };

  handleChangeComment = e => {
    this.setState({ commentChange: e.target.value });
  };

  commentPost = () => {
    let commentArr = [...this.state.commentPostArr];
    let commentObj = {
      userImg: this.state.userImage,
      userName: this.state.userName,
      commentText: this.state.commentChange,
      commentTime: new Date().getMinutes(),
      replyForComment: []
    };
    commentArr.push(commentObj);
    this.setState({ commentChange: "", commentPostArr: commentArr, haveComments: true });
  };

  handleReply = () => {
    let doIwantReply = true;
    this.setState( state => ({ state, wantToReply: doIwantReply }));
  }

  replyComment = () => {
    let replyCommentArr = [...this.state.commentPostArr];
    let replyObj = {
      replierImg: this.state.userImage,
      replierName: this.state.userName,
      replierText: this.state.commentChange,
      replyTo: replyCommentArr.userName,
      commentTime: new Date().getMinutes()
    };
    replyCommentArr.push(replyObj);

    this.setState({ commentChange: "", replyToCommentArr: replyCommentArr, haveReply: true });
  }

  render() {
    const {
      userImage,
      haveComments,
      wantToReply,
      haveReply,
      commentPostArr,
      replyToCommentArr,
      commentChange
    } = this.state;
    
    return (
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
                  <span className="wall_fixed_label">
                    &nbsp;запись закреплена
                  </span>
                </span>
              </h5>
              <div className="post_date">
                <Link className="post_link" to="">
                  <span className="rel_date">вчера в 22:40</span>
                </Link>
              </div>
            </div>
            <div className="post_actions_menu">
              <i className="fa fa-caret-down" onClick={this.showPostMenu} />
              <div
                className={
                  this.state.postMenuClicked
                    ? "post_action_menu_wrap visibleOn"
                    : "post_action_menu_wrap"
                }
              >
                <i className="fa fa-caret-up" />
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
            <div className="post_wall_content">
              <div className="post_content">
                <div className="post_content_text">
                  Тактика допроса: искусство изобличения во лжи Иногда в
                  процессе расследования перед следователем возникает задача
                  изобличить во лжи как свидетеля или потерпевшего, так и
                  подозреваемого либо обвиняемого. Допрашиваемый может давать
                  ложные показания как в своих интересах, так и в ущерб им
                  (например, при самооговоре).
                  <br />
                  <span className="show_more">Показать полностью</span>
                  <span className="display_text">
                    <br />
                    <br />
                    Чтобы изобличить допрашиваемого в даче ложных показаний,
                    следователю необходимо использовать тактические
                    приёмы.Приёмы эмоционального воздействия При изобличении во
                    лжи свидетеля и потерпевшего можно прибегнуть к таким
                    приёмам: <br /> — убеждение в неправильности занятой
                    позиции, её антигражданском характере;
                    <br />
                    — разъяснение правовых последствий дачи ложных показаний;
                    <br /> — разъяснение вредных последствий дачи ложных
                    показаний для близких допрашиваемому лиц из числа
                    потерпевших, подозреваемых, обвиняемых;
                    <br /> — воздействие на положительные стороны личности
                    допрашиваемого (чувство собственного достоинства, смелость,
                    благородство, принципиальность и т. д.). Следственная
                    тактика располагает целым арсеналом приёмов изобличения
                    подозреваемого и обвиняемого в даче ими ложных показаний, а
                    также оказания на них правомерного психологического
                    воздействия с целью получить правдивые показания. Рассмотрим
                    основные. 1. Убеждение. Этот приём заключается в обращении
                    следователя к здравому смыслу допрашиваемого, побуждении его
                    к раскаянию и чистосердечному признанию путём разъяснения
                    как вредных последствий запирательства и лжи, так и
                    благоприятных последствий признания своей вины и активного
                    содействия расследованию совершенного преступления, а также
                    преступлений прошлых лет, оставшихся нераскрытыми.
                  </span>
                </div>
                <div className="post_content_image">
                  <Link
                    to=""
                    className="post_image"
                    style={{
                      width: "510px",
                      height: "255px",
                      backgroundImage:
                        "url(https://sun1-11.userapi.com/c851416/v851416996/a3636/YT6q7_XFtEo.jpg)"
                    }}
                  />
                </div>
              </div>
              <div className="post_wall_content_likes">
                <div className="post_likes">
                  <div className="replies">
                    <i
                      className={
                        this.state.isUserLiked
                          ? "fa fa-heart colorRed"
                          : "fa fa-heart"
                      }
                      onClick={this.handleLike}
                    />
                    <span className="reply_count">{this.state.likeCount}</span>
                  </div>
                  <div className="replies">
                    <i className="fa fa-comments" />
                    <span className="reply_count">1</span>
                  </div>
                  <div className="replies">
                    <i className="fa fa-reply" />
                    <span className="reply_count">1</span>
                  </div>
                  <div className="replies">
                    <i className="fa fa-eye" />
                    <span className="reply_count">1</span>
                  </div>
                </div>
              </div>

              <Comments
                inptValue={commentChange}
                currentUserImg={userImage}
                handleChangeComment={this.handleChangeComment}
                haveComments={haveComments}
                wantToReply={wantToReply}
                haveReply={haveReply}
                handleReply={this.handleReply}
                postComment={this.commentPost}
                commentPostArr={commentPostArr}
                replyToCommentArr={replyToCommentArr}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
