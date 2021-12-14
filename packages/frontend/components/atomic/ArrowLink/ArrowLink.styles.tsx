import styled from "styled-components";

export const Link = styled.a`
  display: inline-flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-xs);
  }
`;
