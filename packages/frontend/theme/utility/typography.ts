// Utility typography classes
// --------------------
import { css } from "styled-components";
import { tCopy, tCopySmall, tLabel } from "../mixins/typography";

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

  .t-copy {
    ${tCopy}
  }

  .t-copy-sm {
    ${tCopySmall}
  }

  .t-copy-medium {
    font-weight: var(--font-weight-medium);
  }

  .t-copy-light {
    color: var(--color-light);
  }

  .t-copy-lighter {
    color: var(--color-lighter);
  }

  .t-copy-italic {
    font-style: italic;
  }

  .t-unstyled-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .t-capitalize {
    text-transform: capitalize;
  }

  /* Rich Text */
  .t-rte {
    a {
      text-decoration: underline;
    }

    > * + * {
      margin-block-start: 1.3em;
    }

    ul,
    ol {
      padding-inline-start: 1rem;
    }

    blockquote {
      border-inline-start: 3px solid var(--color-custom60);
      padding-inline-start: 1rem;
    }
  }
`;
