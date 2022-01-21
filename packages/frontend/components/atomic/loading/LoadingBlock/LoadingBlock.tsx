import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import * as Styled from "./LoadingBlock.styles";

export default function LoadingBlock({ className, label }: Props) {
  return (
    <Styled.Wrapper className={className}>
      <LoadingSpinner label={label} />
    </Styled.Wrapper>
  );
}

interface Props {
  className?: string;
  label?: string;
}
