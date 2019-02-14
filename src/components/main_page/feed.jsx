import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostDropbox from "./common/postDropbox";
import PostField from "./common/postField";
import SubmitPost from "./common/submitPost";
import "./feed.css";
import Stories from "./stories";
import Posts from "./posts";
import FeedListgroup from "./common/feedListgroup";

class Feed extends Component {
  state = {
    feedIsToggleClick: false
  };

  feedToggleNews = () => {
    this.setState({ feedIsToggleClick: !this.state.feedIsToggleClick });
  };

  render() {
    
    const storyBackgroundStyle = {
      backgroundImage:
        "url(https://sun1-15.userapi.com/c851024/v851024449/97d14/dwIwPbWx2S8.jpg)"
    };
    const storyAuthAva = {
      backgroundImage:
        "url(https://sun1-15.userapi.com/c849124/v849124515/10700d/_y8-D2hgSB4.jpg?ava=1)"
    };
    return (
      <React.Fragment>
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

                <PostField/>

                <SubmitPost />
              </div>

              <Stories
                storyBackgroundStyle={storyBackgroundStyle}
                storyAuthAva={storyAuthAva}
              />

              <Posts />
            </div>
          </div>
        </div>

        <FeedListgroup feedIsToggleClick={this.state.feedIsToggleClick} feedToggleNews={this.feedToggleNews} />
      </React.Fragment>
    );
  }
}

export default Feed;
