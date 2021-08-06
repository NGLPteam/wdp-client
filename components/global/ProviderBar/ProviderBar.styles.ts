import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: ${basePadding(4)} var(--container-column-margin);
  text-align: center;
`;
