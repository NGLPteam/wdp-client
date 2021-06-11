import React, { PropsWithChildren } from "react";

import GlobalStyles from "components/GlobalStyles";
import * as Styled from "./styles";

// TODO: Style & move these to their respective global folder, AppHeader and AppFooter
import ServiceProviderBar from "../ServiceProviderBar";
import Footer from "../../Layout/Footer";
import AppHeader from "../AppHeader";

function AppBody({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <Styled.Body>
        <AppHeader />
        <Styled.Main children={children} />
        <Footer />
      </Styled.Body>
    </>
  );
}

interface Props extends PropsWithChildren<any> {}

export default AppBody;
