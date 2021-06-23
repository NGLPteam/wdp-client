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
  width: 100%;
  min-height: 80px;
  display: grid;
  align-items: start;
`;

const LoaderContent = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 1em auto;
`;
