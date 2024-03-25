"use client";

import LoadingSpinner from "../LoadingSpinner";
import * as Styled from "./LoadingBlock.styles";

export default function LoadingBlock({ className }: { className?: string }) {
  return (
    <Styled.Wrapper className={className}>
      <LoadingSpinner />
    </Styled.Wrapper>
  );
}
