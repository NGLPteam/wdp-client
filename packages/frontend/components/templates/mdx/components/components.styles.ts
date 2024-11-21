import styled from "styled-components";

export const MetadataLabel = styled.dt`
  display: block;
  padding-block-end: var(--padding-xs);
  font-weight: var(--font-weight-medium);

  &:not(:first-child) {
    margin-block-start: var(--padding-lg);
  }
`;

export const MetadataValue = styled.dd`
  color: var(--color-light);
`;
