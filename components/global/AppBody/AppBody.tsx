import React, { useEffect, useState } from "react";
import { useWindowSize } from "hooks";
import checkFlexGap from "theme/checkFlexGap";
import { Header, Footer } from "components/global";
import * as Styled from "./AppBody.styles";

function AppBody({ children }: Props) {
  const [top, setTop] = useState(0);
  const size = useWindowSize();
  const isFlexGapSupported = checkFlexGap();

  useEffect(() => {
    const el = document.querySelector(`#main`);
    if (!el) return;
    setTop(el.getBoundingClientRect().top);
  }, [size]);

  return (
    <>
      <Styled.Body
        className={`${isFlexGapSupported ? "" : "no-flex-gap"} a-bg-neutral00`}
      >
        <Header />
        <Styled.Main id="main" top={top} className="l-container-max">
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
