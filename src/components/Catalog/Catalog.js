import React from "react";
import { StarIconSvg } from "../Icons";
import { CatalogItemFooter } from "./CatalogItemFooter";

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Catalog = ({ isActiveMenu }) => {
  return (
    <div className={!isActiveMenu ? "catalog catalogDisappear" : "catalog"}>
      {items.map((it) => {
        return (
          <div key={it} className="catalog-item">
            <img />
            <div className="catalog-item-text">
              Картина по номерам "Волк в облаках" 30х55 см
              <StarIconSvg />
            </div>
            <CatalogItemFooter isMobileVersion={isActiveMenu} />
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
