import React from "react";
import SignIn from "components/scaffolding/Auth/SignIn";
import SignOut from "components/scaffolding/Auth/SignOut";
import * as Styled from "./Header.styles";

const HeaderAccount = () => {
  return (
    <Styled.Item>
      <SignIn />
      <SignOut />
    </Styled.Item>
  );
};

export default HeaderAccount;
