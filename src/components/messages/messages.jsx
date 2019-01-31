import React from "react";
import MessageListGroup from "./messageListGroup";
import "./messages.css";

const Messages = () => {
  return (
    <React.Fragment>
      <div className="wide_column_wrap">
        <div className="wide_column">
            <div className="msg_page"><div className="page_block msg_dialogs">
            <div className="msg_search">
            <input type="text" className="search_input" />
            <i className="fa fa-plus"></i>
            </div>
            </div></div>
        </div>
      </div>
      <MessageListGroup />
    </React.Fragment>
  );
};

export default Messages;
