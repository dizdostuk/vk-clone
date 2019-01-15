import React from 'react';
import { Link } from "react-router-dom";
import "./css/navbarLeft.css";

const NavbarLeft = () => {
  return (
    <div id="side_bar" className="side_bar sticky_top">
      <div className="side_bar_inner">
        <nav>
          <ol>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i className="fa fa-home"></i></span>
                <span className="left_label">Моя страница</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i className="fa fa-hacker-news"></i></span>
                <span className="left_label">Новости</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i className="fa fa-envelope"></i></span>
                <span className="left_label">Сообщения</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i className="fa fa-user"></i></span>
                <span className="left_label">Друзья</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i className="fa fa-users"></i></span>
                <span className="left_label">Группы</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i class="fa fa-youtube"></i></span>
                <span className="left_label">Видео</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <div className="more_div"></div>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i class="fa fa-ruble"></i></span>
                <span className="left_label">Vk Pay</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <div className="more_div"></div>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i class="fa fa-shopping-bag"></i></span>
                <span className="left_label">Товары</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i class="fa fa-star"></i></span>
                <span className="left_label">Закладки</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i class="fa fa-file"></i></span>
                <span className="left_label">Документы</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="left_row">
                <span className="left_icon"><i class="fa fa-bullhorn"></i></span>
                <span className="left_label">Реклама</span>
                <span className="left_count_wrap">
                  <div className="left_count_sign">0</div>
                </span>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
 
export default NavbarLeft;