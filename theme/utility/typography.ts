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
  }

  .t-align-right {
    text-align: right;
  }

  .t-align-center {
    text-align: center;
  }

  .t-align-left {
    text-align: left;
  }

  /* Rich Text */
  .t-rte {
    a {
      ${tLink()}
    }

    > * + * {
      margin-top: 1.3em;
    }

    ul,
    ol {
      ${tList}
    }
  }
`;
