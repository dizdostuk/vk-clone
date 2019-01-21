import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostDropbox from "./common/postDropbox";
import PostField from "./common/postField";
import SubmitPost from "./common/submitPost";
import "./css/renderMainComponent.css";

class RenderMainComponent extends Component {
  state = {
    postString: "",
    postChanged: false
  };

  handleChangePost = e => {
    if (this.state.postString === "") this.setState({ postChanged: false });
    else this.setState({ postChanged: true });

    this.setState({ postString: e.target.value });
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
    const { postString, postChanged } = this.state;
    return (
      <div className="wide_column_wrap">
        <div className="wide_column">
          <div className="main_feed">
            <div className="page_block feed_post_wrap">
              <PostDropbox />

              <Link to="" className="post_field_user_link">
                <img
                  src="https://pp.userapi.com/c851216/v851216536/7e424/YEfQL43SS_o.jpg?ava=1"
                  alt=""
                  className="post_field_user_image"
                />
              </Link>

              <PostField
                onChange={this.handleChangePost}
                postString={postString}
                postChanged={postChanged}
                style={actionBtnStyle}
              />

              <SubmitPost />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderMainComponent;
