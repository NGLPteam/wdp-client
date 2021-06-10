import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import GlobalStyles from "components/GlobalStyles";

// TODO: Style & move these to their respective global folder, AppHeader and AppFooter
import ServiceProviderBar from "../ServiceProviderBar";
import Footer from "../../Layout/Footer";
import AppHeader from "../AppHeader";

function AppBody({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <StyledBody>
        <AppHeader />
        <StyledMain children={children} />
        <Footer />
      </StyledBody>
    </>
  );
}

interface Props extends PropsWithChildren<any> {}

export default AppBody;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  max-width: 100vw;
`;

const StyledMain = styled.main`
  flex: 2 1 auto;
`;
