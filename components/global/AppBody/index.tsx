import React from "react";
import * as Styled from "./styles";
import { Header, Footer } from "components/global";

function AppBody({ children }: Props) {
  return (
    <>
      <Styled.Body className="a-bg-neutral00">
        <Header />
        <Styled.Main>{children}</Styled.Main>
        <Footer />
      </Styled.Body>
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

export default AppBody;
