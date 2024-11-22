import styled from "styled-components";
import { respond } from "theme/mixins";

export const Inner = styled.div`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-md);

  ${respond(
    `
    justify-content: center;
    padding-block-start: var(--container-padding-lg);
    padding-block-end: var(--container-padding-lg);

    > * + * {
      margin-inline-start: var(--grid-column-gap-lg);
    }
    `,
    70,
  )}
`;
