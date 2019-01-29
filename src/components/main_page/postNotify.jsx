import React from "react";

const PostNotify = ({count}) => {
  return (
    <div className="new_posts page_block">
      Показать <b>{count}</b> новую запись
    </div>
  );
};

export default PostNotify;
