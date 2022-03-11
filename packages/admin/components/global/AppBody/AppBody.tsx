import React from "react";
import * as Styled from "./AppBody.styles";
import { usePageContext } from "hooks";
import { checkFlexGap } from "helpers";
import { Header, Footer } from "components/global";
import { ProgressBar } from "components/atomic";
import { RouteGuard } from "components/auth";

function AppBody({ children }: Props) {
  const isFlexGapSupported = checkFlexGap();
  const { loading } = usePageContext();

  return (
    <Styled.Body
      className={`${isFlexGapSupported ? "" : "no-flex-gap"} a-bg-neutral00`}
    >
      <Header />
      <ProgressBar loading={loading} />
      <Styled.Main id="main" className="l-container-max">
        <RouteGuard>{children}</RouteGuard>
      </Styled.Main>
      <Footer />
    </Styled.Body>
  );
}

interface Props {
  children: React.ReactNode;
}

export default AppBody;
