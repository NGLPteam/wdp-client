import styled, { css } from "styled-components";
import { respond } from "theme/mixins/base";
import FormGrid from "./FormGrid";
type FormGridProps = React.ComponentProps<typeof FormGrid>;

export const Grid = styled.div<GridProps>`
  display: grid;
  row-gap: var(--form-row-gap);
  column-gap: var(--form-column-gap);
  padding-block-start: var(--form-group-padding-top);
  padding-block-end: var(--form-group-padding-bottom);

  ${({ twoColumns }) =>
    twoColumns &&
    css`
      /* Set a 12 column grid for desktop views */
      ${respond(`grid-template-columns: repeat(2, 1fr);`, 70, "min")}
    `}

  h2 + & {
    padding-block-start: var(--form-row-gap);
  }
`;

type GridProps = Pick<FormGridProps, "twoColumns">;
