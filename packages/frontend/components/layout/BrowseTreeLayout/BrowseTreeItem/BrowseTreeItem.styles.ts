import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { fluidScale } from "theme/mixins";
// import { IconFactory } from "components/factories";

export const Row = styled.div<{ $level?: number }>`
  --BrowseTreeItem-row-margin-left: ${fluidScale("50px", "25px")};

  position: relative;
  margin-inline-start: ${({ $level }) =>
    !$level || $level === 1
      ? "0"
      : $level === 2
      ? `var(--BrowseTreeItem-row-margin-left)`
      : `calc(var(--BrowseTreeItem-row-margin-left) * ${$level})`};

  margin-block-start: ${pxToRem(20)};
`;

// export const Toggle = styled(IconFactory)`
//   position: absolute;
//   left: calc(${fluidScale("28px", "22px")} * -1);
//   top: ${pxToRem(6)};
//   border-radius: 100%;

//   [aria-disabled] & {
//     display: none;
//   }

//   [data-focus-visible-added] & {
//     outline: 1px solid var(--border-color);
//     outline-offset: 5px;
//   }
// `;
