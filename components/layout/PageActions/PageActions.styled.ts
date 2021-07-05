import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Wrapper = styled.div`
  padding-bottom: ${basePadding(4)};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${basePadding(3)};
  align-items: center;
  justify-content: flex-end;
`;
