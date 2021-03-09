import React from "react";
import Catalog from "./Catalog";
import "./Catalog.css";
// import "./App.css";

const CatalogContainer = ({ isActiveMenu }) => {
  return <Catalog isActiveMenu={isActiveMenu} />;
};
export default CatalogContainer;
