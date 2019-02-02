import React from "react";
import { Link } from "react-router-dom";
import "./css/ads.css";

const AdsBox = () => {
  return (
    <div className="ads_left">
      <div className="ads_ads_box3">
        <div className="ads_ad_box">
          <Link to="" className="ads_ad_box-link">
            <div className="ads_box_img">
              <img
                src="https://pp.userapi.com/c848416/v848416993/ff460/zOAA2qlKCKY.jpg"
                alt=""
                className="ads_ad_photo"
              />
              <div className="ads_ad_close_button">
                <i className="fa fa-close" />
              </div>
            </div>

            <div className="ads_ad_textbox">
              <div className="ads_ad_title">Бешеная скидка только сегодня!</div>
              <div className="ads_ad_domain">likecentre.ru</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdsBox;
