import styled from "styled-components";

export const Section = styled.div`
  overflow: visible;
  display: flex;
  align-items: flex-start;
`;

export const ChildrenWrapper = styled.div`
  flex: 1 1 auto;
`;

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 0;
  height: calc(100vh - var(--container-padding-lg));
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  white-space: nowrap;

  &[hidden] {
    display: none;
  }
`;
