import React from "react";

export const CurrencyСourse = ({ isAppearСurrencyСourse }) => {
  console.log(isAppearСurrencyСourse);
  return (
    <div
      className={
        isAppearСurrencyСourse ? "currencyСourse appear" : "currencyСourse"
      }
    ></div>
  );
};
