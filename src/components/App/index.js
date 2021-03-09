import React, { useState, useEffect } from "react";
import App from "./App";
import "./App.css";
import "../mediaStyle.css";

const AppContainer = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const openMenu = () => {
    setIsActiveMenu(true);
  };
  const closeMenu = () => {
    setIsActiveMenu(false);
  };

  const appearOrDisappearCatalog = () => {
    isActiveMenu ? closeMenu() : openMenu();
  };

  useEffect(() => {
    //if the user will resize the screen <=572
    // menu return to initial state
    window.addEventListener(
      `resize`,
      (event) => {
        console.log(document.body.clientWidth);
        if (document.body.clientWidth >= 572) {
          setIsActiveMenu(false);
        }
      },
      false
    );
  }, []);
  return (
    <App
      isActiveMenu={isActiveMenu}
      appearOrDisappearCatalog={appearOrDisappearCatalog}
    />
  );
};
export default AppContainer;
