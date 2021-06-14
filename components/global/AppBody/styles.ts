import styled from "styled-components";

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
  padding: 20px var(--container-column-margin);
  margin: 0 auto;
  width: 100%;
  max-width: var(--container-max);
`;
