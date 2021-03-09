import React from "react";
import { Spin, Checkbox } from "antd";
import { TypeOfMoneyIconSvg } from "../Icons/TypeOfMoneyIconSvg";
import { InfoIconSvg } from "../Icons";

export const CurrencyСourse = ({ isAppearСurrencyСourse, data, loading }) => {
  console.log(isAppearСurrencyСourse);
  if (!loading) {
    console.log("DATA", data.currencies);
  }
  return (
    <div
      className={
        isAppearСurrencyСourse ? "currencyСourse appear" : "currencyСourse"
      }
    >
      {loading ? (
        <Spin />
      ) : (
        <>
          <div className="currencyСourse-header">
            <div className="textFinance">Мої фінанси</div>
            <div className="amountFinance">$ 854.1</div>
          </div>
          <div
            className={
              isAppearСurrencyСourse
                ? "currencyСourse-body appear2"
                : "currencyСourse-body"
            }
          >
            <div className="wrapper">
              <div>Основна валюта</div>
              <InfoIconSvg />
            </div>
            {data.currencies.map((it) => {
              return (
                <div key={it._id} className="items">
                  <Checkbox> </Checkbox>
                  <TypeOfMoneyIconSvg type={it.badge} />
                  <div className="itemsName">{`${it.name} ${it.value}`}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
