// Base Appearance
// --------------------
import { css } from "styled-components";
import { encodedIconClose } from "components/svgs/icons/Close";
import { baseColors } from "theme/base/variables";

export default css`
  hr {
    border: none;
    border-bottom: 1px solid var(--border-color);
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
