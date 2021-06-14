import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
    <Loader>
      <LoaderContent>Loading...</LoaderContent>
    </Loader>
  );
}

const Loader = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: columns;
  align-items: center;
`;

const LoaderContent = styled.div`
  text-align: center;
`;
