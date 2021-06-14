import React, { PropsWithChildren } from "react";

import * as Styled from "./styles";

import AppFooter from "components/global/AppFooter";
import AppHeader from "components/global/AppHeader";

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
