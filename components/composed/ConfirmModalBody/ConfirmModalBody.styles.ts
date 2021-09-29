import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import Button from "components/atomic/buttons/Button";

export const ButtonWrapper = styled.div`
  display: flex;
  flex: wrap;
  justify-content: space-between;
  padding-block-start: ${basePadding(10)};
  gap: 15px;
`;

export const ConfirmButton = styled(Button)`
  flex: 1 1 auto;
`;
