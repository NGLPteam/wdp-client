import React from "react";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import * as Styled from "./AppBody.styles";

function AppBody({ children }: Props) {
  return (
    <Styled.Body className="a-bg-neutral00">
      <AppHeader />
      <Styled.Main id="main">{children}</Styled.Main>
      <AppFooter />
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
}

export default AppBody;
