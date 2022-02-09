// Utility typography classes
// --------------------
import { css } from "styled-components";
import { tCopy, tCopySmall, tLabel, tHeading } from "../mixins/typography";
import { aLink } from "theme/mixins";

export default css`
  /* Headings - only add if needed */
  .t-h3 {
    ${tHeading(3)}
  }

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

  /* Body copy */
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
    a:not([class]) {
      ${aLink}
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
