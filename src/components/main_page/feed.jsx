import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostDropbox from "../common/postDropbox";
import PostField from "../common/postField";
import SubmitPost from "../common/submitPost";
import "./feed.css";

class Feed extends Component {
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
    const storyBackgroundStyle = {
      backgroundImage: "url(https://sun1-15.userapi.com/c851024/v851024449/97d14/dwIwPbWx2S8.jpg)"
    }
    const storyAuthAva = {
      backgroundImage: "url(https://sun1-15.userapi.com/c849124/v849124515/10700d/_y8-D2hgSB4.jpg?ava=1)"
    }
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
            
            <div className="page_block">
              <div className="stories-title">Истории</div>
              <div className="stories_items_wrap">
                <div className="stories_items">
                  <Link to="" className="story_item" style={storyBackgroundStyle}>
                    <div className="story_item_author">
                      <div className="story_item_author_ava" style={storyAuthAva}>
                        
                      </div>
                      <div className="preview_author_name">Begin English</div>
                    </div>
                  </Link>
                  <Link to="" className="story_item" style={{backgroundImage: "url(https://sun1-10.userapi.com/c841006/v841006430/4a4c7/F84oykm1zM0.jpg)"}}>
                    <div className="story_item_author">
                      <div className="story_item_author_ava" style={storyAuthAva}>
                        
                      </div>
                      <div className="preview_author_name">Тони Робинс</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
