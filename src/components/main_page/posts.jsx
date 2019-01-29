import React, { Component } from "react";
import "./posts.css";
import PostNotify from "./postNotify";
import PostItem from "./postItem";

class Posts extends Component {
  state = {
    newPosts: 1
  }
  render() {
    const { newPosts } = this.state;
    return (
      <React.Fragment>
        <PostNotify count={newPosts} />

        <div className="feed_rows">
          <PostItem />
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
