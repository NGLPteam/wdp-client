import styled from "styled-components";
import Button from "components/atomic/buttons/Button";
import { pxToRem } from "theme/mixins/functions";

export const ButtonWrapper = styled.div`
  display: flex;
  flex: wrap;
  justify-content: space-between;
  padding-block-start: ${pxToRem(40)};
  gap: 15px;
`;

export const ConfirmButton = styled(Button)`
  flex: 1 1 auto;
`;
