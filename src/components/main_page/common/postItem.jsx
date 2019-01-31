import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./postItem.css";

class PostItem extends Component {
  
  render() {
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
              <i className="fa fa-caret-down" />
              <div className="post_action_menu_wrap">
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
                    <i className="fa fa-heart" />
                    <span className="reply_count">1</span>
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
                    <img
                      src="https://pp.userapi.com/c851216/v851216536/7e424/YEfQL43SS_o.jpg?ava=1"
                      alt=""
                    />
                  </Link>
                  <div className="comment_input">
                    <div
                      className="editable_input"
                      placeholder="Написать комментарий"
                      contentEditable="true"
                    />
                    <i className="fa fa-paperclip" />
                    <i className="fa fa-camera" />
                    <i className="fa fa-smile"></i>
                  </div>
                  <div className="comment_enter">
                    <i className="fa fa-arrow-circle-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
