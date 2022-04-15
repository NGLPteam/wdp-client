import styled from "styled-components";

export const Filters = styled.div`
  max-width: 278px;

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const FormButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-block-start: var(--padding-xl);
`;
