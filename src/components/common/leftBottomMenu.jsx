import React from 'react';
import { Link } from "react-router-dom";
import "./css/leftBottomMenu.css";

const LeftBottomMenu = () => {
  return (
    <div className="left_bottom_menu">
      <Link to="" className="left_menu_nav">Блог</Link>
      <Link to="" className="left_menu_nav">Разработчикам</Link>
      <Link to="" className="left_menu_nav">Реклама</Link>
      <div className="actions_menu_wrap">
        <div className="actions_menu_icon">
          <Link to="" className="left_menu_nav left_menu_more">Еще</Link>
        </div>
        <div className="actions_menu">
          <Link to="" className="actions_menu_item">О компании</Link>
          <Link to="" className="actions_menu_item">Вакансии</Link>
          <Link to="" className="actions_menu_item">Правовая информация</Link>
          <Link to="" className="actions_menu_item">Защита данных</Link>
          <Link to="" className="actions_menu_item">Центр безопасности</Link>
          <Link to="" className="actions_menu_item">Язык: русский</Link>
        </div>
      </div>
    </div>
  );
}
 
export default LeftBottomMenu;