import React from "react";
import "./NavBar.css";
import {
  FinanceIconSvg,
  FlimcorIconSvg,
  SuppliersIconSvg,
  MenuIconSvg,
  OrderIconSvg,
  UsersIconSvg,
  UsersOrderIconSvg,
  MenuIconSvgOpen,
  MenuIconSvgClose,
} from "../Icons";

const NavBar = ({ appearOrDisappearCatalog, isActiveMenu }) => {
  return (
    <>
      {isActiveMenu ? (
        <div className="navBarAppearOrDisappear">
          <div onClick={appearOrDisappearCatalog} className="navBar-menuClose">
            <div className="navBar-menuClose-svg">
              <MenuIconSvgClose />
            </div>
          </div>
        </div>
      ) : (
        <div className="navBar">
          {!isActiveMenu && (
            <div className="navBarHeader">
              <div className="flimcorLogo">
                <FlimcorIconSvg />
                <div className="text">flimcor</div>
              </div>
            </div>
          )}

          <div className="menuIcon">
            <MenuIconSvg />
            <div className="navBarText">Каталог</div>
          </div>

          <div className="order">
            <OrderIconSvg />
            <div className="navBarText orderText">Заказы</div>
          </div>

          <div className="usersOrder">
            <UsersOrderIconSvg />
            <div className="navBarText usersOrderText">
              Заказы пользователей
            </div>
          </div>
          <div className="users">
            <UsersIconSvg />
            <div className="navBarText usersText">Пользователи</div>
          </div>
          <div className="suppliers">
            <SuppliersIconSvg />
            <div className="navBarText suppliersText">Поставщики</div>
          </div>
          <div className="finance">
            <FinanceIconSvg background="white" />
            <div className="navBarText financeText">Финансы</div>
          </div>
          <div onClick={appearOrDisappearCatalog} className="navBar-menu">
            <div className="navBar-menu-text">Меню</div>
            <div className="navBar-menu-svg">
              <MenuIconSvgOpen />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavBar;
