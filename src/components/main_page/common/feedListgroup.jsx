import React from "react";
import { Link } from "react-router-dom";
import "./feedListgroup.css";

const FeedListgroup = () => {
  return (
    <div className="wide_column_right">
      <div className="wide_column">
        <div className="narrow_column">
          <div className="page_block feed_right_menu">
            <Link to="" className="right_menu_item item_active">
              <span className="blink_label">Новости</span>
              <i className="fa fa-filter" />
              <i className="fa fa-plus" />
            </Link>
            <div className="right_menu_sublist">
              <Link to="" className="right_submenu_item">
                Фотографии
              </Link>
              <Link to="" className="right_submenu_item">
                Видеозаписи
              </Link>
              <Link to="" className="right_submenu_item">
                Подкасты
              </Link>
            </div>
            <Link to="" className="right_menu_item">Рекомендации</Link>
            <Link to="" className="right_menu_item">Поиск</Link>
            <div class="right_menu_bottom">
              <Link to="" className="right_menu_item">Понравилось</Link>
              <Link to="" className="right_menu_item">Обновления</Link>
              <Link to="" className="right_menu_item">Комментарии</Link>
            </div>
          </div>

          <div className="page_block">
            <div className="toggle_fire">
              <i className="fa fa-fire" />
              <span>Сначала интересные</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedListgroup;
