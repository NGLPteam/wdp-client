// Utility typography classes
// --------------------
import { css } from "styled-components";
import { tLabel, tLink, tList } from "theme/mixins/typography";

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
    font-weight: var(--font-weight-base);
    text-transform: none;
  }

  .t-align-right {
    text-align: end;
  }

  .t-align-center {
    text-align: center;
  }

  .t-align-left {
    text-align: start;
  }

  .t-capitalize {
    text-transform: capitalize;
  }

  /* Rich Text */
  .t-rte {
    a {
      ${tLink()}
    }

    > * + * {
      margin-block-start: 1.3em;
    }

    ul,
    ol {
      ${tList}
    }
  }
`;
