import React from 'react';
import { Link } from "react-router-dom";
import "./messageListGroup.css";

const MessageListGroup = () => {
    return ( <div className="wide_column_right">
        <div className="wide_column">
            <div className="page_block msg_right_menu">
                <Link to="" className="msg_item item_active">Все сообщения</Link>
                <Link to="" className="msg_item">Непрочитанные</Link>
                <Link to="" className="msg_item">Важные сообщения</Link>
            </div>
        </div>
    </div> );
}
 
export default MessageListGroup;