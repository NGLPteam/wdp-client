import React from "react";
import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { basePadding, aButton } from "theme/mixins/appearance";

const Button = styled.button<Props>`
  ${({ secondary }) => aButton(secondary)}

  ${tLabel("lg")}
  border-radius: ${pxToRem("6px")};
  padding: ${basePadding(3)} ${basePadding(8)};
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  secondary?: boolean;
}

export default Button;
