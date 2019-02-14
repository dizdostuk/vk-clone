import React from "react";
import { Link } from "react-router-dom";
import "./submitPost.css";

const SubmitPost = () => {
  return (
    <div className="submit_post">
      <div className="poster_media">
        <div className="poster__open-btn-wrapper">
          <div className="poster__open-btn-layout">
            <i className="fa fa-asterisk" />
          </div>
        </div>

        <div className="page_add_media">
          <Link to="" className="media_selector_item">
            <i className="fa fa-camera" />
          </Link>
          <Link to="" className="media_selector_item">
            <i className="fa fa-youtube" />
          </Link>
          <Link to="" className="media_selector_item">
            <i className="fa fa-music" />
          </Link>
          <Link to="" className="media_selector_item">
            <i className="fa fa-align-right" />
          </Link>
          <Link to="" className="media_selector_item">
            <span>Еще</span>
            <i className="fa fa-sort-down" />
          </Link>
        </div>
      </div>

      <div className="submit_post_btn">
        <i className="fa fa-cog" />
        <Link to="">Отправить</Link>
      </div>
    </div>
  );
};

export default SubmitPost;
