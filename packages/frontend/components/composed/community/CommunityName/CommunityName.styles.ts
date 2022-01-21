import styled from "styled-components";

export const Wrapper = styled.div`
  > * + * {
    padding-inline-start: var(--padding-rg);
  }
`;

export const Logo = styled.figure`
  height: 40px;
  min-width: 40px;
  display: block;
`;
