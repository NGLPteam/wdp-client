import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import * as Styled from "./LoadingBlock.styles";

export default function LoadingBlock({ className, label, style }: Props) {
  return (
    <Styled.Wrapper className={className} style={style}>
      <LoadingSpinner label={label} />
    </Styled.Wrapper>
  );
}

interface Props {
  className?: string;
  label?: string;
  style?: React.CSSProperties;
}
