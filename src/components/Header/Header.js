import React from "react";
import { BackIconSvg, ExpandIconSvg, FinanceIconSvg } from "../Icons";
import { CurrencyСourse } from "./CurrencyСourse";

const Header = ({ userTouch, isAppearСurrencyСourse }) => {
  return (
    <div className="header">
      <div className="header-back">
        <BackIconSvg />
        <div className="header-backText">Назад</div>
      </div>
      <div className="header-finance" onClick={userTouch}>
        <div className="header-finance-text">
          <div className="text">1265 $</div>
        </div>
        <div className="header-finance-svg">
          <FinanceIconSvg background="blue" />
        </div>

        <CurrencyСourse isAppearСurrencyСourse={isAppearСurrencyСourse} />
      </div>
      <div className="header-avatar">
        <img
          src="https://www.ivi.ru/titr/uploads/2016/04/25/3eb93716942fd1f45560c7972b0ae09f.jpg/1400x0"
          alt=""
        />
        <div className="header-avatar-svg">
          <ExpandIconSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
