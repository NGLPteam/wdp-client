"use client";

import LoadingSpinner from "../LoadingSpinner";
import * as Styled from "./LoadingPage.styles";

export default function LoadingPage() {
  return (
    <Styled.Wrapper>
      <LoadingSpinner />
    </Styled.Wrapper>
  );
}
