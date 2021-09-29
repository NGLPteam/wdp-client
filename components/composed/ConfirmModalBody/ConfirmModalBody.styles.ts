import styled, { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { respond } from "theme/mixins/base";
import Button from "components/atomic/buttons/Button";
import { pxToRem } from "theme/mixins/functions";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block-start: ${basePadding(10)};
  gap: 15px;

  ${respond(
    css`
      flex-direction: column;
    `,
    50
  )}
`;

export const ConfirmButton = styled(Button)`
  width: ${pxToRem(197)};
  max-width: 90%;
`;
