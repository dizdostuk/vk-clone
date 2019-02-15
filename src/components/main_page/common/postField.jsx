import React, { Component } from "react";
import "./postField.css";

class PostField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postString: "",
      postChanged: false
    };

    this.handleChangePost = this.handleChangePost.bind(this);
  }
  handleChangePost = e => {
    this.setState({ postChanged: true, postString: e.target.value });
  };
  render() {
    const actionBtnStyle = {
      position: "relative",
      marginLeft: "-28px",
      marginRight: "20px",
      borderTop: "1px solid #e7e8ec",
      borderBottom: "1px solid rgb(231, 232, 236)",
      fontSize: "13px"
    };

    const { postString } = this.state;
    return (
      <div className="post_field_wrap">
        <div
          className="submit_post_field"
          onChange={this.handleChangePost}
          value={postString}
          contentEditable="true"
          input="value=$element.innerHTML"
        />
        <div
          className={
            postString !== ""
              ? "placeholder dp_none"
              : "placeholder dp_block"
          }
        >
          <div className="plh_input">
            <div className="plh_content">Что у вас нового?</div>
          </div>
        </div>
        <div className="emoji_smile_wrap">
          <div className="emoji_smile">
            <i className="fas fa-smile-beam" />
          </div>
        </div>
        <div className="post_actions_btns" style={actionBtnStyle}>
          <div className="post_action_btn">
            <div className="post_action_btn_layout">
              <span className="post_action_btn_text">Видно всем</span>
            </div>
            <div className="eltt eltt_fancybox">
              <div className="post_action_tt_content">
                <div className="post_action_tt_item radiobtn">Видно всем</div>
                <div className="post_action_tt_item radiobtn">
                  Только для друзей
                </div>
              </div>
            </div>
          </div>

          <div className="post_action_btn">
            <div className="post_action_btn_layout">
              <span className="post_action_btn_text">Сейчас</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostField;
