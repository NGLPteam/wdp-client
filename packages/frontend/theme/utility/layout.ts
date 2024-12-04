// Utility layout classes
// --------------------
import { css } from "styled-components";

const COLUMNS = 12;

function createItems() {
  let styles = "";

  for (let i = 0; i < 20; i += 1) {
    styles += `
      &--${i} {
        grid-column: span ${i};
      }
    `;
  }

  return css`
    ${styles}
  `;
}

export default css`
  .l-grid {
    display: grid;
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
    grid-template-columns: repeat(${COLUMNS}, 1fr);

    &--center {
      align-items: center;
    }

    &__item {
      /* All grid items, if not defined, should span the full grid width */
      grid-column: span 1 / -1;

      ${createItems()}

      &--center {
        justify-self: center;
      }

      &--right {
        justify-self: end;
      }
    }
  }

  .l-flex {
    display: flex;
    flex-wrap: wrap;

    &--align-center {
      align-items: center;
    }

    &--justify-end {
      justify-content: flex-end;
    }

    &--gap {
      gap: var(--grid-column-gap);

      > * + * {
        margin-inline-start: var(--grid-column-gap);
      }
    }

    &--gap-sm {
      > * + * {
        margin-inline-start: var(--grid-column-gap-sm);
      }
    }
  }
`;
