import React from "react";
import { BackIconSvg, ExpandIconSvg, FinanceIconSvg } from "../Icons";
import { CurrencyСourse } from "./CurrencyСourse";

const Header = ({
  userTouch,
  isAppearСurrencyСourse,
  data,
  loading,
  isActiveMenu,
}) => {
  return (
    <div className={!isActiveMenu ? "header" : "headerAppearOrDisappear"}>
      <div className="header-back">
        <BackIconSvg />
        <div className="header-backText">Назад</div>
      </div>
      <div className="header-finance">
        <div className="header-finance-text">
          <button onClick={userTouch}>1 265 $</button>
        </div>
        <div className="header-finance-svg">
          <FinanceIconSvg background="#727478" />
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
    </div>
  );
};

export default Header;
