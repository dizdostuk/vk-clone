import React from "react";
import "./postDropbox.css";

const PostDropbox = () => {
  return (
    <div className="post_upload_dropbox">
      <div className="post_upload_dropbox_inner">
        <div className="post_upload_label">
          Перетащите сюда фотографии или видеозаписи, <br /> чтобы прикрепить их
          к записи
        </div>
        <div className="post_upload_label release_label">
          Отпустите кнопку мыши, чтобы прикрепить фото или видео
        </div>
      </div>
    </div>
  );
};

export default PostDropbox;
