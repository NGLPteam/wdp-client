import styled from "styled-components";
import { BaseArrayListItem } from "../BaseArrayList";

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const DirectionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-align: left;

  > svg {
    flex: 0 0 auto;
  }
`;

export const OrderListItem = styled(BaseArrayListItem)<{ $invalid?: boolean }>`
  --button-background: ${({ $invalid }) =>
    $invalid ? `var(--redtint)` : `var(--background-light)`};
  --accent-color: ${({ $invalid }) =>
    $invalid ? `var(--neutral80)` : `var(--brand100)`};
  --Item-hover-color: ${({ $invalid }) =>
    $invalid ? `var(--reddark)` : `var(--brand100)`};
`;
