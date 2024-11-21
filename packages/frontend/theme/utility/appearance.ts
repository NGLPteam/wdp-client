// Utility appearance classes
// --------------------
import { aHidden } from "@wdp/lib/theme/mixins";
import { css } from "styled-components";
import { encodedIconClose } from "components/svgs/icons/Close";
import { baseColors } from "theme/base/variables";
import {
  aBgNeutral00,
  aBgCustom10,
  aBgCustom20,
  aBgNeutral80,
  aBgNeutral90,
  aButton,
  aLink,
  aLinkText,
} from "../mixins/appearance";

export default css`
  .a-hidden {
    ${aHidden}
  }

  .a-bg-neutral00 {
    ${aBgNeutral00()}
  }

  .a-bg-custom10 {
    ${aBgCustom10()}
  }

  .a-bg-custom20 {
    ${aBgCustom20()}
  }

  .a-bg-neutral80 {
    ${aBgNeutral80()}
  }

  .a-bg-neutral90 {
    ${aBgNeutral90()}
  }

  .a-button-primary {
    ${aButton("primary", "lg")}
  }

  /* Because the aButton mixin returns all properties for a button, the small button gets its own class */
  .a-button-primary-sm {
    ${aButton("primary", "sm")}
  }

  .a-button-secondary {
    ${aButton("secondary", "lg")}
  }

  .a-button-secondary-sm {
    ${aButton("secondary", "sm")}
  }

  .a-link {
    ${aLink}
  }

  .a-link-text {
    ${aLinkText}
  }

  .a-color {
    color: var(--color-base);
  }

  .a-color-light {
    color: var(--color-light);
  }

  .a-color-lighter {
    color: var(--color-lighter);
  }

  input::-webkit-search-cancel-button {
    appearance: none;
    cursor: pointer;
    position: relative;
    width: 1rem;
    height: 1rem;
    background: url(${encodedIconClose({ fill: baseColors.neutral70 })}) center
      no-repeat;
    background-size: cover;
  }
`;
