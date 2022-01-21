import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  > * + * {
    margin-block-start: var(--padding-md);
  }
`;
