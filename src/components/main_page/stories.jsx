import React from "react";
import { Link } from "react-router-dom";
import "./stories.css";

const Stories = (props) => {
  const { storyBackgroundStyle, storyAuthAva } = props;
  return (
    <div className="page_block">
      <div className="stories-title">Истории</div>
      <div className="stories_items_wrap">
        <div className="stories_items">
          <Link to="" className="story_item" style={storyBackgroundStyle}>
            <div className="story_item_author">
              <div className="story_item_author_ava" style={storyAuthAva} />
              <div className="preview_author_name">Begin English</div>
            </div>
          </Link>
          <Link
            to=""
            className="story_item"
            style={{
              backgroundImage:
                "url(https://sun1-10.userapi.com/c841006/v841006430/4a4c7/F84oykm1zM0.jpg)"
            }}
          >
            <div className="story_item_author">
              <div className="story_item_author_ava" style={storyAuthAva} />
              <div className="preview_author_name">Тони Робинс</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stories;
