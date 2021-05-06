import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import GlobalStyles from "components/GlobalStyles";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Content children={children} />
        <Footer />
      </Container>
    </>
  );
}

interface LayoutProps extends PropsWithChildren<any> {

}

const Container = styled.section`
display: flex;
flex-direction: column;
min-height: 100vh;
max-height: 100vh;
`;

const Content = styled.main`
flex: 2 1 auto;
`