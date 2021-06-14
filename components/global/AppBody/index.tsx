import React, { PropsWithChildren } from "react";

import * as Styled from "./styles";

import { AppHeader, AppFooter } from "components/global";

function AppBody({ children }: Props) {
  return (
    <>
      <Styled.Body>
        <AppHeader />
        <Styled.Main>{children}</Styled.Main>
        <AppFooter />
      </Styled.Body>
    </>
  );
}

type Props = PropsWithChildren<any>;

export default AppBody;
