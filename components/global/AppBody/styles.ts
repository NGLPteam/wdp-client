import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  max-width: 100vw;
`;

export const Main = styled.main`
  flex: 2 1 auto;
  padding: ${basePadding(8)} var(--container-column-margin);
  margin: 0 auto;
  width: 100%;
  max-width: calc(var(--container-max) + (var(--container-column-margin) * 2));
`;
