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
  .grid {
    display: grid;
    grid-template-columns: repeat(${COLUMNS}, 1fr);
    column-gap: var(--grid-column-gap);

    &__item {
      grid-column: span ${COLUMNS};

      ${createItems()}

      &--center {
        justify-self: center;
      }

      &--right {
        justify-self: end;
      }
    }
  }

  .flex {
    display: flex;
    flex-wrap: wrap;

    &--align-center {
      align-items: center;
    }
  }
`;
