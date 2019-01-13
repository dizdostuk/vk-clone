import React from "react";
import "./css/uiSearch.css";

const UiSearch = () => {
  return (
    <div className="grid-item_ui_search">
      <div className="ui_search_input_block">
        <div className="ui_search_input_inner">
          <input
            type="text"
            className="ui_search_field"
            placeholder="Поиск по музыке"
          />
        </div>
        <button className="ui_search_button">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default UiSearch;
