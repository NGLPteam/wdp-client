import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Wrapper = styled.div`
  min-height: ${basePadding(10)};
  padding-bottom: ${basePadding(2)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Count = styled.div`
  padding-inline-end: ${basePadding(3)};
`;

export const Actions = styled.div``;
