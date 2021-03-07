import React from "react";
import {
  FinanceIconSvg,
  FlimcorIconSvg,
  SuppliersIconSvg,
  MenuIconSvg,
  OrderIconSvg,
  UsersIconSvg,
  UsersOrderIconSvg,
} from "../Icons";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="flimcorLogo">
        <FlimcorIconSvg />
        <div className="text">flimcor</div>
      </div>

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
        <div className="navBarText usersOrderText">Заказы пользователей</div>
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
    </div>
  );
};
export default NavBar;
