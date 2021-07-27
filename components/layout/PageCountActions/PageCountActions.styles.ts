import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: ${basePadding(10)};
  padding-block-end: ${basePadding(2)};
  border-bottom: 1px solid var(--border-color);
`;

export const Count = styled.div`
  padding-inline-end: ${basePadding(3)};
`;

export const Actions = styled.div``;
