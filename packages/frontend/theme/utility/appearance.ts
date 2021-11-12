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
    ${aButton("primary")}
  }

  .a-button-secondary {
    ${aButton("secondary")}
  }

  .a-link {
    text-decoration: underline;
    cursor: pointer;
  }
`;
