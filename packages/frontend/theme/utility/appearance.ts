// Utility appearance classes
// --------------------
import { css } from "styled-components";
import {
  aBgNeutral00,
  aBgCustom10,
  aBgCustom20,
  aBgNeutral80,
  aBgNeutral90,
  aButton,
} from "../mixins/appearance";

export default css`
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
    text-decoration: underline;
    cursor: pointer;
  }
`;
