// Utility typography classes
// --------------------
import { css } from "styled-components";
import { tCopySmall, tLabel } from "../mixins/typography";

export default css`
  /* Labels */
  .t-label-lg {
    ${tLabel("lg")}
  }

  .t-label-sm {
    ${tLabel("sm")}
  }

  .t-label-mix {
    ${tLabel("mix")}
  }

  .t-copy-sm {
    ${tCopySmall}
  }

  .t-copy-light {
    color: var(--color-light);
  }

  .t-copy-lighter {
    color: var(--color-lighter);
  }

  .t-unstyled-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* Rich Text */
  .t-rte {
    a {
      text-decoration: underline;
    }

    > * + * {
      margin-block-start: 1.3em;
    }
  }
`;
