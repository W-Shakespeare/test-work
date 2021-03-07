import React from "react";
import { BackIconSvg, ExpandIconSvg, FinanceIconSvg } from "../Icons";
import { CurrencyСourse } from "./CurrencyСourse";

const Header = ({ userTouch, isAppearСurrencyСourse, data, loading }) => {
  return (
    <div className="header">
      <div className="header-back">
        <BackIconSvg />
        <div className="header-backText">Назад</div>
      </div>
      <div className="header-finance" onClick={userTouch}>
        <div className="header-finance-text">
          <div className="text">1 265 $</div>
        </div>
        <div className="header-finance-svg">
          <FinanceIconSvg background="blue" />
        </div>
      </div>
      <CurrencyСourse
        isAppearСurrencyСourse={isAppearСurrencyСourse}
        data={data}
        loading={loading}
      />
      <div className="header-avatar">
        <span>
          <img
            src={
              "https://www.ivi.ru/titr/uploads/2016/04/25/3eb93716942fd1f45560c7972b0ae09f.jpg/1400x0"
            }
          ></img>
        </span>
        <div className="header-avatar-svg">
          <ExpandIconSvg />
        </div>
      </div>
      <div className="header-menu">
        <div className="header-menu-text">Меню</div>
        <div className="header-menu-svg">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.75984"
              y1="1.29289"
              x2="18.7598"
              y2="18.2929"
              stroke="#BFBFBF"
              stroke-width="2"
            />
            <line
              x1="1.24016"
              y1="18.2929"
              x2="18.2402"
              y2="1.29289"
              stroke="#BFBFBF"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
