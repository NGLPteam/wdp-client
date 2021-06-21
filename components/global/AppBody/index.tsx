import React from "react";
import * as Styled from "./styles";
import { AppHeader, AppFooter } from "components/global";

function AppBody({ children }: Props) {
  return (
    <>
      <Styled.Body className="a-bg-neutral00">
        <AppHeader />
        <Styled.Main>{children}</Styled.Main>
        <AppFooter />
      </Styled.Body>
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

export default AppBody;
