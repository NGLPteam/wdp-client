// Utility layout classes
// --------------------
import { css } from "styled-components";
import { respond } from "theme/mixins/base";
const COLUMNS = 12;

function createItems() {
  let styles = "";

  for (let i = 0; i < 20; i += 1) {
    styles += `
      &--${i} {
        // Since the columns are not defined until breakpoint 70,
        // the grid items auto-flow
        ${respond(`grid-column: span ${i};`, 30, "min")}
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
    row-gap: var(--grid-column-gap);
    column-gap: var(--grid-column-gap);

    // Only set a 12 column grid for desktop views
    ${respond(`grid-template-columns: repeat(${COLUMNS}, 1fr);`, 70, "min")}

    &--center {
      align-items: center;
    }

    &__item {
      // All grid items, if not defined, should span the full grid width
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
  }

  .l-container-max {
    max-width: var(--container-max);
    margin-left: auto;
    margin-right: auto;
  }
`;
