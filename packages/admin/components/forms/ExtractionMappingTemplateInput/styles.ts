import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import ButtonControl from "components/atomic/buttons/ButtonControl";

export const Reset = styled(ButtonControl)`
  margin-block-start: ${pxToRem(8)};
`;
