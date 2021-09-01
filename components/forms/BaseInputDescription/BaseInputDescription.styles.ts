import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Description = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-light);
  font-style: italic;
  padding-block-start: ${basePadding(2)};
`;
