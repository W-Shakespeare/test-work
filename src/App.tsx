import React from "react";
// import "./App.css";
import CatalogContainer from "./components/Catalog";
import HeaderContainer from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="wrapperContent">
        <HeaderContainer />
        <CatalogContainer />
      </div>
    </>
  );
}

export default App;
