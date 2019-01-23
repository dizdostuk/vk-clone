import React from 'react';
//import { Link } from "react-router-dom";
import "./posts.css";

const Posts = () => {
    return ( <React.Fragment>
        <div className="new_posts page_block">
            Показать <b>1</b> новую запись
        </div>
        <div className="feed_rows">
            <div className="item_post">Post</div>
        </div>

    </React.Fragment> );
}
 
export default Posts;