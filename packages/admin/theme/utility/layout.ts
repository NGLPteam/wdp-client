// Utility layout classes
// --------------------
import { css } from "styled-components";
import { noFlexGapSupport, respond } from "../mixins/base";
const COLUMNS = 12;

function createItems() {
  let styles = "";

  for (let i = 0; i < 20; i += 1) {
    styles += `
      &--${i} {
        /* Since the columns are not defined until breakpoint 70,
        the grid items auto-flow */
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

    /* Only set a 12 column grid for desktop views */
    ${respond(`grid-template-columns: repeat(${COLUMNS}, 1fr);`, 70, "min")}

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

      ${noFlexGapSupport(`
        margin-inline-start: var(--grid-column-gap);
      `)}
    }

    &--gap-sm {
      gap: var(--grid-column-gap-sm);

      ${noFlexGapSupport(`
        margin-inline-start: var(--grid-column-gap-sm);
      `)}
    }

    &--col {
      flex-direction: column;
    }
  }

  .l-container-max {
    max-width: calc(
      var(--container-max) + (var(--container-column-margin) * 2)
    );
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-inline-start: var(--container-column-margin);
    padding-inline-end: var(--container-column-margin);
  }

  .l-page-loading {
    min-height: 200px;

    > * {
      min-height: 80px;
    }
  }
`;
