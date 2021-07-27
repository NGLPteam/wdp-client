import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Body = styled.div`
  min-block-size: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: ${basePadding(8)} var(--container-column-margin);
  margin: 0 auto;
  width: 100%;
  max-width: calc(var(--container-max) + (var(--container-column-margin) * 2));
`;
