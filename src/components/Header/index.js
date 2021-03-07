import React, { useState } from "react";
import Header from "./Header";
import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENCIES } from "./queries";

const HeaderContainer = () => {
  const { data, loading } = useQuery(GET_CURRENCIES);
  const [isAppearСurrencyСourse, setIsApperaСurrencyСourse] = useState(false);
  const userTouch = () => {
    setIsApperaСurrencyСourse(!isAppearСurrencyСourse);
  };

  return (
    <Header
      isAppearСurrencyСourse={isAppearСurrencyСourse}
      userTouch={userTouch}
      data={data}
      loading={loading}
    />
  );
};
export default HeaderContainer;
