import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [isAppearСurrencyСourse, setIsApperaСurrencyСourse] = useState(false);
  const userTouch = () => {
    setIsApperaСurrencyСourse(!isAppearСurrencyСourse);
  };

  return (
    <Header
      isAppearСurrencyСourse={isAppearСurrencyСourse}
      userTouch={userTouch}
    />
  );
};
export default HeaderContainer;
