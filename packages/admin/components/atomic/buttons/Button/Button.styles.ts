import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { aButton } from "theme/mixins/appearance";

const Button = styled.button<Props>`
  ${({ $secondary }) => aButton($secondary)}

  ${tLabel("lg")}
  border-radius: ${pxToRem(6)};
  padding: ${pxToRem(12)} ${pxToRem(32)};
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  $secondary?: boolean;
}

export default Button;
