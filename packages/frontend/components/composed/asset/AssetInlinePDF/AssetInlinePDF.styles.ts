import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  scroll-behavior: smooth;

  > * + * {
    margin-block-start: var(--padding-md);
  }
`;

export const DocumentWrapper = styled.div`
  display: flex;
`;

export const PagesWrapper = styled.div`
  max-width: 100%;
  flex: 1 1 auto;
`;

export const BackToTopWrapper = styled.div`
  position: sticky;
  bottom: var(--padding-lg);
  text-align: right;
  padding-inline-end: var(--padding-rg);
`;
