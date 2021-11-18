import React from "react";
import { pxToRem } from "@wdp/lib/theme/functions";
import * as Styled from "./SearchButton.styles";
import { IconFactory } from "components/factories";

export default function SearchButton({ size = "sm" }: Props) {
  const imageSize = size === "sm" ? 32 : 72;
  const style = {
    "--search-button-size": `${pxToRem(imageSize)}`,
  } as React.CSSProperties;

  return (
    <Styled.ButtonWrapper type="button" style={style}>
      <IconFactory icon="search" />
    </Styled.ButtonWrapper>
  );
}

interface Props {
  size?: "sm" | "lg";
}
