import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/renderMainComponent.css";

class RenderMainComponent extends Component {
  state = {
    postString: "",
    postChanged: false
  };

  handleChangePost = (e) => {
    if(this.state.postString === "")
      this.setState({postChanged: false});
    else
      this.setState({postChanged: true});
      
    this.setState({postString: e.target.value});    
  }
  render() {
    return (
      <div className="wide_column_wrap">
        <div className="wide_column">
          <div className="main_feed">
            <div className="page_block feed_post_wrap">
              <div className="post_upload_dropbox">
                <div className="post_upload_dropbox_inner">
                  <div className="post_upload_label">
                    Перетащите сюда фотографии или видеозаписи, <br /> чтобы
                    прикрепить их к записи
                  </div>
                  <div className="post_upload_label release_label">
                    Отпустите кнопку мыши, чтобы прикрепить фото или видео
                  </div>
                </div>
              </div>

              <Link to="" className="post_field_user_link">
                <img
                  src="https://pp.userapi.com/c851216/v851216536/7e424/YEfQL43SS_o.jpg?ava=1"
                  alt=""
                  className="post_field_user_image"
                />
              </Link>
              <div className="post_field_wrap">
                <div
                  className="submit_post_field"
                  contentEditable="true"
                  role="textbox"
                  onChange={this.handleChangePost}
                  dangerouslySetInnerHTML={{__html: this.state.postString}}
                />
                <div className={ !this.state.postChanged ? "placeholder dp_block" : "placeholder dp_none"}>
                  <div className="plh_input">
                    <div className="plh_content">Что у вас нового?</div>
                  </div>
                </div>
                <div className="emoji_smile_wrap">
                  <div className="emoji_smile">
                    <i className="fas fa-smile-beam" />
                  </div>
                </div>
                <div className="post_actions_btns">
                  <div className="post_action_btn">
                    <div className="post_action_btn_layout">
                      <span className="post_action_btn_text">Видно всем</span>
                    </div>
                    <div className="eltt eltt_fancybox">
                      <div className="post_action_tt_content">
                        <div className="post_action_tt_item radiobtn">
                          Видно всем
                        </div>
                        <div className="post_action_tt_item radiobtn">
                          Только для друзей
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
  }
}

export default RenderMainComponent;
