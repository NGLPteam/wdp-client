import React, { PropsWithChildren } from "react";

import * as Styled from "./styles";

import AppFooter from "components/global/AppFooter";
import AppHeader from "components/global/AppHeader";

function AppBody({ children }: Props) {
  return (
    <>
      <Styled.Body>
        <AppHeader />
        <Styled.Main children={children} />
        <AppFooter />
      </Styled.Body>
    </>
  );
}

interface Props extends PropsWithChildren<any> {}

export default AppBody;
