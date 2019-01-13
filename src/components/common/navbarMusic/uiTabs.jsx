import React from "react";
import "./css/uiTab.css";

const UiTabs = () => {
  return (
    <div className="grid-item_ui_tabs">
      <div className="ui_tabs_block">
        <button className="ui_tab">Текущий плейлист</button>
        <button className="ui_tab">Моя музыка</button>
        <button className="ui_tab">Плейлисты</button>
        <button className="ui_tab">Рекомендации</button>
        <button className="ui_tab">Обновления друзей</button>
      </div>
    </div>
  );
};

export default UiTabs;
