// Utility layout classes
// --------------------
import { css } from "styled-components";
import { noFlexGapSupport } from "@wdp/lib/theme/mixins";
import { containerWidths } from "../base/variables";

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
  .l-container-max {
    max-width: calc(${containerWidths.max} + (var(--container-v-padding) * 2));
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-inline-start: var(--container-v-padding);
    padding-inline-end: var(--container-v-padding);
  }

  .l-container-wide {
    max-width: calc(${containerWidths.wide} + (var(--container-v-padding) * 2));
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-inline-start: var(--container-v-padding);
    padding-inline-end: var(--container-v-padding);
  }

  .l-container-wide--p-lg {
    padding-block-start: var(--container-padding-lg);
    padding-block-end: var(--container-padding-xlg);
  }

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

      ${noFlexGapSupport(`
        > * + * {
          margin-inline-start: var(--grid-column-gap);
        }
      `)}
    }

    &--gap-sm {
      gap: var(--grid-column-gap-sm);

      ${noFlexGapSupport(`
        > * + * {
          margin-inline-start: var(--grid-column-gap-sm);
        }
      `)}
    }
  }
`;
