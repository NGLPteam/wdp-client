// Utility typography classes
// --------------------
import { css } from "styled-components";
import { tLabel } from "theme/mixins/typography";

export default css`
  /* Labels */
  .t-label-sm {
    ${tLabel("sm")}
  }

  .t-label-md {
    ${tLabel("md")}
  }

  .t-label-lg {
    ${tLabel("lg")}
  }

  .t-copy-sm {
    font-size: var(--font-size-sm);
  }
`;
