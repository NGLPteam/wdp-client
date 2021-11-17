import styled from "styled-components";

export const Wrapper = styled.span`
  > * + * {
    margin-inline-start: var(--padding-rg);
  }
`;
