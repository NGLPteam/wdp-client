import styled from "styled-components";

export const Wrapper = styled.div`
  padding-block-end: var(--padding-xs);

  > * + * {
    display: block;
    margin-block-start: var(--padding-sm);
  }
`;
