import styled from "styled-components";

export const Body = styled.div`
  min-block-size: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Main = styled.main<MainProps>`
  flex-grow: 1;
  width: 100%;
  --main-top-pos: ${({ top }) => top}px;
`;

interface MainProps {
  top: number;
}
