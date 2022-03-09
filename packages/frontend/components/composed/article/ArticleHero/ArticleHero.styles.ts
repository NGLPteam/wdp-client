import styled from "styled-components";

export const DataBlock = styled.div`
  > * + * {
    display: block;
    padding-block-start: var(--padding-xs);
  }
`;
