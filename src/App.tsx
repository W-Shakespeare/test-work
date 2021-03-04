import React from "react";
// import "./App.css";
import CatalogContainer from "./components/Catalog";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="wrapperContent">
        <Header />
        <CatalogContainer />
      </div>
    </>
  );
}

export default App;
