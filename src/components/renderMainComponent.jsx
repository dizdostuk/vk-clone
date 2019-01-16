import React, { Component } from "react";
import "./css/renderMainComponent.css";

class RenderMainComponent extends Component {
  state = {};
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
                  <div className="post_upload_label">
                    Отпустите кнопку мыши, чтобы прикрепить фото или видео
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
