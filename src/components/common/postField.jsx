import React from "react";
import "./css/postField.css";

const PostField = (props) => {
    const { postString, onChange, style } = props;
  return (
    <div className="post_field_wrap">
      <div
        className="submit_post_field"
        contentEditable="true"
        role="textbox"
        onChange={onChange}
        dangerouslySetInnerHTML={{ __html: postString }}
      />
      <div
        className={
          postString === ""
            ? "placeholder dp_block"
            : "placeholder dp_none"
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
      <div className="post_actions_btns" style={style}>
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
};

export default PostField;
