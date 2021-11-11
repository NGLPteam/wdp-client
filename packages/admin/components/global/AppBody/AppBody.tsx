import React from "react";
import { usePageContext } from "hooks";
import { checkFlexGap } from "helpers";
import { Header, Footer } from "components/global";
import { ProgressBar } from "components/atomic";
import * as Styled from "./AppBody.styles";

function AppBody({ children }: Props) {
  const isFlexGapSupported = checkFlexGap();
  const { loading } = usePageContext();

  return (
    <>
      <Styled.Body
        className={`${isFlexGapSupported ? "" : "no-flex-gap"} a-bg-neutral00`}
      >
        <Header />
        <ProgressBar loading={loading} />
        <Styled.Main id="main" className="l-container-max">
          {children}
        </Styled.Main>
        <Footer />
      </Styled.Body>
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

export default AppBody;
