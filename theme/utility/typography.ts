// Utility typography classes
// --------------------
import { css } from "styled-components";

export default css`
  /* Labels */
  .t-label-sm,
  .t-label-md,
  .t-label-lg {
    text-transform: uppercase;
    font-weight: var(--font-weight-semibold);
    letter-spacing: 1px;
  }

  .t-label-sm {
    font-size: var(--font-size-label-sm);
    line-height: var(--line-height-label-sm);
  }

  .t-label-md {
    font-size: var(--font-size-label-md);
    line-height: var(--line-height-label-md);
  }

  .t-label-lg {
    font-size: var(--font-size-label-lg);
    line-height: var(--line-height-label-lg);
  }
`;
