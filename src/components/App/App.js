import React from "react";
import CatalogContainer from "../Catalog";
import HeaderContainer from "../Header";
import NavBar from "../NavBar";
//test git
function App({ isActiveMenu, appearOrDisappearCatalog }) {
  return (
    <>
      <NavBar
        appearOrDisappearCatalog={appearOrDisappearCatalog}
        isActiveMenu={isActiveMenu}
      />
      <div className="wrapperContent">
        <HeaderContainer isActiveMenu={isActiveMenu} />
        <CatalogContainer isActiveMenu={isActiveMenu} />
      </div>
    </>
  );
}

export default App;
