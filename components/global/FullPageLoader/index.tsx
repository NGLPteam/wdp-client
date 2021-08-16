import React, { useEffect, useState } from "react";
import { ProgressBar } from "components/atomic";
import * as Styled from "./FullPageLoader.styles";

/**
 * The full page loader is always located at the top of the page,
 * under the main navigation.
 */
export default function FullPageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(function avoidSSRComplaint() {
    // We don't display this in SSR mode, and it whines about it
    // So we wait for the browser to mount this before displaying it
    setVisible(true);
  }, []);

  if (typeof window === "undefined" || !visible) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <ProgressBar />
    </Styled.Wrapper>
  );
}
