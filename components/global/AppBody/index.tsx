import React from "react";
import * as Styled from "./styles";
import { Header, Footer } from "components/global";
import checkFlexGap from "theme/checkFlexGap";

function AppBody({ children }: Props) {
  const isFlexGapSupported = checkFlexGap();

  return (
    <>
      <Styled.Body
        className={`${isFlexGapSupported ? "" : "no-flex-gap"} a-bg-neutral00`}
      >
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
