import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  > * + * {
    margin-block-start: var(--padding-md);
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`;
